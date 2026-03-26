import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../note/firebase/config";
import { parseVimeoId } from "./parseVimeoId";

type VimeoVideoDoc = {
  title?: string;
  vimeoUrl?: string;
  createdAt?: string;
};

const VimeoDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<VimeoVideoDoc | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      if (!id) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const docSnap = await getDoc(doc(db, "vimeoVideos", id));
        if (docSnap.exists()) {
          setVideo(docSnap.data() as VimeoVideoDoc);
        } else {
          setVideo(null);
        }
      } catch (err) {
        console.error("Vimeo 상세 로드 실패:", err);
        alert("영상 정보를 불러오지 못했습니다.");
        setVideo(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  const vimeoId = useMemo(() => {
    if (!video?.vimeoUrl) return null;
    return parseVimeoId(video.vimeoUrl);
  }, [video?.vimeoUrl]);

  if (isLoading) return <div className="p-6 text-center">로딩 중...</div>;

  if (!video || !video.vimeoUrl) {
    return <div className="p-6 text-center">영상이 존재하지 않습니다.</div>;
  }

  if (!vimeoId) {
    return (
      <div className="p-6 text-center">유효하지 않은 Vimeo URL 입니다.</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4 gap-3">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold truncate">
            {video.title || "제목 없음"}
          </h1>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          borderRadius: 12,
          overflow: "hidden",
          background: "#000",
        }}
      >
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}`}
          title={video.title || "Vimeo video"}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>
    </div>
  );
};

export default VimeoDetailPage;
