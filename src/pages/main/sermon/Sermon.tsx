// Sermon.tsx
import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import axios from "axios";
import { useEffect, useState } from "react";

import SermonCard from "@/components/sermonCard/SermonCard";

interface VideoData {
  videoId: string;
  thumbnailUrl: string;
  publishedAt: string;
  playlistTitle: string;
  videoTitle: string;
}

const Sermon: React.FC = () => {
  const [latestVideoData, setLatestVideoData] = useState<VideoData[]>([]);
  const [cardWidth, setCardWidth] = useState(window.innerWidth / 6.5);

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth / 6.5);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchLatestVideoData = async () => {
      try {
        const response = await axios.get<VideoData[]>("/api/latestYoutubeData");
        setLatestVideoData(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching latest video data", error);
      }
    };

    fetchLatestVideoData();
  }, []);

  return (
    <>
      <Flex gap={"25px"} flexDirection="column">
        <Flex gap={"25px"}>
          <div style={{ width: `${cardWidth * 1.3}px` }}>
            <Text size={"34px"}>예배와 말씀</Text>
          </div>
          <Text
            style={{
              position: "relative",
              top: "42px",
            }}
          >
            최근설교
          </Text>
        </Flex>
        <Flex gap={"25px"}>
          <Flex>
            {Array.isArray(latestVideoData) && latestVideoData.length > 0 ? (
              <SermonCard
                height={`${cardWidth * 0.6 * 1.3}px`}
                width={`${cardWidth * 1.3}px`}
                size={"18px"}
                videoId={latestVideoData[0].videoId || ""}
              />
            ) : (
              <SermonCard
                height={`${cardWidth * 0.6 * 1.3}px`}
                width={`${cardWidth * 1.3}px`}
                size={"18px"}
                videoId={""}
              />
            )}
          </Flex>
          <Flex flexDirection="column">
            <Flex gap={"10px"}>
              {Array.from({ length: 3 }).map((_, index) => (
                <SermonCard
                  key={index}
                  height={`${cardWidth * 0.6}px`}
                  width={`${cardWidth}px`}
                  videoId={""}
                />
              ))}
              {Array.isArray(latestVideoData) &&
                latestVideoData.map((videoData) => (
                  <SermonCard
                    key={videoData.videoId}
                    height={`${cardWidth * 0.6}px`}
                    width={`${cardWidth}px`}
                    videoId={videoData.videoId || ""}
                  />
                ))}
            </Flex>
            <Spacer height={"30px"} />
            <Text>성령학교 영상</Text>
            <Spacer height={"10px"} />
            <Flex gap={"10px"}>
              {Array.from({ length: 3 }).map((_, index) => (
                <SermonCard
                  key={index}
                  height={`${cardWidth * 0.6}px`}
                  width={`${cardWidth}px`}
                  videoId={""}
                />
              ))}
              {Array.isArray(latestVideoData) &&
                latestVideoData.map((videoData) => (
                  <SermonCard
                    key={videoData.videoId}
                    height={`${cardWidth * 0.6}px`}
                    width={`${cardWidth}px`}
                    videoId={videoData.videoId || ""}
                  />
                ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Spacer height={"50px"} />
    </>
  );
};

export default Sermon;
