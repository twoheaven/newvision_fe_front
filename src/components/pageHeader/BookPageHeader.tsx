import { Flex, Spacer } from "@dohyun-ko/react-atoms";

import useIsMobile from "@/hooks/useIsMobile";
import Header2 from "@/layout/Header2";

import mainImg from "./assets/writingimg.webp";

// BannerSection 컴포넌트 정의
const BookPageHeader = () => {
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
                      transform: "translateX(-30%)",
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
            width={"80%"}
            style={{
              position: "absolute",
            }}
          >
            <Spacer height={"5px"} />
            <Header2 />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default BookPageHeader;
