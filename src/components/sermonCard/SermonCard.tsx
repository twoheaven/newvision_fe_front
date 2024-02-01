// SermonCard.tsx
import { Flex, Text } from "@dohyun-ko/react-atoms";
import axios from "axios";
import React, { useEffect, useState } from "react";

// Importing a default image for cases where the video thumbnail is not available
import defaultimg from "@/assets/default-image.svg";

interface VideoData {
  videoId: string;
  thumbnailUrl: string;
  publishedAt: string;
  playlistTitle: string;
  videoTitle: string;
}

interface SermonCardProps {
  videoId: string;
  size?: string;
  height?: string;
  width?: string;
}

const SermonCard: React.FC<SermonCardProps> = ({
  videoId,
  size,
  height,
  width,
}) => {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get<VideoData>(
          `/api/youtubeData/${videoId}`,
        );
        setVideoData(response.data);
      } catch (error) {
        console.error("Error fetching video data", error);
        // 데이터를 가져오지 못할 경우, 기본 데이터로 설정
        setVideoData({
          videoId,
          thumbnailUrl: defaultimg, // 기본 이미지 주소
          publishedAt: "N/A",
          playlistTitle: "N/A",
          videoTitle: "N/A",
        });
      }
    };

    fetchVideoData();
  }, [videoId]);

  console.log("VideoData:", videoData); // 콘솔에 데이터 출력

  if (!videoData) {
    // 데이터를 가져오지 못한 경우에도 기본 이미지를 보여줄 수 있도록 처리
    return (
      <Flex flexDirection="column" className="sermon-card">
        <img
          src={defaultimg}
          alt="Default Video Thumbnail"
          style={{ width: width || "100%", height: height || "auto" }}
        />
        <Text size={size || "14px"}>Date Playlist Title</Text>
        <Text size={size || "14px"}>Video Title</Text>
      </Flex>
    );
  }

  return (
    <Flex flexDirection="column" className="sermon-card">
      <img
        src={videoData ? videoData.thumbnailUrl : defaultimg}
        alt="Video Thumbnail"
        style={{ width: width || "100%", height: height || "auto" }}
      />
      <Text size={size || "14px"}>
        {videoData ? `${videoData.publishedAt} ${videoData.playlistTitle}` : ""}
      </Text>
      <Text size={size || "14px"}>{videoData ? videoData.videoTitle : ""}</Text>
    </Flex>
  );
};

export default SermonCard;
