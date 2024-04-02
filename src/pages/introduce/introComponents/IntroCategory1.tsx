import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

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
          <strong style={{ fontWeight: 900 }}>"개혁의 부르심</strong>을 가지고{" "}
          <strong style={{ fontWeight: 900 }}>새부대로 준비</strong>되는 교회!"
        </Text>
        <Text size={"34px"} color="#3872C6">
          <strong style={{ fontWeight: 900 }}>동탄 뉴비전교회</strong>
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <img src={kimonyouimg} width={"30%"}></img>
        <Flex flexDirection="column">
          <Flex>
            <Text>
              환영인사환영인사환영인사환영인사환영인사환영
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환영
              <br />
              인사환영인사환영인사환영인사환영인사환영인사환
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사
              <br />
              환영인사환영인사환영인사환영인
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환영인사
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환
              <br />
              환영인사환영인사환영인사환영인사환영인사환영인사환
              <br />
              사환영인사환영인사환영인사
            </Text>
          </Flex>
          <Flex>
            <Text>
              <br />
              담임목사  김온유
              <br />
              장로회 신학대학원 M.Div 졸업
              <br />
              예장통합 여수노회 목사안수
              <br />
              쉐카이나 영광 미니스트리 대표
              <br />
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
