import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "../../../../styles/fonts";
import ArrowBox from "../component/ArrowBox";
import DetailBookBox from "../component/DetailBookBox";
import bookdatas from "../data/bookdatas";

const a = `온전한 것이 올 때 폐하는 것은 인정했지만, 온전한 것이 온다는 것은 ‘성경의 완성’이 아니라 ‘재림’이라는 것을 앞뒤 문맥을 통해 알 수가 있습니다.

\n기독교 내에 일반적인 통념을 보면 성경이 예언이고 설교가 예언이라고 말하고 있습니다. 설교가 예언적인 요소를 지니지만 설교 자체를 예언이라고 일반화시키는 주장은 잘못된 것입니다.

\n(벧후 1:21) 예언은 언제든지 사람의 뜻으로 낸 것이 아니요 오직 성령의 감동하심을 받은 사람들이 하나님께 받아 말한 것임이라

\n성경책이 사람이 성령의 감동하심을 받아 적은 책이라면 예언 또한 성령의 감동 안에 이루어지는 예언을 통해 일하시는 하나님의 사랑입니다. 기록된 성경 외에 예언을 통해 삶의 구체적인 방향성, 개별적인 말씀을 주시고 싶어 하십니다. 성경 말씀 자체는 로고스이지만 예언은 레마의 말씀이 된다.

\n-들어가는 말 중에서
`;

const Holyschool2 = () => {
  return (
    <div style={{ width: "90%", padding: "16px" }}>
      <Flex flexDirection="column" gap="16px" style={{ marginTop: "50px" }}>
        <ArrowBox
          label1="성령학교 교재"
          label2="구원론, 성령론, 종말론의 개혁을 위한 세가지 집중과정! 성령학교 강의 교재"
        />
        <Flex alignItems="center" justifyContent="center">
          <DetailBookBox
            bookimg={bookdatas[7].img}
            label1={bookdatas[7].label1}
            label2={bookdatas[7].label2}
            label3={bookdatas[7].label3}
          />
          <Spacer height={"60px"} />
          <Flex
            flexDirection="column"
            alignItems="initial"
            justifyContent="center"
            style={{ width: "65%" }}
            gap={"8px"}
          >
            <Text font={Fonts.Medium} size={"20px"}>
              성경의 완성과 함께 예언을 비롯한 성령의 은사가 중단되었다고
              생각하시나요?
            </Text>
            <div>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                (고전 13:8) ‘사랑’은 언제까지나 떨어지지 아니하되 ‘예언’도
                폐하고 ‘방언’도 그치고 ‘지식’도 폐하리라
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                (고전 13:9) 우리는 부분적으로 알고 부분적으로 예언하니
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                (고전 13:10) “온전한 것이 올 때에는” 부분적으로 하던 것이
                폐하리라
              </Text>
            </div>

            {a.split("\n").map((line, idx) => (
              <Text key={idx} font={Fonts.Regular} style={{ color: "#888888" }}>
                {line}
              </Text>
            ))}
          </Flex>
          <Spacer height={"60px"} />
          <Flex flexDirection="column" width={"100%"}>
            <ArrowBox label1={"차례"} label2={""} />
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="initial"
            justifyContent="center"
            style={{ width: "65%", transform: "translateX(1%)" }}
            gap={"8px"}
          >
            <Text font={Fonts.Regular} size={"20px"}>
              01. 기름부음의 이해
              <Spacer height={"16px"} />
              02. 영·혼·육에 대한 성경적인 이해
              <Spacer height={"16px"} />
              03. 하나님의 음성 듣기
              <Spacer height={"16px"} />
              04. 예언, 성경적으로 이해하기
              <Spacer height={"16px"} />
              05. 치유, 성경적으로 이해하기
              <Spacer height={"16px"} />
              06. 거룩한 영물, 천사(창조 이전의 세계)
              <Spacer height={"16px"} />
              07. 꿈의 성경적인 이해
              <Spacer height={"16px"} />
              08. 가계의 저주 올바르게 이해하기
            </Text>
            <Spacer height={"60px"} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Holyschool2;
