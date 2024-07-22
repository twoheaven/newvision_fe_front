import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import Header2Provider from "@/layout/Header2Provider";

import BannerSlider from "./BannerSlider";

const NewBannerSection = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div>
        <Helmet>
          <meta
            name="description"
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
            <BannerSlider />
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
