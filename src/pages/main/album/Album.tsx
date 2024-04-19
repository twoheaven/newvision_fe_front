import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import al1 from "@/pages/main/album/dummy/앨범1.png";
import al2 from "@/pages/main/album/dummy/앨범2.png";
import al3 from "@/pages/main/album/dummy/앨범3.png";
import al4 from "@/pages/main/album/dummy/앨범4.png";

const Album = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        <Helmet>
          <meta name="description" content="메인 화면 교회 앨범" />
        </Helmet>
      </div>
      <Content>
        <Spacer height={"30px"} />
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
            <Spacer height={"5px"} />
          </Flex>
          <Flex gap={isMobile ? "5px" : "5px"} justifyContent="center">
            <img src={al1} width={isMobile ? "49%" : "24%"}></img>
            <img src={al2} width={isMobile ? "49%" : "24%"}></img>
            <img src={al3} width={isMobile ? "49%" : "24%"}></img>
            <img src={al4} width={isMobile ? "49%" : "24%"}></img>
          </Flex>
          <Spacer height={isMobile ? "20px" : "50px"} />
        </Flex>
      </Content>
    </>
  );
};

export default Album;
