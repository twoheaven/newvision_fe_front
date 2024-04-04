import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import React from "react";

import useIsMobile from "@/hooks/useIsMobile";
import Header2 from "@/layout/Header2";

import mainImg from "./assets/mainpageimg.png";

const NewBannerSection = () => {
  const isMobile = useIsMobile();
  return (
    <Flex justifyContent="center" width="100%">
      <Flex width="100%" style={{ position: "relative", textAlign: "center" }}>
        {/* 배너 이미지 표시 */}
        <div style={{ textAlign: "center" }}>
          <img
            width={isMobile ? "150%" : "100%"}
            src={mainImg}
            alt="mainimg"
            style={
              isMobile
                ? {
                    pointerEvents: "none",
                    display: "block",
                    transform: "translateX(-10%)",
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
          width="80%"
          style={{ position: "absolute" }}
        >
          <Spacer height="5px" />
          <Header2 />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewBannerSection;
