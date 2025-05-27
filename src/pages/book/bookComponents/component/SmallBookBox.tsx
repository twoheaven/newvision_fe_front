import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import Fonts from "../../../../styles/fonts";
import bookDetailIcon from "../assets/more.png"; // 책 상세보기 아이콘 경로
const SmallBookBox = ({
  bookimg,
  label1 = "책 이미지",
  label2,
  label3,
  imgwidth = "300px",
}: {
  bookimg: File | string; // bookimg는 File 또는 string 타입으로 받을 수 있습니다.
  label1?: string;
  label2: string;
  label3: string;
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
          alt={"책 이미지"}
          style={{ maxWidth: imgwidth, width: "100%" }}
        />
      </div>
      <Flex flexDirection="column" gap="8px">
        <Text font={Fonts.Bold}>{label2}</Text>
        <Text font={Fonts.Medium}>{label3}</Text>
        <Spacer height={"30px"} />
        <a href={`/book/${label1}`} style={{ textDecoration: "none" }}>
          <img
            src={bookDetailIcon}
            alt="책 상세보기"
            width={"60px"}
            style={{ marginLeft: "2px" }}
          />
        </a>
      </Flex>
    </Flex>
  );
};
export default SmallBookBox; // SmallBookBox 컴포넌트 내보내기
