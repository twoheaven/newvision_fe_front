import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import news from "@/pages/main/newsnewfam/asset/공지배경.png";
import visit1 from "@/pages/main/newsnewfam/asset/교회직접방문.png";
import visit2 from "@/pages/main/newsnewfam/asset/온라인등록.png";
import train from "@/pages/main/newsnewfam/asset/훈련&행사배경.png";

const MobileNewsnewfam = () => {
  return (
    <Content>
      <Flex justifyContent="center" flexDirection="column">
        <Text size={"24px"}>교회소식</Text>
        <Flex justifyContent="space-between">
          <div style={{ position: "relative", width: "49.5%", height: "auto" }}>
            <img
              src={news}
              width={"100%"}
              style={{
                height: "auto",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <Text color="white">공지</Text>
            </div>
          </div>
          <div style={{ position: "relative", width: "49.5%", height: "auto" }}>
            <img
              src={train}
              width={"100%"}
              style={{
                height: "auto",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <Text color="white">공지</Text>
            </div>
          </div>
        </Flex>
      </Flex>
      <Flex>
        <Text size={"24px"}>새가족 등록</Text>
        <img src={visit1} width={"100%"} />
        <Spacer height={"5px"} />
        <img src={visit2} width={"100%"} />
      </Flex>
      <Spacer height={"10px"} />
    </Content>
  );
};

export default MobileNewsnewfam;
