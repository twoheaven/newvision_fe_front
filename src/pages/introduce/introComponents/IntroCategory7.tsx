import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

const IntroCategory7 = () => {
  const isMobile = useIsMobile();
  return (
    <Content>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        style={
          isMobile
            ? { backgroundColor: "#F4F4F4", transform: "translateX(0%)" }
            : { backgroundColor: "#F4F4F4" }
        }
      >
        <Spacer height={"30px"} />
        <Text size={"24px"} font={Fonts.Bold}>
          자주 묻는 질문
        </Text>
        <Spacer height={"5px"} />
        <Text size={"13px"} style={{ textAlign: "center" }}>
          뉴비전교회에 대해 자주 물어보시는 질문과 그에 대한 답변들을
          알려드립니다.
        </Text>
        <Spacer height={"50px"} />
        <Flex flexDirection="column">
          <Text size={"18px"} font={Fonts.Bold}>
            1. 뉴비전교회는 WCC(세계교회협의회)에 가입되어 있습니까?
          </Text>
          <p>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
          </p>
        </Flex>
        <Flex flexDirection="column">
          <Text size={"18px"} font={Fonts.Bold}>
            1. 뉴비전교회는 WCC(세계교회협의회)에 가입되어 있습니까?
          </Text>
          <p>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
          </p>
        </Flex>
        <Flex flexDirection="column">
          <Text size={"18px"} font={Fonts.Bold}>
            1. 뉴비전교회는 WCC(세계교회협의회)에 가입되어 있습니까?
          </Text>
          <p>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
          </p>
        </Flex>
        <Flex flexDirection="column">
          <Text size={"18px"} font={Fonts.Bold}>
            1. 뉴비전교회는 WCC(세계교회협의회)에 가입되어 있습니까?
          </Text>
          <p>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
            <Text>뉴비전교회는 WCC에 가입되어 있지 않습니다.</Text>
          </p>
        </Flex>
        <Spacer height={"20px"} />
      </Flex>
    </Content>
  );
};

export default IntroCategory7;
