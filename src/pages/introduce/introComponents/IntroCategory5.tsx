import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

import thumbnail2 from "./asset/다은마을(중)~뉴비전교회.png";
import thumbnail3 from "./asset/롯데캐슬~뉴비전교회.png";
import thumbnail1 from "./asset/병점역~병점역사거리.png"; // 썸네일 이미지 추가
import roadimg1 from "./asset/오시는길.jpg";
import roadimg2 from "./asset/오시는길2.jpg";
import roadimg3 from "./asset/오시는길2(2).jpg";
import roadimg4 from "./asset/오시는길3.jpg";
import roadimg5 from "./asset/오시는길3(2).jpg";

const IntroCategory5 = () => {
  const isMobile = useIsMobile();
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
          <img src={roadimg1} width={isMobile ? "100%" : "60%"}></img>
          <img src={roadimg2} width={isMobile ? "100%" : "60%"}></img>
          <div
            style={{ width: isMobile ? "100%" : "60%", position: "relative" }}
          >
            <img src={roadimg3} width="100%" />
            <img
              width="70%"
              src={thumbnail1}
              style={{
                position: "absolute",
                top: "32%",
                left: "15%",
                objectFit: "cover",
              }}
            ></img>
          </div>{" "}
          <img src={roadimg4} width={isMobile ? "100%" : "60%"}></img>
          <div
            style={{ width: isMobile ? "100%" : "60%", position: "relative" }}
          >
            <img src={roadimg5} width="100%" />
            <img
              width="70%"
              src={thumbnail2}
              style={{
                position: "absolute",
                top: "20%",
                left: "15%",
                objectFit: "cover",
              }}
            ></img>
            <img
              width="70%"
              src={thumbnail3}
              style={{
                position: "absolute",
                top: "60%",
                left: "15%",
                objectFit: "cover",
              }}
            ></img>
          </div>{" "}
        </Flex>
      </Content>
    </>
  );
};

export default IntroCategory5;
