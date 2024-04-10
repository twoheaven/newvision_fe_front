import React from "react";
import YouTube from "react-youtube";

interface YouTubePlayerProps {
  videoUrl: string;
}

// 유튜브 링크에서 video ID 추출하는 함수
function extractVideoId(url: string): string | null {
  // 패턴 설정
  const pattern =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  // 링크에서 video ID 추출
  const match = url.match(pattern);
  // video ID 반환
  return match ? match[1] : null;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoUrl }) => {
  // 유튜브 비디오 링크에서 video ID 추출
  const videoId = extractVideoId(videoUrl);

  // 유튜브 플레이어 옵션
  const opts = {
    height: "390",
    width: "640",
  };

  return (
    <div>
      {/* 유튜브 플레이어 */}
      {videoId && <YouTube videoId={videoId} opts={opts} />}
    </div>
  );
};

export default YouTubePlayer;
