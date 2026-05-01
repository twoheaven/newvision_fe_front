import {
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  startAfter,
  where,
} from "firebase/firestore";

import { auth, db } from "@/note/firebase/config";

export const ALBUMS_PER_PAGE = 12;
const COLLECTION_NAME = "posts";
const CHURCH_ALBUM_CATEGORY = "churchAlbum";
const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

export type ChurchAlbumItem = {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  imagePath: string;
  createdAt?: unknown;
  createdByUid: string;
  createdByEmail?: string;
  category: string;
};

type FetchAlbumsParams = {
  cursor?: QueryDocumentSnapshot<DocumentData> | null;
};

export const fetchAlbumsPage = async ({ cursor = null }: FetchAlbumsParams) => {
  const base = [
    where("category", "==", CHURCH_ALBUM_CATEGORY),
    orderBy("createdAt", "desc"),
    limit(ALBUMS_PER_PAGE),
  ];
  const listQuery = cursor
    ? query(collection(db, COLLECTION_NAME), ...base, startAfter(cursor))
    : query(collection(db, COLLECTION_NAME), ...base);

  const snap = await getDocs(listQuery);
  const items = snap.docs.map(
    (docSnap) =>
      ({
        id: docSnap.id,
        ...docSnap.data(),
      }) as ChurchAlbumItem,
  );

  const lastDoc = snap.docs[snap.docs.length - 1] ?? null;
  let hasNext = false;

  if (lastDoc) {
    const nextCheck = query(
      collection(db, COLLECTION_NAME),
      where("category", "==", CHURCH_ALBUM_CATEGORY),
      orderBy("createdAt", "desc"),
      startAfter(lastDoc),
      limit(1),
    );
    const nextCheckSnap = await getDocs(nextCheck);
    hasNext = !nextCheckSnap.empty;
  }

  return {
    items,
    firstDoc: snap.docs[0] ?? null,
    lastDoc,
    hasNext,
  };
};

export const uploadChurchAlbum = async (title: string, file: File) => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("로그인한 사용자만 업로드할 수 있습니다.");
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
    throw new Error("이미지 업로드에 실패했습니다. ImgBB 응답을 확인해주세요.");
  }

  const uploadData = await uploadResponse.json();
  const imageUrl = uploadData?.data?.url as string | undefined;
  if (!imageUrl) {
    throw new Error("ImgBB 이미지 URL을 가져오지 못했습니다.");
  }

  await addDoc(collection(db, COLLECTION_NAME), {
    title,
    content: `<p><img src="${imageUrl}" alt="${title}" /></p>`,
    imageUrl,
    thumbnailUrl: imageUrl,
    imagePath: "",
    category: CHURCH_ALBUM_CATEGORY,
    author: currentUser.email || "익명",
    isNotice: false,
    hasAttachment: true,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    createdByUid: currentUser.uid,
    createdByEmail: currentUser.email ?? "",
  });
};
