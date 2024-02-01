import { Flex } from "@dohyun-ko/react-atoms";
import axios from "axios";
import React, { useEffect, useState } from "react";

import SermonCard from "./SermonCard";

interface VideoData {
  videoId: string;
  thumbnailUrl: string;
  publishedAt: string;
  playlistTitle: string;
  videoTitle: string;
}

const SermonCardList: React.FC = () => {
  const [videoDataList, setVideoDataList] = useState<VideoData[]>([]);

  useEffect(() => {
    const fetchVideoDataList = async () => {
      try {
        const response = await axios.get<VideoData[]>("/api/youtubeData");
        setVideoDataList(response.data);
      } catch (error) {
        console.error("Error fetching video data list", error);
      }
    };

    fetchVideoDataList();
  }, []);

  return (
    <Flex className="sermon-card-list">
      {videoDataList.map((videoData) => (
        <SermonCard key={videoData.videoId} videoId={videoData.videoId || ""} />
      ))}
    </Flex>
  );
};

export default SermonCardList;
