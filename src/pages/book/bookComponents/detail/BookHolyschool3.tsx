import { Flex } from "@dohyun-ko/react-atoms";
import { Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "../../../../styles/fonts";
import ArrowBox from "../component/ArrowBox";
import DetailBookBox from "../component/DetailBookBox";
import bookdatas from "../data/bookdatas";

const a = `시대가 지나갈수록 종말론은 점진적으로 열리고 있고, 주님은 말세 징조와 표적을 통해 우리에게 영적 메세지를 주고 계십니다. 그런데 말세 정보(징조나 표적)가 구원에 이르는 지혜를 주는 것이 아니라, 역사를 이끄시는 하나님을 알 때 그리고 하나님 안에서 마지막 때를 향한 ‘감추어진 만나(영적 메세지)’가 우리 가운데 구원의 길을 제시할 것입니다.

\n지금은 요한계시록이 열리는 시대입니다. 노아에게 물 심판 전 경고의 계시를 주셨던 것처럼 말세지말 주님은 당신의 사랑하는 자에게 친밀함 안에서 심판 전 자신의 뜻을 드러내고 계시할 것입니다. 무엇보다 End-time 비밀을 성경을 통해 성령 안에서 증거하며 이해하는 수업이 될 것입니다.

\n`;

const Holyschool3 = () => {
  return (
    <div style={{ width: "90%", padding: "16px" }}>
      <Flex flexDirection="column" gap="16px" style={{ marginTop: "50px" }}>
        <ArrowBox
          label1="성령학교 교재"
          label2="구원론, 성령론, 종말론의 개혁을 위한 세가지 집중과정! 성령학교 강의 교재"
        />
        <Spacer height={"30px"} />

        <Flex alignItems="center" justifyContent="center">
          <DetailBookBox
            bookimg={bookdatas[8].img}
            label1={bookdatas[8].label1}
            label2={bookdatas[8].label2}
            label3={bookdatas[8].label3}
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
              종말론의 핵심은 ‘깨어있는 것’입니다.
            </Text>
            {a.split("\n").map((line, idx) => (
              <Text key={idx} font={Fonts.Regular} style={{ color: "#888888" }}>
                {line}
              </Text>
            ))}
            <div>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                『요한계시록 학교』수업의 우선순위와 방향성
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                1. 단순히 ‘장차 되어질 일’이 아니라 ‘깨어있는 삶’에 있다.
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                2. 단순히 ‘정보를 수집하는 능력’이 아니다 ‘사랑하는 능력’이다.
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                3. 단순히 ‘적그리스도를 아는 것’보다 ‘예수님을 아는 것’이다.
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                4. 종말론의 핵심은 단순히 내가 무엇을 하느냐 [doing]가 아니라
                내가 어떤 사람이 되는 것[being]에 있다.
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                5. 어둠을 크게 보고 어둠의 세력에 주목하기 전에 빛을 크게 보고
                빛의 영광에 주목하라.
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                6. ‘대환난’(후 3년 반)도 오지만 ‘대부흥’(전 3년 반)이 먼저 온다.
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                7. 어둠도 강해지지만 어둠을 이길 강력한 ‘늦은비의 성령’이
                준비된다.
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                8. 많은 어둠일지라도 결코 빛 자체를 이기지 못한다.
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                9. 어둠의 시나리오와 계획도 세계경영자이신 주님의 크신 계획 아래
                있는 것이다.
              </Text>
              <Text font={Fonts.Regular} style={{ color: "#888888" }}>
                10. 하나님은 역사를 홀로 주관하시며 자기의 이름을 위하여
                일하시는 분이시다.
              </Text>
            </div>
          </Flex>
          <Spacer height={"60px"} />
        </Flex>
      </Flex>
    </div>
  );
};

export default Holyschool3;
