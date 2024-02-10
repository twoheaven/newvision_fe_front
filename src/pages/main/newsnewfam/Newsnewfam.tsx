import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useEffect, useState } from "react";

import useIsMobile from "@/hooks/useIsMobile";

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
    <>
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
          <Text size={isMobile ? "20px" : "34px"}>교회 소식</Text>
          <Flex gap={"10px"} justifyContent="center" alignItems="center">
            <Flex justifyContent="center" style={{ flex: "1" }}>
              <Text size={isMobile ? "" : "24px"}>공지</Text>
            </Flex>
            <Flex justifyContent="center" style={{ flex: "1" }}>
              <Text size={isMobile ? "" : "24px"}>훈련 & 행사</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gap={"10px"}
          style={{
            flex: "1",
            width: `${windowWidth / 2.8}px`,
            height: `${windowWidth / 3.6}px`,
            minHeight: "170px",
            minWidth: "130px",
          }}
        >
          <Text size={isMobile ? "20px" : "34px"}>새가족 등록</Text>
          <Flex justifyContent="center">
            <Text size={isMobile ? "" : "24px"}>교회 직접 방문</Text>
          </Flex>
          <Flex justifyContent="center">
            <Text size={isMobile ? "" : "24px"}>온라인 등록 바로가기</Text>
          </Flex>
        </Flex>
      </Flex>
      <Spacer height={isMobile ? "20px" : "50px"} />
    </>
  );
};

export default Newsnewfam;
