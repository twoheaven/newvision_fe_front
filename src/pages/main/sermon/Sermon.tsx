// Sermon.tsx
import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import axios from "axios";
import { useEffect, useState } from "react";

import SermonCard from "@/components/sermonCard/SermonCard";

// 비디오 데이터의 형태를 정의합니다.
interface VideoData {
  videoId: string;
  thumbnailUrl: string;
  publishedAt: string;
  playlistTitle: string;
  videoTitle: string;
}

// Sermon 컴포넌트를 정의합니다.
const Sermon = () => {
  // 가장 최신 비디오 데이터를 저장할 상태를 선언합니다.
  const [latestVideoData, setLatestVideoData] = useState<VideoData[]>([]);
  const [cardWidth, setCardWidth] = useState(window.innerWidth / 6.5);

  // 창 크기가 변할 때마다 cardWidth 업데이트
  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth / 6.5);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 컴포넌트가 마운트될 때 최신 비디오 데이터를 가져오는 useEffect 훅을 정의합니다.
  useEffect(() => {
    const fetchLatestVideoData = async () => {
      try {
        // 서버에서 최신 비디오 데이터를 가져오는 HTTP GET 요청
        const response = await axios.get<VideoData[]>("/api/latestYoutubeData");
        // 받아온 데이터로 상태를 업데이트합니다.
        setLatestVideoData(response.data.slice(0, 4)); // 배열의 길이를 최대 4개로 고정
      } catch (error) {
        // 최신 비디오 데이터를 가져오는 도중에 발생하는 오류를 처리합니다.
        console.error("Error fetching latest video data", error);
      }
    };

    // fetchLatestVideoData 함수를 호출합니다.
    fetchLatestVideoData();
  }, []);

  // Sermon 컴포넌트를 렌더링합니다.
  return (
    <>
      {/* 가장 최신 영상은 따로 표시합니다. */}
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
            {latestVideoData.length > 0 ? (
              <SermonCard
                height={`${cardWidth * 0.6 * 1.3}px`}
                width={`${cardWidth * 1.3}px`}
                size={"18px"}
                videoId={latestVideoData[0].videoId || ""}
              />
            ) : (
              // latestVideoData 배열이 비어있을 때에도 SermonCard를 렌더링합니다.
              <SermonCard
                height={`${cardWidth * 0.6 * 1.3}px`}
                width={`${cardWidth * 1.3}px`}
                size={"18px"}
                videoId=""
              />
            )}
          </Flex>
          {/* 나머지 최신 영상은 Flex 컴포넌트를 사용하여 나열합니다. */}
          <Flex flexDirection="column">
            <Flex gap={"10px"}>
              {/* latestVideoData가 비어있을 때에도 3번 반복하여 SermonCard를 렌더링합니다. */}
              {Array.from({ length: 3 }).map((_, index) => (
                <SermonCard
                  key={index}
                  height={`${cardWidth * 0.6}px`}
                  width={`${cardWidth}px`}
                  videoId=""
                />
              ))}
              {latestVideoData.map((videoData) => (
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
              {/* latestVideoData가 비어있을 때에도 3번 반복하여 SermonCard를 렌더링합니다. */}
              {Array.from({ length: 3 }).map((_, index) => (
                <SermonCard
                  key={index}
                  height={`${cardWidth * 0.6}px`}
                  width={`${cardWidth}px`}
                  videoId=""
                />
              ))}
              {latestVideoData.map((videoData) => (
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
      {/* 공간을 띄워주는 Spacer 컴포넌트를 추가합니다. */}
      <Spacer height={"50px"} />
    </>
  );
};

// Sermon 컴포넌트를 기본 내보내기로 내보냅니다.
export default Sermon;
