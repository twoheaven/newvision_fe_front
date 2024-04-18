import "@/IntroPage.css";

import { Area, Button, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { Link } from "react-router-dom";

import LeftArrow from "@/assets/leftarrow.png";
import RightArrow from "@/assets/rightarrow.png";
import WhiteLogo from "@/assets/whitelogo.png";
import Line from "@/components/line/Line";
import useIsMobile from "@/hooks/useIsMobile";
import Paths from "@/types/paths";

const IntroPage = () => {
  const isMobile = useIsMobile();
  return (
    <Area
      className="intro-container"
      style={{
        overflow: "hidden",
      }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width={"100%"}
      >
        <Flex>
          <img
            src={WhiteLogo}
            alt={"newvisionlogo"}
            width={isMobile ? "100px" : "150px"}
            height={isMobile ? "80px" : "138px"}
          />
        </Flex>
        <Text size={isMobile ? "35px" : "80px"} color={"white"}>
          N E W V I S I O N
        </Text>
        <Spacer height={"10px"} />
        <Line
          style={{
            width: "90%",
            maxWidth: "1200px",
          }}
        />
        <Spacer height={isMobile ? "10px" : "50px"} />
        <Flex
          gap={"10px"}
          justifyContent="center"
          alignItems="center"
          style={
            isMobile
              ? { maxWidth: "600px" }
              : {
                  maxWidth: "680px",
                }
          }
        >
          <Flex height={isMobile ? "35%" : "100%"}>
            <Link
              to={Paths.Main}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Button
                width={"100%"}
                height={"100%"}
                style={
                  isMobile
                    ? {
                        backgroundColor: "rgba(10, 17, 53, 0.5)",
                        maxWidth: "300px",
                        maxHeight: "340px",
                      }
                    : {
                        backgroundColor: "rgba(10, 17, 53, 0.5)",
                        maxWidth: "340px",
                        maxHeight: "340px",
                      }
                }
              >
                <img
                  src={LeftArrow}
                  width={"90%"}
                  style={
                    isMobile
                      ? {
                          position: "relative",
                          top: "10px",
                        }
                      : {
                          position: "relative",
                          top: "-67.5px",
                        }
                  }
                />
                <Text
                  color="white"
                  size={isMobile ? "20px" : "24px"}
                  style={
                    isMobile
                      ? {
                          position: "relative",
                          top: "10px",
                          left: "-80px",
                        }
                      : {
                          position: "relative",
                          top: "-75px",
                          left: "105px",
                        }
                  }
                >
                  뉴비전교회
                </Text>
                <Text
                  color="white"
                  size={isMobile ? "36px" : "40px"}
                  style={
                    isMobile
                      ? {
                          position: "relative",
                          top: "0px",
                          left: "-66px",
                        }
                      : {
                          position: "relative",
                          top: "-85px",
                          left: "90px",
                        }
                  }
                >
                  홈페이지
                </Text>
                <Text
                  color={"white"}
                  size={isMobile ? "36px" : "40px"}
                  style={
                    isMobile
                      ? {
                          position: "relative",
                          top: "-20px",
                          left: "-66px",
                        }
                      : {
                          position: "relative",
                          top: "-100px",
                          left: "90px",
                        }
                  }
                >
                  바로가기
                </Text>
              </Button>
            </Link>
          </Flex>
          <Flex flexDirection={"column"}>
            <a href="https://www.youtube.com/@kimonyou153">
              <Button
                width={"100%"}
                style={{
                  backgroundColor: "rgba(10, 17, 53, 0.5)",
                  maxHeight: "165px",
                  maxWidth: "300px",
                }}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <img
                    src={RightArrow}
                    width={"90%"}
                    style={{
                      position: "relative",
                      top: "16px",
                    }}
                  />
                  <Text
                    color="white"
                    size={isMobile ? "22px" : "26px"}
                    style={{
                      position: "relative",
                      top: "8px",
                      left: "-85px",
                    }}
                  >
                    김온유 목사
                  </Text>
                  <Flex
                    style={{
                      position: "relative",
                      top: "5px",
                    }}
                  >
                    <Text
                      color="white"
                      size={isMobile ? "36px" : "40px"}
                      style={{
                        position: "relative",
                        top: "-7px",
                        left: "-25px",
                      }}
                    >
                      YOU{" "}
                      <Button
                        backgroundColor={"red"}
                        borderRadius={"5px"}
                        height={"36px"}
                        style={{
                          position: "relative",
                          top: "12px",
                          left: "-5px",
                        }}
                      >
                        <Text
                          color="white"
                          size={isMobile ? "36px" : "40px"}
                          style={{
                            position: "relative",
                            top: "-11.5px",
                          }}
                        >
                          TUBE
                        </Text>
                      </Button>
                    </Text>
                    <Text
                      color="white"
                      size={isMobile ? "20px" : "24px"}
                      style={{
                        position: "relative",
                        left: "-26px",
                      }}
                    >
                      LIVE
                    </Text>
                  </Flex>
                  <Text
                    color="white"
                    size={isMobile ? "36px" : "40px"}
                    style={{
                      position: "relative",
                      top: "-18px",
                      left: "-75px",
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
                width={"100%"}
                style={{
                  backgroundColor: "rgba(10, 17, 53, 0.5)",
                  maxHeight: "165px",
                  maxWidth: "300px",
                }}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <img
                    src={RightArrow}
                    width={"90%"}
                    style={{
                      position: "relative",
                      top: "12.5px",
                    }}
                  />
                  <Text
                    color="white"
                    size={isMobile ? "22px" : "26px"}
                    style={{
                      position: "relative",
                      top: "0px",
                      left: "-78px",
                    }}
                  >
                    2023년 4기
                  </Text>
                  <Text
                    color="white"
                    size={isMobile ? "36px" : "40px"}
                    style={{
                      position: "relative",
                      top: "-12px",
                      left: "-25px",
                    }}
                  >
                    요한계시록학교
                  </Text>
                  <Text
                    color="white"
                    size={isMobile ? "36px" : "40px"}
                    style={{
                      position: "relative",
                      top: "-30px",
                      left: "-78px",
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
    </Area>
  );
};

export default IntroPage;
