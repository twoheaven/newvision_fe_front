import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "../../../../styles/fonts";
import ArrowBox from "../component/ArrowBox";
import AudioBook from "../component/AudioBook";
import DetailBookBox from "../component/DetailBookBox";
import bookdatas from "../data/bookdatas";

const a = `(히 13:17) 너희를 인도하는 자들에게 순종하고 복종하라 그들은 너희 영혼을 위하여 경성하기를 자신들이  청산할 자인 것 같이 하느니라 그들로 하여금 즐거움으로 이것을 하게 하고 근심으로 하게 하지 말라 그렇지 않으면 너희에게 유익이 없느니라 

\n하나님의 일을 하기 전에 반드시 하나님의 일하시는 방법을 알아야 합니다. 이것은 매우 중요합니다. 
하나님은 사람을 통해 구속사를 진행해 가십니다. 먼저 모세라는 영도자를 세워 이스라엘을 구출한 사건을 
시작으로 사사 시대에는 사사를 세우시고, 왕정 시대에는 왕과 제사장과 선지자들을 기름 부어 세우셔서 자신의 말씀을 대언하게 하시고 하나님의 통치를 이루어 가셨습니다.

\n본체이신 예수님 또한 이 땅에 메시야로 오셔서 하나님의 뜻만을 전하는 메신저 역할을 온전히 감당하시고, 12명의 제자를 시작으로 70인 제자들을 거쳐 성령 시대에 여러분과 제가 후사로서 주님의 뜻을 계승하는 제자 역할을 감당하게 되었습니다. 

\n-11p ‘주님은 사람을 통해 일하십니다’ 중에서`;

const Good2 = () => {
  return (
    <div style={{ width: "90%", padding: "16px" }}>
      <Flex flexDirection="column" gap="16px" style={{ marginTop: "50px" }}>
        <ArrowBox
          label1="선한시리즈"
          label2="교회 안에서 하나님 나라를 이루어가기 위해 꼭 읽어야 할 책!"
        />
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ transform: "translateY(-0px)" }}
        >
          <DetailBookBox
            bookimg={bookdatas[1].img}
            label1={bookdatas[1].label1}
            label2={bookdatas[1].label2}
            label3={bookdatas[1].label3}
            label4={bookdatas[1].label4}
          />
          <Flex
            flexDirection="row"
            width={"60%"}
            alignItems="center"
            justifyContent="center"
            style={{ transform: "translateX(-10%)" }}
          >
            <AudioBook />
          </Flex>
          <Spacer height={"60px"} />
          <Flex
            flexDirection="column"
            alignItems="initial"
            justifyContent="center"
            style={{ width: "65%" }}
            gap={"8px"}
          >
            <Text font={Fonts.Medium} size={"20px"}>
              “주님은 사람을 통해 일하십니다.”
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
              01. 하나님 나라의 권위와 질서 이해하기
              <Spacer height={"16px"} />
              교회 안에서 권위를 업신여기는 사람들
              <Spacer height={"1px"} />
              교회는 인본주의를 지향하는 민주주의가 아닙니다
              <Spacer height={"1px"} />
              주님은 사람을 통해 일하십니다
              <Spacer height={"1px"} />
              하나님이 기름 부으신 주의 종들을 존중해야 합니다
              <Spacer height={"16px"} />
              02. 성경에 기록된 하나님 나라의 권위와 질서
              <Spacer height={"16px"} />
              영적 지도자의 권위를 대하는 성경적인 태도
              <Spacer height={"1px"} />
              (1) 기름 부으심을 받은 주의 종들을 공궤하고 영접하는 것은 진리와
              함께 수고하는 자가 되는 것입니다
              <Spacer height={"1px"} />
              (2) 기름 부으심을 받은 주의 종들을 공궤하고 영접하는 것은 하나님을
              기쁘시게 하는 믿음의 행위입니다
              <Spacer height={"1px"} />
              (3) 기름 부으심을 받은 주의 종들을 공궤하고 영접하는 것은 또한
              기적을 체험하는 기회가 되며, 주님의 순종 여부 테스트가 되기도
              합니다
              <Spacer height={"16px"} />
              성경 속 영적 지도자의 권위 이해하기
              <Spacer height={"1px"} />
              (1) 예수님이 말씀하신 당위성
              <Spacer height={"1px"} />
              (2) 사도 바울이 말한 당위성(사도의 권리와 보호)
              <Spacer height={"16px"} />
              주의 종을 섬김으로 받는 축복과 저주의 실례들
              <Spacer height={"1px"} />
              (1) 사도 바울을 섬겼던 동역자들
              <Spacer height={"1px"} />
              (2) 다윗이 도망 다닐 때 다윗을 공궤한 바르실래
              <Spacer height={"1px"} />
              (3) 주의 종의 허물을 드러냈던 함과 감추었던 셈과 야벳
              <Spacer height={"16px"} />
              03. 하나님 나라의 선한 동역자 되기
              <Spacer height={"16px"} />
              마지막 때 교회 안에 있는 두 부류의 사람들
              <Spacer height={"1px"} />
              (1) 모세와 아론을 대적해 당을 지은 고라
              <Spacer height={"1px"} />
              (2) 모세의 동역자 아론과 훌
              <Spacer height={"1px"} />
              (3) 기드온의 300 용사
              <Spacer height={"1px"} />
              (4) 다윗의 세 용사
              <Spacer height={"1px"} />
              (5) 신약 시대 사도 바울의 동역자들
            </Text>
            <Spacer height={"60px"} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Good2;
