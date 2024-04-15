import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms"; // @dohyun-ko/react-atoms 패키지에서 Flex, Spacer, Text를 가져옴

import ShadowText from "@/components/text/shadowtext"; // "@/components/text/shadowtext"에서 ShadowText 컴포넌트를 가져옴
import Fonts from "@/styles/fonts"; // "@/styles/fonts"에서 Fonts를 가져옴

import img4 from "../asset/1.성경맥잡기학교 (4).jpg"; // "../asset/1.성경맥잡기학교 (4).jpg" 이미지를 가져옴
import img1 from "../asset/3.요한계시록학교 (1).jpg"; // "../asset/1.성경맥잡기학교 (1).jpg" 이미지를 가져옴
import img3 from "../asset/3.요한계시록학교 (2).jpg"; // "../asset/1.성경맥잡기학교 (3).jpg" 이미지를 가져옴
import img2 from "../asset/3.요한계시록학교 (2).jpg"; // "../asset/1.성경맥잡기학교 (2).jpg" 이미지를 가져옴
import imgplus from "../asset/뚜껑.png"; // "../asset/뚜껑.png" 이미지를 가져옴

const Cate3 = () => {
  const color1 = "#996633"; // color1 변수에 "#996633" 할당
  const color2 = "#996633"; // color2 변수에 "#996633" 할당
  const color3 = "#996633"; // color3 변수에 "#996633" 할당

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      {" "}
      {/* 세로 중앙 정렬된 Flex 컨테이너 */}
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        {" "}
        {/* 상대 위치, 가로 전체, 높이 자동 조절되는 div */}
        <img
          src={img1}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />{" "}
        {/* 이미지 표시 */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          {" "}
          {/* 텍스트가 중앙 정렬된 div */}
          <ShadowText size={"28px"} font={Fonts.Bold}>
            요한계시록학교
          </ShadowText>{" "}
          {/* 그림자 효과가 있는 텍스트 */}
          <Spacer height={"10px"} /> {/* 10px 간격 */}
          <ShadowText size={"12px"}>ENDTIME ACADEMY</ShadowText>{" "}
          {/* 그림자 효과가 있는 텍스트 */}
        </div>
      </div>
      <Spacer height={"80px"} /> {/* 80px 간격 */}
      <Text>종말론의 핵심은 '깨어있는 것'입니다.</Text> {/* 텍스트 */}
      <Spacer height={"30px"} /> {/* 30px 간격 */}
      <div
        style={{
          width: "100%",
          backgroundColor: "ButtonShadow",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {" "}
        {/* 너비 100%, 배경색 및 그림자 속성이 있는 div */}
        <Flex justifyContent="center">
          {" "}
          {/* 가로 중앙 정렬된 Flex 컨테이너 */}
          <Spacer height={"30px"} /> {/* 30px 간격 */}
          <Flex gap={"18px"}>
            {" "}
            {/* 간격이 18px인 Flex 컨테이너 */}
            <Text
              color={color3}
              font={Fonts.Bold}
              size={"40px"}
              style={{ transform: "translateY(-14px)" }}
            >
              "
            </Text>{" "}
            {/* 텍스트 */}
            <Flex flexDirection="column" alignItems="center" gap={"20px"}>
              {" "}
              {/* 세로로 정렬된 Flex 컨테이너 */}
              <Flex flexDirection="column" alignItems="center">
                {" "}
                {/* 세로로 정렬된 Flex 컨테이너 */}
                <Text color={color3} font={Fonts.Medium} size={"18px"}>
                  이러므로 너희는 장차 올 이 모든 일을 능히 피하고
                </Text>{" "}
                {/* 텍스트 */}
                <Text color={color3} font={Fonts.Medium} size={"18px"}>
                  인자 앞에 서도록 항상 기도하며 깨어있으라 하시니라
                </Text>{" "}
                {/* 텍스트 */}
              </Flex>
              <Text color={color3} font={Fonts.Regular} size={"16px"}>
                눅 21:36
              </Text>{" "}
              {/* 텍스트 */}
            </Flex>
            <Text
              color={color3}
              font={Fonts.Bold}
              size={"40px"}
              style={{ transform: "translateY(-14px)" }}
            >
              "
            </Text>{" "}
            {/* 텍스트 */}
          </Flex>
          <Spacer height={"30px"} /> {/* 30px 간격 */}
        </Flex>
      </div>
      <Spacer height={"40px"} /> {/* 80px 간격 */}
      <Text>시대는 점점 종말론을 열어가고 있고,</Text>
      <Text>
        주님은 말세 징조와 표적을 통해 믿는 자들에게 영적 메세지를 주고
        계십니다.
      </Text>
      <Spacer height={"40px"} /> {/* 80px 간격 */}
      <Flex gap={"15px"} justifyContent="center" alignItems="center">
        {" "}
        {/* 간격이 15px인, 세로 및 가로 중앙 정렬된 Flex 컨테이너 */}
        <img
          src={img2}
          style={{ width: "50%", height: "auto", objectFit: "cover" }}
        />{" "}
        {/* 이미지 표시 */}
        <Flex flexDirection="column" gap={"20px"}>
          {" "}
          {/* 세로 간격이 20px인 Flex 컨테이너 */}
          <Flex flexDirection="column">
            {" "}
            {/* 세로로 정렬된 Flex 컨테이너 */}
            <Text size={"14px"}>
              단순히 말세 정보가 구원에 이르는 지혜를 주는 것
            </Text>{" "}
            {/* 텍스트 */}
            <Text size={"14px"}>이 아니라,</Text> {/* 텍스트 */}
          </Flex>
          <Flex flexDirection="column">
            {" "}
            {/* 세로로 정렬된 Flex 컨테이너 */}
            <Text size={"14px"}>'역사를 이끄시는 하나님을 알 때'</Text>{" "}
            {/* 텍스트 */}
          </Flex>
          <Flex flexDirection="column">
            {" "}
            {/* 세로로 정렬된 Flex 컨테이너 */}
            <Text size={"14px"}>
              하나님 안에서 마지막 때를 향한 감추어진 만나가
            </Text>{" "}
            {/* 텍스트 */}
            <Text size={"14px"}>
              우리 가운데 구원에 이르도록 자라가게 할 것입니다.
            </Text>{" "}
            {/* 텍스트 */}
          </Flex>
        </Flex>
      </Flex>
      <Spacer height={"80px"} /> {/* 80px 간격 */}
      <img
        src={img3}
        style={{ width: "70%", height: "auto", objectFit: "cover" }}
      />{" "}
      {/* 이미지 표시 */}
      <Spacer height={"55px"} />
      <div
        style={{
          width: "100%",
          backgroundColor: "ButtonShadow",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {" "}
        {/* 너비 100%, 배경색 및 그림자 속성이 있는 div */}
        <Flex justifyContent="center">
          {" "}
          {/* 가로 중앙 정렬된 Flex 컨테이너 */}
          <Spacer height={"30px"} /> {/* 30px 간격 */}
          <Flex gap={""}>
            {" "}
            {/* 간격이 18px인 Flex 컨테이너 */}
            <Text
              color={color3}
              font={Fonts.Bold}
              size={"40px"}
              style={{ transform: "translateY(-14px)" }}
            >
              "
            </Text>{" "}
            {/* 텍스트 */}
            <Flex flexDirection="column" alignItems="center" gap={"20px"}>
              {" "}
              {/* 세로로 정렬된 Flex 컨테이너 */}
              <Flex flexDirection="column" alignItems="center">
                {" "}
                {/* 세로로 정렬된 Flex 컨테이너 */}
                <Text color={color3} font={Fonts.Medium} size={"18px"}>
                  천국은 마치 밭에 감추인 보화와 같으니 사람이 이를 발견한 후
                </Text>{" "}
                {/* 텍스트 */}
                <Text color={color3} font={Fonts.Medium} size={"18px"}>
                  숨겨 두고 기뻐하며 돌아가서 자기의 소유를 다 팔아 그 밭을
                  사느니라
                </Text>{" "}
              </Flex>
              <Text color={color3} font={Fonts.Regular} size={"16px"}>
                마 13:44
              </Text>{" "}
              {/* 텍스트 */}
            </Flex>
            <Text
              color={color3}
              font={Fonts.Bold}
              size={"40px"}
              style={{ transform: "translateY(-14px)" }}
            >
              "
            </Text>{" "}
            {/* 텍스트 */}
          </Flex>
          <Spacer height={"30px"} /> {/* 30px 간격 */}
        </Flex>
      </div>
    </Flex>
  );
};

export default Cate3; // Cate1 컴포넌트 내보내기
