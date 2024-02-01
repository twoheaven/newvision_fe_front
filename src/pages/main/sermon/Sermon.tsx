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
      <Text size={"34px"}>예배와 말씀</Text>

      {/* 가장 최신 영상은 따로 표시합니다. */}
      <Flex>
        {Array.isArray(latestVideoData) && latestVideoData.length > 0 ? (
          <SermonCard
            size={""}
            videoId={latestVideoData[0].videoId || ""}
            height={`${cardWidth * 0.6}px`}
            width={`${cardWidth}px`}
          />
        ) : (
          // latestVideoData 배열이 비어있을 때에도 SermonCard를 렌더링합니다.
          <SermonCard
            size={"20px"}
            height={"220px"}
            width={"380px"}
            videoId=""
          />
        )}

        {/* 나머지 최신 영상은 Flex 컴포넌트를 사용하여 나열합니다. */}
        <Flex>
          {/* latestVideoData가 비어있을 때에도 3번 반복하여 SermonCard를 렌더링합니다. */}
          {Array.from({ length: 3 }).map((_, index) => (
            <SermonCard
              key={index}
              videoId=""
              height={`${cardWidth * 0.6}px`}
              width={`${cardWidth}px`}
            />
          ))}
          {Array.isArray(latestVideoData) &&
            latestVideoData.map((videoData) => (
              <SermonCard
                key={videoData.videoId}
                videoId={videoData.videoId || ""}
                height={`${cardWidth * 0.6}px`}
                width={`${cardWidth}px`}
              />
            ))}
        </Flex>
      </Flex>
      {/* 공간을 띄워주는 Spacer 컴포넌트를 추가합니다. */}
      <Spacer height={"50px"} />
    </>
  );
};

// Sermon 컴포넌트를 기본 내보내기로 내보냅니다.
export default Sermon;
