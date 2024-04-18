import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import Header2Provider from "@/layout/Header2Provider";

import mainImg from "./assets/mainpageimg.png";

const NewBannerSection = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div>
        <Helmet>
          <title>뉴비전교회 홈페이지 배너</title>
          <meta
            name="descripttion"
            content="뉴비전교회 메인화면 홈페이지 배너"
          />
        </Helmet>
      </div>

      <Flex justifyContent="center" width="100%">
        <Flex
          width="100%"
          style={{ position: "relative", textAlign: "center" }}
        >
          {/* 배너 이미지 표시 */}
          <div style={{ textAlign: "center", overflow: "hidden" }}>
            <img
              width={isMobile ? "140%" : "100%"}
              src={mainImg}
              alt="mainimg"
              style={
                isMobile
                  ? {
                      pointerEvents: "none",
                      display: "block",
                      transform: "translateX(-15%)",
                    }
                  : {
                      pointerEvents: "none",
                      display: "block",
                    }
              }
            />
          </div>
          {/* 헤더 */}
          <Flex
            justifyContent="center"
            width={isMobile ? "100%" : "80%"}
            style={{ position: "absolute" }}
          >
            <Spacer height="5px" />
            <Header2Provider />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default NewBannerSection;
