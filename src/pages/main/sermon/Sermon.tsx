// Sermon.tsx
import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import axios from "axios";
import { useEffect, useState } from "react";

import SermonCard from "@/components/sermonCard/SermonCard";
import useIsMobile from "@/hooks/useIsMobile";

interface VideoData {
  videoId: string;
  thumbnailUrl: string;
  publishedAt: string;
  playlistTitle: string;
  videoTitle: string;
}

const Sermon: React.FC = () => {
  const isMobile = useIsMobile();
  const [latestVideoData, setLatestVideoData] = useState<VideoData[]>([]);
  const [cardWidth, setCardWidth] = useState(
    isMobile ? window.innerWidth / 4 : window.innerWidth / 6.5,
  );

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth / 6.5);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

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
      <Flex gap={isMobile ? "10px" : "25px"} flexDirection="column">
        <Flex gap={isMobile ? "5px" : "25px"} alignItems={"center"}>
          <div
            style={
              isMobile
                ? { width: `${cardWidth * 1.4}px` }
                : { width: `${cardWidth * 1.3}px` }
            }
          >
            <Text
              size={isMobile ? "24px" : "34px"}
              style={{
                fontWeight: "bold",
              }}
            >
              예배와 말씀
            </Text>
          </div>
          <Text
            style={
              isMobile
                ? {
                    position: "relative",
                    top: "2px",
                    left: "5px",
                  }
                : {
                    position: "relative",
                    top: "32px",
                  }
            }
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
              {Array.from(isMobile ? { length: 2 } : { length: 3 }).map(
                (_, index) => (
                  <SermonCard
                    key={index}
                    height={`${cardWidth * 0.6}px`}
                    width={`${cardWidth}px`}
                    videoId={""}
                  />
                ),
              )}
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
              {Array.from(isMobile ? { length: 2 } : { length: 3 }).map(
                (_, index) => (
                  <SermonCard
                    key={index}
                    height={`${cardWidth * 0.6}px`}
                    width={`${cardWidth}px`}
                    videoId={""}
                  />
                ),
              )}
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
      <Spacer height={isMobile ? "10px" : "50px"} />
    </>
  );
};

export default Sermon;
