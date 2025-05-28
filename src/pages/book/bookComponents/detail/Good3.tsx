import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "../../../../styles/fonts";
import ArrowBox from "../component/ArrowBox";
import AudioBook from "../component/AudioBook";
import DetailBookBox from "../component/DetailBookBox";
import bookdatas from "../data/bookdatas";

const a = `(마 25:20-21) 다섯 달란트 받았던 자는 다섯 달란트를 더 가지고 와서 이르되 주인이여 내게 다섯  달란트를 주셨는데 보소서 내가 또 다섯 달란트를 남겼나이다 그 주인이 이르되 잘하였도다 착하고 충성된 종아 네가 적은 일에 충성하였으매 내가 많은 것을 네게 맡기리니 네 주인의 즐거움에 참여할지어다 하고

\n많은 크리스천들이 가지는 그릇된 통념 중 하나는 바로 하나님은 부자를 미워하시고 부자는 천국에 들어가기 힘들다는 것입니다. 어떤 이들은 부자와 거지 나사로 비유에서 음부에 있는 부자를 보며 부자는 천국에 들어갈 수 없다고 단정 지어 버리기도 합니다. 그러나 이것은 성경을 곡해한 것입니다. 이러한 생각의 바탕에는 부와 형통의 개념에 대한 세속적인 관점과 바르지 못한 인본주의 신학의 가르침이 있을 수 있습니다. 돈이나 재물에 대한 그릇된 인식은 믿는 자들을 주님의 선한 청지기로 온전히 준비되지 못하게 합니다.

\n돈이나 재물은 그 자체로는 선악의 의미를 부여할 수 없는 중립적인 매개체입니다. 사람이 돈을 선용하면 선한 일의 매개가 되고 돈을 악용하면 악한 일의 매개가 되듯 문제는 그것을 사용하는 사람입니다. 

\n하나님은 단순히 돈 자체가 아닌 돈을 사랑함을 책망하십니다. 사람의 마음을 책망하십니다. 하나님은 부자 자체를 싫어하시는 것이 아니라 돈을 사랑하여 탐심을 갖는 것을 싫어하시고 청지기적 사명감이 없는 것을 책망하십니다. 단순히 돈을 이 땅에 많이 축적했기 때문에 미워하시는 것이 아니라 쌓기만 하고 맡겨진 재물을 하나님의 뜻대로 사용하지 않는 믿음의 부재를 미워하십니다. 

\n소유를 쌓아 두는 저축의 개념은 그 자체로는 불법도 아니며 주님이 싫어하는 것이 아닙니다. 주님의 평가는 이 땅에 축적된 돈의 액수에 있는 것이 아니라 이 돈을 어떻게 사용할지 결정하는 사람의 마음에 있습니다.

\n-들어가는 말 중에서
`;

const Good3 = () => {
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
            bookimg={bookdatas[2].img}
            label1={bookdatas[2].label1}
            label2={bookdatas[2].label2}
            label3={bookdatas[2].label3}
            label4={bookdatas[2].label4}
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
              “부자라고 천국에 못 들어가는 것이 아닙니다.”
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
              01. 선한 청지기로서 주님의 뜻 이해하기
              <Spacer height={"16px"} />
              02. 선한 청지기로서 참된 예배자 되기
              <Spacer height={"16px"} />
              03. 선한 청지기로서 나의 예배 점검하기
              <Spacer height={"16px"} />
              04. 요한 일서에서 말하는 참된 예배자의 물질생활
              <Spacer height={"1px"} />
              (1) 하나님을 향한 참된 헌금의 원리
              <Spacer height={"1px"} />
              (2) 이웃을 향한 참된 구제의 원리
              <Spacer height={"16px"} />
              05. 마지막 때 선한 청지기로서 지혜로운 삶
              <Spacer height={"1px"} />
              (1) 심판을 대비하는 지혜
              <Spacer height={"1px"} />
              (얼마를 모으냐가 아닌 어떻게 사용할 것인가)
              <Spacer height={"1px"} />
              (2) 재정의 기름이 부어지는 영적 조건들{" "}
            </Text>
            <Spacer height={"60px"} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Good3;
