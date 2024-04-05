import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "@/styles/fonts";

import timeimg from "./asset/예배시간안내.jpg";
import offerimg from "./asset/온라인 동역 헌금안내.jpg";
import useIsMobile from "@/hooks/useIsMobile";

const IntroCategory4 = () => {
  const isMobile = useIsMobile();
  return (
    <Content>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text size={"24px"} font={Fonts.Bold}>
          예배 시간 안내
        </Text>
        <Spacer height={"5px"} />
        <Text size={"13px"} style={{ textAlign: "center" }}>
          예배 시작 시간 전에 오셔서 기도로 준비된 마음으로 예배에 참석해
          주시기를 바랍니다.
        </Text>
        <Spacer height={"50px"} />
        <img src={timeimg} width={isMobile ? "100%" : "80%"}></img>
      </Flex>
      <Spacer height={"50px"} />
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text size={"24px"} font={Fonts.Bold}>
          온라인 동역 헌금안내
        </Text>
        <Spacer height={"5px"} />
        <Text size={"13px"}>
          부득이한 사정으로 교회에 나오시기 어려우신 성도님들을 위하여
        </Text>
        <Text size={"13px"}>
          아래와 같이 헌금을 할 수 있는 방법을 안내드립니다.
        </Text>
        <Spacer height={"50px"} />
        <img src={offerimg} width={isMobile ? "100%" : "80%"}></img>
        <Spacer height={"15px"} />
        <Flex gap={"5px"} justifyContent="center">
          <Text>계좌 입금시 입금자명을</Text>
          <Text font={Fonts.Bold}>"이름+헌금명"</Text>
          <Text>순으로 기입해주시기 바랍니다.</Text>
        </Flex>
        <Text>ex) 김00십일조 / 박00주정</Text>
      </Flex>
    </Content>
  );
};

export default IntroCategory4;
