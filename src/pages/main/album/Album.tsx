import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import useIsMobile from "@/hooks/useIsMobile";
import al1 from "@/pages/main/album/dummy/앨범1.png";
import al2 from "@/pages/main/album/dummy/앨범2.png";
import al3 from "@/pages/main/album/dummy/앨범3.png";
import al4 from "@/pages/main/album/dummy/앨범4.png";

const Album = () => {
  const isMobile = useIsMobile();

  return (
    <Content>
      <Flex
        alignItems="flex-start"
        flexDirection="column"
        justifyContent="center"
      >
        <Text size={isMobile ? "24px" : "34px"}>교회 앨범</Text>
        <Flex justifyContent="flex-end" style={{ width: "100%" }}>
          <Text
            size={isMobile ? "14px" : "18px"}
            style={{ marginTop: isMobile ? "-10px" : "-16px" }}
          >
            + 더보기
          </Text>
        </Flex>
        <Flex gap={"10px"} justifyContent="center">
          <img src={al1} width={"24%"}></img>
          <img src={al2} width={"24%"}></img>
          <img src={al3} width={"24%"}></img>
          <img src={al4} width={"24%"}></img>
        </Flex>
        <Spacer height={isMobile ? "20px" : "50px"} />
      </Flex>
    </Content>
  );
};

export default Album;
