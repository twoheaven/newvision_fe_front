import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import React, { CSSProperties } from "react";
import { Helmet } from "react-helmet-async";
import YouTube from "react-youtube";

import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

import roadimg1 from "./asset/오시는길.jpg";
import roadimg2 from "./asset/오시는길2.jpg";
import roadimg3 from "./asset/오시는길2(2).jpg";
import roadimg4 from "./asset/오시는길3.jpg";
import roadimg5 from "./asset/오시는길3(2).jpg";

const videoId2 = "ov9LO6_hZPg"; // 유튜브 비디오 ID를 여기에 넣습니다.
const videoId3 = "cV2Dq5xAR_0"; // 유튜브 비디오 ID를 여기에 넣습니다.
const videoId1 = "nhyrV9N_Idg"; // 유튜브 비디오 ID를 여기에 넣습니다.

const IntroCategory5 = () => {
  const isMobile = useIsMobile();

  const opts = {
    width: "100%",
    height: "100%",

    playerVars: {
      autoplay: 0, // 자동 재생
      controls: 0, // 플레이어 컨트롤 표시
      loop: 1, // 반복 재생
      mute: 0, // 음소거
      start: 0, // 0초부터 시작
      modestbranding: 1, // 최소한의 YouTube 로고 표시
      rel: 0, // 관련 동영상 표시하지 않음
    },
  };

  const videoContainerStyle: CSSProperties = {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    overflow: "hidden",
    width: "100%",
    maxWidth: isMobile ? "100%" : "640px",
    margin: "0 auto",
  };

  const iframeStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div>
        <Helmet>
          <meta
            name="description"
            content="뉴비전교회 오시는 길을 안내합니다."
          />
        </Helmet>
      </div>
      <Content>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text size={"24px"} font={Fonts.Bold}>
            오시는 길
          </Text>
          <Spacer height={"5px"} />
          <Text size={"13px"}>뉴비전교회 오시는 길을 안내합니다.</Text>
          <Spacer height={"50px"} />
          <img src={roadimg1} width={isMobile ? "100%" : "60%"} />
          <img src={roadimg2} width={isMobile ? "100%" : "60%"} />
          <div
            style={{ width: isMobile ? "100%" : "60%", position: "relative" }}
          >
            <img src={roadimg3} width="100%" />
            <div
              style={{
                position: "absolute",
                top: "32%",
                left: "15%",
                objectFit: "cover",
                width: "70%",
              }}
            >
              <div style={videoContainerStyle}>
                <YouTube videoId={videoId1} opts={opts} style={iframeStyle} />
              </div>
            </div>
          </div>
          <img src={roadimg4} width={isMobile ? "100%" : "60%"} />
          <div
            style={{ width: isMobile ? "100%" : "60%", position: "relative" }}
          >
            <img src={roadimg5} width="100%" />
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "15%",
                objectFit: "cover",
                width: "70%",
              }}
            >
              <div style={videoContainerStyle}>
                <YouTube videoId={videoId2} opts={opts} style={iframeStyle} />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "15%",
                objectFit: "cover",
                width: "70%",
              }}
            >
              <div style={videoContainerStyle}>
                <YouTube videoId={videoId3} opts={opts} style={iframeStyle} />
              </div>
            </div>
          </div>
        </Flex>
      </Content>
    </>
  );
};

export default IntroCategory5;
