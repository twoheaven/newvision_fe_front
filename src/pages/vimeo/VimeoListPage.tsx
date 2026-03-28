import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { db } from "../../note/firebase/config";
import Paths from "../../types/paths";
import { parseVimeoId } from "./parseVimeoId";

type VimeoVideoDoc = {
  title: string;
  vimeoUrl: string;
  createdAt?: string;
};

type VimeoVideo = VimeoVideoDoc & {
  id: string;
};

const copyToClipboard = async (text: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // Clipboard API가 없는 환경을 위한 폴백
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

const VimeoListPage = () => {
  const [videos, setVideos] = useState<VimeoVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [vimeoUrl, setVimeoUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchVideos = async () => {
    setIsLoading(true);
    try {
      const q = query(
        collection(db, "vimeoVideos"),
        orderBy("createdAt", "desc"),
      );
      const querySnapshot = await getDocs(q);
      const fetched = querySnapshot.docs.map((d) => {
        const data = d.data() as VimeoVideoDoc;
        return {
          id: d.id,
          title: data.title ?? "",
          vimeoUrl: data.vimeoUrl ?? "",
          createdAt: data.createdAt,
        } satisfies VimeoVideo;
      });
      setVideos(fetched);
    } catch (e) {
      console.error("Vimeo 목록 로드 실패:", e);
      alert("Vimeo 목록을 불러오지 못했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedUrl = vimeoUrl.trim();

    if (!trimmedTitle) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!trimmedUrl) {
      alert("Vimeo 링크를 입력해주세요.");
      return;
    }

    const parsedId = parseVimeoId(trimmedUrl);
    if (!parsedId) {
      alert("유효한 Vimeo URL이 아닙니다.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "vimeoVideos"), {
        title: trimmedTitle,
        vimeoUrl: trimmedUrl,
        createdAt: new Date().toISOString(),
      });

      setTitle("");
      setVimeoUrl("");
      await fetchVideos();
    } catch (err) {
      console.error("Vimeo 추가 실패:", err);
      alert("영상 추가에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteDoc(doc(db, "vimeoVideos", id));
      await fetchVideos();
    } catch (err) {
      console.error("Vimeo 삭제 실패:", err);
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Vimeo 영상 목록</h1>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 mb-6">
        <h2 className="text-lg font-semibold mb-3">Vimeo 링크 추가</h2>
        <form onSubmit={handleAdd} className="flex flex-col gap-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
            className="border rounded p-2"
          />
          <input
            value={vimeoUrl}
            onChange={(e) => setVimeoUrl(e.target.value)}
            placeholder="Vimeo URL (예: https://vimeo.com/123456789)"
            className="border rounded p-2"
          />
          <div className="flex gap-2 justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
            >
              {isSubmitting ? "추가 중..." : "추가"}
            </button>
          </div>
        </form>
      </div>

      {isLoading ? (
        <div className="text-center py-10">로딩 중...</div>
      ) : videos.length === 0 ? (
        <div className="text-center py-10">등록된 영상이 없습니다.</div>
      ) : (
        <div className="space-y-8 bg-gray-50 rounded-2xl p-4">
          {videos.map((video) => {
            const detailHref = `/vimeo/${video.id}`;
            return (
              <div
                key={video.id}
                className="bg-white border-2 border-black rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 shadow-md"
              >
                <div className="min-w-0">
                  <div className="font-semibold truncate text-base">
                    {video.title || "제목 없음"}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-end">
                  <Link
                    to={Paths.VimeoDetail.replace(":id", video.id)}
                    className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                  >
                    영상 보기
                  </Link>
                  <button
                    onClick={async () => {
                      try {
                        await copyToClipboard(
                          window.location.origin +
                            detailHref +
                            "?from=naver_cafe",
                        );
                        alert("주소가 복사되었습니다.");
                      } catch (err) {
                        console.error("복사 실패:", err);
                        alert("주소 복사에 실패했습니다.");
                      }
                    }}
                    className="bg-gray-200 text-gray-800 px-3 py-2 rounded hover:bg-gray-300"
                  >
                    주소 복사
                  </button>
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VimeoListPage;
