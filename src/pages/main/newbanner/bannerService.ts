import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import { auth, db } from "@/note/firebase/config";

const COLLECTION_NAME = "posts";
const MAIN_BANNER_CATEGORY = "mainBanner";
const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

export type MainBannerItem = {
  id: string;
  title: string;
  imageUrl: string;
  thumbnailUrl?: string;
  createdAt?: unknown;
  createdByUid?: string;
  createdByEmail?: string;
};

const toCreatedAtValue = (createdAt: unknown) => {
  if (!createdAt) return 0;
  if (typeof createdAt === "string") return new Date(createdAt).getTime();
  if (typeof createdAt === "number") return createdAt;
  if (
    typeof createdAt === "object" &&
    createdAt !== null &&
    "seconds" in (createdAt as { seconds?: number })
  ) {
    return ((createdAt as { seconds?: number }).seconds ?? 0) * 1000;
  }
  return 0;
};

export const fetchMainBanners = async () => {
  const bannerQuery = query(
    collection(db, COLLECTION_NAME),
    where("category", "==", MAIN_BANNER_CATEGORY),
  );
  const snap = await getDocs(bannerQuery);
  const items = snap.docs.map(
    (docSnap) =>
      ({
        id: docSnap.id,
        ...docSnap.data(),
      }) as MainBannerItem,
  );

  return items.sort(
    (a, b) => toCreatedAtValue(b.createdAt) - toCreatedAtValue(a.createdAt),
  );
};

export const uploadMainBanner = async (title: string, file: File) => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("로그인한 사용자만 배너를 업로드할 수 있습니다.");
  }

  if (!IMGBB_API_KEY) {
    throw new Error("ImgBB API 키가 없습니다. .env의 VITE_IMGBB_API_KEY를 확인해주세요.");
  }

  const formData = new FormData();
  formData.append("image", file);

  const uploadResponse = await fetch(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    },
  );

  if (!uploadResponse.ok) {
    throw new Error("배너 이미지 업로드에 실패했습니다.");
  }

  const uploadData = await uploadResponse.json();
  const imageUrl = uploadData?.data?.url as string | undefined;
  if (!imageUrl) {
    throw new Error("업로드된 배너 이미지 URL을 확인할 수 없습니다.");
  }

  await addDoc(collection(db, COLLECTION_NAME), {
    title,
    content: `<p><img src="${imageUrl}" alt="${title}" /></p>`,
    imageUrl,
    thumbnailUrl: imageUrl,
    category: MAIN_BANNER_CATEGORY,
    author: currentUser.email || "익명",
    isNotice: false,
    hasAttachment: true,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    createdByUid: currentUser.uid,
    createdByEmail: currentUser.email ?? "",
  });
};

export const deleteMainBanner = async (id: string) => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("로그인한 사용자만 배너를 삭제할 수 있습니다.");
  }
  await deleteDoc(doc(db, COLLECTION_NAME, id));
};
