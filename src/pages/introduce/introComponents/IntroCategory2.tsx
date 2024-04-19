import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

import missionimg from "./asset/목회사명.jpg";

const IntroCategory2 = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        <Helmet>
          <meta
            name="description"
            content="뉴비전교회는 다음과 같은 목회사명을 가지고 깨어 신부단장하는 교회입니다!"
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
            목회 사명
          </Text>
          <Spacer height={"5px"} />
          <Text size={"13px"} style={{ textAlign: "center" }}>
            뉴비전교회는 다음과 같은 목회 사명을 가지고 깨어 신부단장하는
            교회입니다!
          </Text>
          <Spacer height={"50px"} />
          <img src={missionimg} width={isMobile ? "100%" : "50%"}></img>
        </Flex>
      </Content>
    </>
  );
};

export default IntroCategory2;
