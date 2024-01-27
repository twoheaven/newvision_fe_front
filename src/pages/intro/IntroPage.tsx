import "./IntroPage.css";

import { Area, Button, Content, Flex, Text } from "@dohyun-ko/react-atoms";
import { Link } from "react-router-dom";

import Line from "@/components/line/Line";
import Paths from "@/types/paths";

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
          <Link to={Paths.Main}>
            <Button
              width={"300px"}
              height={"300px"}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <Flex
                justifyContent="flex-end"
                alignItems="flex-end"
                flexDirection="column"
              >
                <Text color="white">뉴비전교회</Text>
                <Text color="white">홈페이지</Text>
                <Text color="white">바로가기</Text>
              </Flex>
            </Button>
          </Link>
        </Flex>
      </Content>
    </Area>
  );
};

export default IntroPage;
