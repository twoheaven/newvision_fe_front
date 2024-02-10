import { Flex, Text } from "@dohyun-ko/react-atoms";
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
    <Flex gap={"10px"} justifyContent="center">
      <Flex
        flexDirection="column"
        style={{
          flex: "2",
          width: `${windowWidth / 3.2}px`,
          height: `${windowWidth / 3.2}px`,
          minWidth: "150px",
          minHeight: "150px",
        }}
        gap={"10px"}
      >
        <Text size={isMobile ? "24px" : "34px"}>교회 소식</Text>
        <Flex gap={"10px"} justifyContent="center">
          <Text>공지</Text>
          <Text>훈련 & 행사</Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        gap={"10px"}
        style={{
          flex: "1",
          width: `${windowWidth / 3.2}px`,
          height: `${windowWidth / 3.2}px`,
          minHeight: "150px",
          minWidth: "150px",
        }}
      >
        <Text size={isMobile ? "24px" : "34px"}>새가족 등록</Text>
        <Text>교회 직접 방문</Text>
        <Text>온라인 등록 바로가기</Text>
      </Flex>
    </Flex>
  );
};

export default Newsnewfam;
