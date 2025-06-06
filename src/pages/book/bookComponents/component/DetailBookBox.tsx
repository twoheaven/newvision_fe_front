import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "../../../../styles/fonts";
const DetailBookBox = ({
  bookimg,
  label1 = "책 이미지",
  label2,
  label3,
  label4,
  imgwidth = "300px",
}: {
  bookimg: File | string; // bookimg는 File 또는 string 타입으로 받을 수 있습니다.
  label1?: string;
  label2: string;
  label3: string;
  label4?: string; // label4는 선택적 속성으로, 기본값이 설정되어 있습니다.
  imgwidth?: string; // 이미지 너비를 조정할 수 있는 선택적 속성
}) => {
  return (
    <Flex
      style={{ width: "80%", transform: "translateX(10%)" }}
      alignItems="center"
      justifyContent="initial"
      gap=" 16px"
    >
      <div>
        <img
          src={
            typeof bookimg === "string" ? bookimg : URL.createObjectURL(bookimg)
          }
          alt={label1}
          style={{ maxWidth: imgwidth, width: "100%" }}
        />
      </div>
      <Flex flexDirection="column" gap="8px">
        <Text font={Fonts.Bold} size={"24px"}>
          {label2}
        </Text>
        <Text font={Fonts.Medium} size={"20px"}>
          {label3}
        </Text>
        <Spacer height={"30px"} />
        <Text font={Fonts.Regular} style={{ color: "#888888" }}>
          {(label4 || "").split("\n").map((line, idx) => (
            <Text key={idx} font={Fonts.Regular} style={{ color: "#888888" }}>
              {line}
            </Text>
          ))}
        </Text>{" "}
      </Flex>
    </Flex>
  );
};
export default DetailBookBox; // DetailBookBox 컴포넌트 내보내기
