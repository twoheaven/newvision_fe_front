import { Flex, Spacer } from "@dohyun-ko/react-atoms";

import useIsMobile from "@/hooks/useIsMobile";
import Header2Provider from "@/layout/Header2Provider";

import Fonts from "../../styles/fonts";
import mainImg from "./assets/introduceimg.webp";

// BannerSection 컴포넌트 정의
const IntroducePageHeader = () => {
  const isMobile = useIsMobile();
  // JSX 반환
  return (
    <>
      {/* 배너 섹션 영역 */}
      <Flex justifyContent={"center"} width={"100%"}>
        <Flex
          width={"100%"}
          style={{
            position: "relative",
          }}
        >
          {/* 배너 이미지 표시 */}
          <div style={{ overflow: "hidden" }}>
            <img
              width={isMobile ? "200%" : "100%"}
              src={mainImg}
              alt={"mainimg"}
              style={
                isMobile
                  ? {
                      pointerEvents: "none",
                      transform: "translateX(-25%)",
                    }
                  : {
                      pointerEvents: "none",
                    }
              }
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white", // 텍스트 색상
                fontSize: "2rem", // 폰트 크기
                fontWeight: Fonts.Bold, // 폰트 굵기
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // 텍스트 그림자
              }}
            >
              소개
            </div>
          </div>

          {/* 헤더 */}
          <Flex
            justifyContent="center"
            width={isMobile ? "100%" : "80%"}
            style={{
              position: "absolute",
            }}
          >
            <Spacer height={"5px"} />
            <Header2Provider />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default IntroducePageHeader;
