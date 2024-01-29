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
          <Text size={"80px"} color={"white"}>
            N E W V I S I O N
          </Text>
          <Spacer height={"10px"} />
          <Line
            style={{
              width: "800px",
            }}
          />
          <Spacer height={"50px"} />
          <Flex gap={"10px"}>
            <Link to={Paths.Main}>
              <Button
                width={"300px"}
                height={"300px"}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <img
                    src={"/src/assets/leftarrow.png"}
                    width={"280px"}
                    style={{
                      position: "relative",
                      top: "-47.5px",
                    }}
                  />
                  <Text
                    color="white"
                    size={"24px"}
                    style={{
                      position: "relative",
                      top: "-55px",
                      left: "90px",
                    }}
                  >
                    뉴비전교회
                  </Text>
                  <Text
                    color="white"
                    size={"40px"}
                    style={{
                      position: "relative",
                      top: "-70px",
                      left: "75px",
                    }}
                  >
                    홈페이지
                  </Text>
                  <Text
                    color={"white"}
                    size={"40px"}
                    style={{
                      position: "relative",
                      top: "-90px",
                      left: "75px",
                    }}
                  >
                    바로가기
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
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <img
                      src={"/src/assets/rightarrow.png"}
                      width={"280px"}
                      style={{
                        position: "relative",
                        top: "-12.5px",
                      }}
                    />
                    <Text
                      color="white"
                      style={{
                        position: "relative",
                        top: "",
                      }}
                    >
                      김온유 목사
                    </Text>
                    <Text
                      color="white"
                      style={{
                        position: "relative",
                        top: "",
                      }}
                    >
                      YOU<Button backgroundColor="red">TUBE</Button> live
                    </Text>
                    <Text
                      color="white"
                      style={{
                        position: "relative",
                        top: "",
                      }}
                    >
                      바로보기
                    </Text>
                  </Flex>
                </Button>
              </a>
              <Spacer height={"10px"} />
              <a href="https://litt.ly/new_vision_church">
                <Button
                  width={"300px"}
                  height={"145px"}
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <img
                      src={"/src/assets/rightarrow.png"}
                      width={"280px"}
                      style={{
                        position: "relative",
                        top: "-12.5px",
                      }}
                    />
                    <Text
                      color="white"
                      style={{
                        position: "relative",
                        top: "",
                      }}
                    >
                      2023년 4기
                    </Text>
                    <Text
                      color="white"
                      style={{
                        position: "relative",
                        top: "",
                      }}
                    >
                      요한계시록학교
                    </Text>
                    <Text
                      color="white"
                      style={{
                        position: "relative",
                        top: "",
                      }}
                    >
                      신청하기
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
