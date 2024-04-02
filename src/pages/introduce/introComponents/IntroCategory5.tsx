import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

import roadimg from "./asset/오시는길.jpg";

const IntroCategory5 = () => {
  const isMobile = useIsMobile();
  return (
    <Content>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text size={"24px"} font={Fonts.Bold}>
          오시는 길
        </Text>
        <Spacer height={"5px"} />
        <Text size={"13px"}>뉴비전교회 오시는 길을 안내합니다.</Text>
        <Spacer height={"50px"} />
        <img src={roadimg} width={isMobile ? "85%" : "50%"}></img>
      </Flex>
    </Content>
  );
};

export default IntroCategory5;
