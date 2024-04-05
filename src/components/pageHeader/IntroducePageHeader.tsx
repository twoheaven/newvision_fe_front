import { Flex, Spacer } from "@dohyun-ko/react-atoms";

import useIsMobile from "@/hooks/useIsMobile";
import Header2Provider from "@/layout/Header2Provider";

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
