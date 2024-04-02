import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useEffect, useState } from "react";

import useIsMobile from "@/hooks/useIsMobile";
import news from "@/pages/main/newsnewfam/asset/공지배경.png";
import visit1 from "@/pages/main/newsnewfam/asset/교회직접방문.png";
import visit2 from "@/pages/main/newsnewfam/asset/온라인등록.png";
import train from "@/pages/main/newsnewfam/asset/훈련&행사배경.png";

const Newsnewfam = () => {
  const isMobile = useIsMobile();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Content>
      <Flex gap={isMobile ? "5px" : "10px"} justifyContent="center">
        <Flex
          flexDirection="column"
          style={{
            flex: "2",
            width: `${windowWidth / 2.8}px`,
            height: `${windowWidth / 3.6}px`,
            minWidth: "230px",
            minHeight: "170px",
          }}
          gap={"10px"}
        >
          <Text size={isMobile ? "24px" : "34px"}>교회 소식</Text>
          <Flex gap={"10px"} justifyContent="center">
            <Flex
              justifyContent="center"
              style={{
                flex: "1",
                backgroundImage: `url(${news})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "1 / 1",
                alignItems: "flex-start",
              }}
            >
              <Flex>
                <Spacer height={isMobile ? "14px" : "20px"} />
                <Text size={isMobile ? "" : "24px"} color={"white"}>
                  공지
                </Text>
                <Spacer height={isMobile ? "14px" : "20px"} />
              </Flex>
            </Flex>
            <Flex
              justifyContent="center"
              style={{
                flex: "1",
                backgroundImage: `url(${train})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "1 / 1",
                alignItems: "flex-start",
              }}
            >
              <Flex>
                <Spacer height={isMobile ? "14px" : "20px"} />
                <Text size={isMobile ? "" : "24px"} color={"white"}>
                  훈련 & 행사
                </Text>
                <Spacer height={isMobile ? "14px" : "20px"} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap={"10px"}
          alignItems={"flex-start"}
          style={{
            flex: "1",
            width: `${windowWidth / 2.7}px`,
            height: `${windowWidth / 3.6}px`,
            minHeight: "170px",
            minWidth: "130px",
          }}
        >
          <Text size={isMobile ? "24px" : "34px"}>새가족 등록</Text>
          <Flex justifyContent="center">
            <img
              src={visit1}
              width={"100%"}
              style={{ marginBottom: "10px" }}
            ></img>
            <img src={visit2} width={"100%"}></img>
          </Flex>
        </Flex>
      </Flex>
      <Spacer height={isMobile ? "70px" : "50px"} />
    </Content>
  );
};

export default Newsnewfam;
