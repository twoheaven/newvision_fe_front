import "./IntroPage.css";

import {
  Area,
  Button,
  Content,
  Flex,
  Spacer,
  Text,
} from "@dohyun-ko/react-atoms";
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
          <Spacer height={"10px"} />
          <Flex gap={"10px"}>
            <Link to={Paths.Main}>
              <Button
                width={"300px"}
                height={"300px"}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <Flex justifyContent="flex-end">
                  <Text
                    color="white"
                    style={{
                      position: "relative",
                      top: "",
                    }}
                  >
                    뉴비전교회 홈페이지 바로가기
                  </Text>
                </Flex>
              </Button>
            </Link>
            <Flex flexDirection={"column"}>
              <a href="https://www.youtube.com/@kimonyou153">
                <Button
                  width={"300px"}
                  height={"145px"}
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <Flex justifyContent="flex-end">
                    <Text
                      color="white"
                      style={{
                        position: "relative",
                        top: "",
                      }}
                    >
                      김온유 목사 유튜브 live 바로보기
                    </Text>
                  </Flex>
                </Button>
              </a>
              <Spacer height={"10px"} />
              <a href="https://www.youtube.com/watch?v=NlpUEUl1Zq8">
                <Button
                  width={"300px"}
                  height={"145px"}
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <Flex justifyContent="flex-end">
                    <Text
                      color="white"
                      style={{
                        position: "relative",
                        top: "",
                      }}
                    >
                      2023년 4기 요한계시록학교 신청하기
                    </Text>
                  </Flex>
                </Button>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Content>
    </Area>
  );
};

export default IntroPage;
