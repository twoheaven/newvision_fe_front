import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "../../../../styles/fonts";
import ArrowBox from "../component/ArrowBox";
import DetailBookBox from "../component/DetailBookBox";
import bookdatas from "../data/bookdatas";

const a = `주님을 사모하고 재림을 기다리는 신부들에게 신랑이신 주님의 발자국 소리가 점점 크게 들리는 요즘입니다. 빛과 어둠의 영적 전쟁은 더 치열한 양상으로 과열되고 있습니다. 그에 따라 회색 지대는 사라지고 양쪽 진영은 명확히 구분되고 있습니다. 신부의 진영에서는 노아처럼 하나님의 공의(심판)를 전파하고 심판의 기별을 알리는 충성되고 지혜로운 파수꾼들이 많이 세워지고 있습니다. 이 추수할 일꾼들은 많은 성도들을 깨어있는 알곡(신부)들로 준비시키며 하나님의 승리하는 용사들로 무장되고 있습니다. 반면에 음녀의 진영에서 활동하는 사탄도 무저갱에 들어갈 때가 얼마 남지 않음을 알고 있기에 최후 발악을 하며 고도의 은밀한 궤계로 가만히 교회 안으로 들어와 택하신 자까지 미혹하여 음녀를 만들고 있습니다. 

\n(마 24:24) 거짓 그리스도들과 거짓 선지자들이 일어나 큰 표적과 기사를 보여 할 수만 있으면 택하신 자들도 미혹하리라

\n지금 성도들은 하나님 나라의 사고방식과 성경적 세계관으로 얻어진 분별력과 통찰력이 필요한 때입니다. 하나님을 아는 지식과 주님이 주신 참된 지각으로 선악으로 분별하여 진영을 구분하며 어떤 진영에 설지 스스로 선택해야 합니다. 신부의 진영에 들어가기 위해서는 참 빛 안에 거해야 합니다. 참 빛은 참된 진리 그 자체이며 전쟁하는 용사들은 참된 진리로 전신갑주를 입어야 합니다. 왜냐하면 우리를 속이는 어둠은 참된 빛으로만 노출되며 참 빛의 능력으로만이 어둠을 파쇄할 수 있기 때문입니다. 사람의 계명이나 장로들의 유전과 같은 인간의 교리는 빛의 모양만 갖출 뿐 결코 참 빛이 될 수 없습니다. 이 시대는 혼탁한 교리가 아니라 성경에서 우리에게 비춰 주시는 빛과 같은 레마의 말씀, 그 자체가 싸우는 검이 됩니다. 

\n(마 15:9) 사람의 계명으로 교훈을 삼아 가르치니 나를 헛되이 경배하는도다 하였는니라 하시고

\n-들어가는 말 중에서
`;

const Holyschool1 = () => {
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
            bookimg={bookdatas[6].img}
            label1={bookdatas[6].label1}
            label2={bookdatas[6].label2}
            label3={bookdatas[6].label3}
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
              “모세오경을 통해 배우는 언약의 이해 / 출애굽 안의 모형론 / 신명기
              사관.”
            </Text>
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
              01. OT & 수업목표 이해
              <Spacer height={"16px"} />
              02. 언약의 이해1 (아브라함)
              <Spacer height={"16px"} />
              03. 언약의 이해2 (아브라함)
              <Spacer height={"16px"} />
              04. 출애굽기 전체 개관 및 내용분석 (출 1-15장)
              <Spacer height={"16px"} />
              05. 출 16-24장 (언약/ 신명기사관 이해)
              <Spacer height={"16px"} />
              06. 출 25-40장 (성막론 강해) *평택 성막 체험
              <Spacer height={"16px"} />
              07. 레위기 전체 개관 및 내용분석/ 5대 제사법 강해 (레 1-8장)
              <Spacer height={"16px"} />
              08. 민수기 전체 개관 및 핵심 내용분석1
              <Spacer height={"16px"} />
              09. 민수기 전체 개관 및 핵심 내용분석2
              <Spacer height={"16px"} />
              10. 신명기 전체 개관 및 전체 핵심정리
            </Text>
            <Spacer height={"60px"} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Holyschool1;
