import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";

const Sermon: React.FC = () => {
  const isMobile = useIsMobile();
  const [cardWidth, setCardWidth] = useState(
    isMobile ? window.innerWidth - 32 : window.innerWidth / 8,
  );

  // videoId 상태 추가
  const [videoIds, setVideoIds] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(isMobile ? window.innerWidth - 32 : window.innerWidth / 8);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // JSON 파일을 가져오는 useEffect 추가
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/twoheaven/youtube-fetch-actions/main/videos.json";

    // fetch로 videoId 목록 가져오기
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch video links");
        }
        return response.json();
      })
      .then((data) => {
        // URL에서 videoId만 추출하여 배열에 저장
        const videoIds = data
          .map((url: string) => {
            const match = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/);
            return match ? match[1] : null;
          })
          .filter((id: string | null) => id !== null);

        setVideoIds(videoIds); // 가져온 videoId 목록 업데이트
      })
      .catch((error) => {
        console.error("Error fetching video links:", error);
      });
  }, []);

  const getVideoHeight = (width: number) => {
    return (width * 9) / 16;
  };

  return (
    <>
      <div>
        <Helmet>
          <meta name="description" content="메인 화면 김온유 목사 설교 말씀" />
        </Helmet>
      </div>

      <Flex gap={isMobile ? "20px" : "25px"} flexDirection="column">
        <Flex gap={isMobile ? "5px" : "25px"} alignItems={"center"}>
          <div style={{ width: isMobile ? "auto" : `${cardWidth * 1.78}px` }}>
            <Text
              size={isMobile ? "24px" : "34px"}
              style={{ fontWeight: "bold" }}
            >
              예배와 말씀
            </Text>
          </div>
          <Text
            style={
              isMobile
                ? { position: "relative", top: "2px" }
                : { position: "relative", top: "32px" }
            }
          >
            {isMobile ? "" : "최근설교"}
          </Text>
        </Flex>

        {isMobile ? (
          // 모바일 레이아웃
          <Flex flexDirection="column" gap="20px">
            {/* 첫 번째 영상 */}
            {videoIds.length > 0 && videoIds[0] && (
              <iframe
                width={cardWidth}
                height={getVideoHeight(cardWidth)}
                src={`https://www.youtube.com/embed/${videoIds[0]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}

            {/* 두 번째 영상 */}
            {videoIds.length > 1 && videoIds[1] && (
              <iframe
                width={cardWidth}
                height={getVideoHeight(cardWidth)}
                src={`https://www.youtube.com/embed/${videoIds[1]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}

            {/* 세 번째 영상 */}
            {videoIds.length > 2 && videoIds[2] && (
              <iframe
                width={cardWidth}
                height={getVideoHeight(cardWidth)}
                src={`https://www.youtube.com/embed/${videoIds[2]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </Flex>
        ) : (
          // 데스크톱 레이아웃
          <Flex gap={"25px"}>
            <Flex>
              {videoIds.length > 0 && videoIds[0] && (
                <iframe
                  width={(cardWidth * 16) / 9}
                  height={cardWidth}
                  src={`https://www.youtube.com/embed/${videoIds[0]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </Flex>
            <Flex flexDirection="column">
              <Flex gap={"5px"}>
                {videoIds.length > 1 && videoIds[1] && (
                  <iframe
                    width={(cardWidth * 16 * 0.75) / 9}
                    height={cardWidth * 0.75}
                    src={`https://www.youtube.com/embed/${videoIds[1]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
                {videoIds.length > 2 && videoIds[2] && (
                  <iframe
                    width={(cardWidth * 16 * 0.75) / 9}
                    height={cardWidth * 0.75}
                    src={`https://www.youtube.com/embed/${videoIds[2]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
                {videoIds.length > 3 && videoIds[3] && (
                  <iframe
                    width={(cardWidth * 16 * 0.75) / 9}
                    height={cardWidth * 0.75}
                    src={`https://www.youtube.com/embed/${videoIds[3]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
              </Flex>
              <Spacer height={"30px"} />
              <Text>성령학교 영상</Text>
              <Spacer height={"10px"} />
              <Flex gap={"5px"}>
                {videoIds.length > 4 && videoIds[4] && (
                  <iframe
                    width={(cardWidth * 16 * 0.75) / 9}
                    height={cardWidth * 0.75}
                    src={`https://www.youtube.com/embed/${videoIds[4]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
                {videoIds.length > 5 && videoIds[5] && (
                  <iframe
                    width={(cardWidth * 16 * 0.75) / 9}
                    height={cardWidth * 0.75}
                    src={`https://www.youtube.com/embed/${videoIds[5]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
                {videoIds.length > 6 && videoIds[6] && (
                  <iframe
                    width={(cardWidth * 16 * 0.75) / 9}
                    height={cardWidth * 0.75}
                    src={`https://www.youtube.com/embed/${videoIds[6]}?autoplay=0&controls=0&loop=1&mute=0&start=0`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
      <Spacer height={isMobile ? "20px" : "50px"} />
    </>
  );
};

export default Sermon;
