import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

import visionimg from "./asset/교회비전.jpg";

const IntroCategory3 = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        <Helmet>
          <title>교회 비전</title>
          <meta
            name="descripttion"
            content="뉴비전교회의 비전을 안내드립니다."
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
            교회 비전
          </Text>
          <Spacer height={"5px"} />
          <Text size={"13px"}>뉴비전교회의 비전을 안내드립니다.</Text>
          <Spacer height={"50px"} />
          <img
            src={visionimg}
            width={isMobile ? "100%" : "80%"}
            style={isMobile ? { transform: "translateX(0%)" } : {}}
          />
        </Flex>
      </Content>
    </>
  );
};

export default IntroCategory3;
