// SermonCard.tsx
import { Flex, Text } from "@dohyun-ko/react-atoms";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const [videoData, setVideoData] = useState<VideoData | null>({
    videoId,
    thumbnailUrl: defaultimg,
    publishedAt: "N/A",
    playlistTitle: "N/A",
    videoTitle: "N/A",
  });

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get<VideoData>(
          `/api/youtubeData/${videoId}`,
        );
        setVideoData(response.data || videoData);
      } catch (error) {
        console.error("Error fetching video data", error);
      }
    };

    fetchVideoData();
  }, [videoId, videoData]);

  if (!videoData) {
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
        src={videoData.thumbnailUrl}
        alt="Video Thumbnail"
        style={{ width: width || "100%", height: height || "auto" }}
      />
      <Text size={size || "14px"}>
        {videoData.publishedAt} {videoData.playlistTitle}
      </Text>
      <Text size={size || "14px"}>{videoData.videoTitle}</Text>
    </Flex>
  );
};

export default SermonCard;
