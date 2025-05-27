import { Button, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "../../../../styles/fonts";
import AudioBookImg from "../assets/audiobook.png";
const AudioBook = () => {
  return (
    <Flex
      style={{ width: "100%", transform: "translateX(10%)" }}
      alignItems="center"
      justifyContent="initial"
      gap=" 10px"
    >
      <div>
        <img
          src={AudioBookImg}
          alt={"오디오북"}
          style={{ maxWidth: "300px", width: "100%" }}
        />
      </div>
      <Flex flexDirection="column" gap="0px">
        <Text font={Fonts.Medium} size={"24px"}>
          {"『 선한 시리즈 』 1~3권 세트"}
        </Text>
        <Spacer height="20px" />
        <Text font={Fonts.Medium} style={{ color: "#E83F57" }} size={"16px"}>
          {"* 오디오북 mp3 파일 포함"}
        </Text>
        <Text font={Fonts.Medium} style={{ color: "#777777" }} size={"16px"}>
          {"판매가 20,000원"}
        </Text>
        {/* <Spacer height="30px" />
        <Button
          style={{
            width: "120px",
            height: "48px",
            backgroundColor: "#E83F57",
            color: "#FFFFFF",
            fontSize: "16px",
            fontFamily: Fonts.Medium,
          }}
          onClick={() => {
            console.log("구매하기 버튼 클릭됨");
          }}
        >
          {"구매하기"}
        </Button> */}
      </Flex>
    </Flex>
  );
};
export default AudioBook;
