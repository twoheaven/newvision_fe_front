import "./IntroPage.css";

import { Area, Content, Flex, Text } from "@dohyun-ko/react-atoms";

import Line from "@/components/line/Line";

const IntroPage = () => {
  return (
    <Area className="intro-container">
      <Content>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex>
            <img
              src={"/src/assets/whitelogo.png"}
              alt={"newvisionlogo"}
              width={"150px"}
              height={"138px"}
            />
          </Flex>
          <Text size={"100px"} color={"white"}>
            NEWVISION
          </Text>
          <Line />
        </Flex>
      </Content>
    </Area>
  );
};

export default IntroPage;
