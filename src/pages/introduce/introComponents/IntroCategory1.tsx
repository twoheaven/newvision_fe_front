import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "@/styles/fonts";

import kimonyouimg from "./asset/목사님사진.jpg";

const IntroCategory1 = () => {
  return (
    <Content>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text size={"24px"} style={{ fontWeight: "bold" }}>
          환영합니다
        </Text>
        <Text>뉴비전교회에 오신 여러분을 진심으로 환영합니다.</Text>
        <Spacer height={"50px"} />
        <Text size={"34px"} color="#3872C6">
          <Flex justifyContent="column" gap={"5px"}>
            <Flex>
              <strong>
                <Text size={"34px"} font={Fonts.Bold}>
                  "개혁의 부르심
                </Text>
              </strong>
              을 가지고
            </Flex>
            <Flex>
              <strong>
                <Text size={"34px"} font={Fonts.Bold}>
                  새부대로 준비
                </Text>
              </strong>
              되는 교회!"
            </Flex>
          </Flex>
        </Text>
        <Text size={"34px"} color="#3872C6">
          <strong style={{ fontWeight: 900 }}>동탄 뉴비전교회</strong>
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <img src={kimonyouimg} width={"30%"}></img>
        <Flex flexDirection="column" justifyContent="center">
          <Flex>
            <Text>
              환영인사환영인사환영인사환영인사환영인사환영
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환영
              <br />
              인사환영인사환영인사환영인사환영인사환영인사환
              <Text size={"10px"}>
                <br />
              </Text>
              환영인사환영인사환영인사환영인사환영인사환영인사
              <br />
              환영인사환영인사환영인사환영인
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환영인사
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환
              <Text size={"10px"}>
                <br />
              </Text>
              환영인사환영인사환영인사환영인사환영인사환영인사환
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환
              <br />
              사환영인사환영인사환영인사
              <br />
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <br />
            <Flex alignItems="center" gap={"5px"}>
              <Text font={Fonts.Bold} color="gray" size={"20px"}>
                담임목사
              </Text>
              <Text font={Fonts.Bold} size={"24px"}>
                김온유
              </Text>
            </Flex>
            <Text>
              장로회 신학대학원 M.Div 졸업
              <br />
              예장통합 여수노회 목사안수
              <br />
              쉐카이나 영광 미니스트리 대표
              <br />
            </Text>
            <Text font={Fonts.Bold}>
              쉐카이나 성령학교 강사
              <br />
              동탄 뉴비전교회 담임목사
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Content>
  );
};

export default IntroCategory1;
