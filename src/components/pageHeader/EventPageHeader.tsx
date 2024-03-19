import { Flex, Spacer } from "@dohyun-ko/react-atoms";

import Header2 from "@/layout/Header2";

import mainImg from "./assets/holyschoolimg.webp";

// BannerSection 컴포넌트 정의
const EventPageHeader = () => {
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
          <img
            width={"100%"}
            src={mainImg}
            alt={"mainimg"}
            style={{
              pointerEvents: "none",
              width: "100%",
              minWidth: "100%",
            }}
          />

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

export default EventPageHeader;
