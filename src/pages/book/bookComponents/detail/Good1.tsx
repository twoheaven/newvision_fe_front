import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "../../../../styles/fonts";
import ArrowBox from "../component/ArrowBox";
import AudioBook from "../component/AudioBook";
import DetailBookBox from "../component/DetailBookBox";
import bookdatas from "../data/bookdatas";

const a = `(엡 4:29) 무릇 더러운 말은 너희 입밖에도 내지 말고 오직 덕을 세우는 데 소용되는 대로 선한 말을 하여 듣는 자들에게 은혜를 끼치게 하라
              
              \n우리는 다양한 매체를 통해 말의 영향력에 대한 이론과 실험을 접해 본 적이 있을 것입니다. 또한, 각자의 경험을 통해 말의 가치 및 중요성에 대해 어느 정도 인식하고 있을 것입니다. 각자가 무심코 뱉은 말 한마디의 막강한 힘을 보며 감탄하고, 말의 엄청난 영향력에 새로워하며 놀라워하기도 합니다. 
              
              \n그러나 막상 나의 삶 가운데 말이 직접적으로 미치는 영향력은 아주 미비할 것이라고 생각하며 적극적으로 말의 습관을 교정하려 들지 않습니다. 거듭 강조되는 말의 중요성을 인식하고 그 영향력을 간파했다면 제일 먼저, 나의 언어 습관을 철저히 진단하고 점검해야 합니다. 더욱이 크리스천이라면 주님이 원하시는 경건한 말의 습관으로, 주도적인 의지를 가지고 말의 습관을 바꾸어 나가야 할 것입니다.
              
              \n-들어가는 말 중에서`;

const Good1 = () => {
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
            bookimg={bookdatas[0].img}
            label1={bookdatas[0].label1}
            label2={bookdatas[0].label2}
            label3={bookdatas[0].label3}
            label4={bookdatas[0].label4}
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
              “말은 내뱉으면 소리는 사라지지만 영향력은 남게 됩니다.”
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
              01. 당신의 말이 영적 흐름을 만듭니다
              <Spacer height={"16px"} />
              02. 영적 전쟁에서 승리하려면 말을 바꾸십시오
              <Spacer height={"16px"} />
              03. 크리스천의 언어생활이 불신자와 달라야 하는 이유
              <Spacer height={"16px"} />
              04. 거짓말하면 정말 불못에 들어가는가?
              <Spacer height={"16px"} />
              05. 말로 하나님 나라의 권능을 이 땅에 풀어놓으십시오
            </Text>
            <Spacer height={"60px"} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Good1;
