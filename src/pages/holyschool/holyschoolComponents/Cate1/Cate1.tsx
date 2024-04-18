import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms"; // @dohyun-ko/react-atoms 패키지에서 Flex, Spacer, Text를 가져옴
import { Helmet } from "react-helmet-async";

import ShadowText from "@/components/text/shadowtext"; // "@/components/text/shadowtext"에서 ShadowText 컴포넌트를 가져옴
import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts"; // "@/styles/fonts"에서 Fonts를 가져옴

import img1 from "../asset/1.성경맥잡기학교 (1).jpg"; // "../asset/1.성경맥잡기학교 (1).jpg" 이미지를 가져옴
import img2 from "../asset/1.성경맥잡기학교 (2).jpg"; // "../asset/1.성경맥잡기학교 (2).jpg" 이미지를 가져옴
import img3 from "../asset/1.성경맥잡기학교 (3).jpg"; // "../asset/1.성경맥잡기학교 (3).jpg" 이미지를 가져옴
import img4 from "../asset/1.성경맥잡기학교 (4).jpg"; // "../asset/1.성경맥잡기학교 (4).jpg" 이미지를 가져옴
import imgplus from "../asset/뚜껑.png"; // "../asset/뚜껑.png" 이미지를 가져옴

const Cate1 = () => {
  const isMobile = useIsMobile();
  const color1 = "#996633"; // color1 변수에 "#996633" 할당
  const color2 = "#996633"; // color2 변수에 "#996633" 할당
  const color3 = "#996633"; // color3 변수에 "#996633" 할당

  return (
    <>
      <div>
        <Helmet>
          <title>김온유 목사 성경 맥잡기 학교</title>
          <meta name="descripttion" content="김온유 목사 성경 맥잡기 학교" />
        </Helmet>
      </div>

      <Flex
        style={isMobile ? { transform: "translateX(-10%)" } : {}}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
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
              성경맥잡기학교
            </ShadowText>{" "}
            {/* 그림자 효과가 있는 텍스트 */}
            <Spacer height={"10px"} /> {/* 10px 간격 */}
            <ShadowText size={"12px"}>BIBLE ACADEMY</ShadowText>{" "}
            {/* 그림자 효과가 있는 텍스트 */}
          </div>
        </div>
        <Spacer height={"80px"} /> {/* 80px 간격 */}
        <Flex justifyContent="center">
          {" "}
          {/* 가로 중앙 정렬된 Flex 컨테이너 */}
          <div
            style={{
              position: "relative",
              width: `${isMobile ? "100%" : "80%"}`,
              height: "auto",
              margin: "10px",
            }}
          >
            {" "}
            {/* 상대 위치, 가로 전체, 높이 자동 조절되는 div */}
            <img
              src={imgplus}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                transform: "translateY(50%)",
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
                backgroundColor: "white",
              }}
            >
              {" "}
              {/* 텍스트가 중앙 정렬된 div */}
              <Text color={color1} font={Fonts.Bold} size={"28px"}>
                모세오경
              </Text>{" "}
              {/* 텍스트 */}
            </div>
          </div>
        </Flex>
        <Flex justifyContent="space-between" width={isMobile ? "120%" : "90%"}>
          {" "}
          {/* 간격이 20px인 Flex 컨테이너 */}
          <Text color={color2} font={Fonts.Bold} size={"26px"}>
            창세기
          </Text>{" "}
          {/* 텍스트 */}
          <Text color={color2} font={Fonts.Bold} size={"26px"}>
            출애굽기
          </Text>{" "}
          {/* 텍스트 */}
          <Text color={color2} font={Fonts.Bold} size={"26px"}>
            레위기
          </Text>{" "}
          {/* 텍스트 */}
          <Text color={color2} font={Fonts.Bold} size={"26px"}>
            민수기
          </Text>{" "}
          {/* 텍스트 */}
          <Text color={color2} font={Fonts.Bold} size={"26px"}>
            신명기
          </Text>{" "}
          {/* 텍스트 */}
        </Flex>
        <Spacer height={"80px"} /> {/* 80px 간격 */}
        <Text>
          예수님은 모세오경의 가치에 대해서 이렇게 말씀하셨습니다.
        </Text>{" "}
        {/* 텍스트 */}
        <Spacer height={"30px"} /> {/* 30px 간격 */}
        <div
          style={
            isMobile
              ? {
                  width: "120%",
                  backgroundColor: "ButtonShadow",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }
              : {
                  width: "100%",
                  backgroundColor: "ButtonShadow",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }
          }
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
                  <Text
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    모세를 믿었더라면 또 나를 믿었으리니
                  </Text>{" "}
                  {/* 텍스트 */}
                  <Text
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    이는 그가 내게 대하여 기록하였음이라
                  </Text>{" "}
                  {/* 텍스트 */}
                  <Text
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    그러나 그의 글(모세오경)도 믿지 아니하거든
                  </Text>{" "}
                  {/* 텍스트 */}
                  <Text
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    어찌 내 말(계시된 진리)을 믿겠느냐 하시니라
                  </Text>{" "}
                  {/* 텍스트 */}
                </Flex>
                <Text
                  color={color3}
                  font={Fonts.Regular}
                  size={isMobile ? "14px" : "16px"}
                >
                  요 5:46-47
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
        <Spacer height={"80px"} /> {/* 80px 간격 */}
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
              <Text size={"14px"}>구약의 핵심이자 뼈대인 모세오경은</Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                하나님이 누구인지, 인류를 경작하시는 농부의 경영
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                방식을 잘 알 수 있는 거울과 모범 교재입니다.
              </Text>{" "}
              {/* 텍스트 */}
            </Flex>
            <Flex flexDirection="column">
              {" "}
              {/* 세로로 정렬된 Flex 컨테이너 */}
              <Text size={"14px"}>구약의 핵심이자 뼈대인 모세오경은</Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                하나님이 누구인지, 인류를 경작하시는 농부의 경영
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                방식을 잘 알 수 있는 거울과 모범 교재입니다.
              </Text>{" "}
              {/* 텍스트 */}
            </Flex>
            <Flex flexDirection="column">
              {" "}
              {/* 세로로 정렬된 Flex 컨테이너 */}
              <Text size={"14px"}>구약의 핵심이자 뼈대인 모세오경은</Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                하나님이 누구인지, 인류를 경작하시는 농부의 경영
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                방식을 잘 알 수 있는 거울과 모범 교재입니다.
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
        <Spacer height={"50px"} /> {/* 50px 간격 */}
        <Text>위 세 가지의 이해는 모세오경 수업의 핵심주제입니다.</Text>{" "}
        {/* 텍스트 */}
        <Spacer height={"50px"} /> {/* 50px 간격 */}
        <Flex gap={"15px"} justifyContent="center" alignItems="center">
          {" "}
          {/* 간격이 15px인, 세로 및 가로 중앙 정렬된 Flex 컨테이너 */}
          <Flex flexDirection="column" gap={"20px"}>
            {" "}
            {/* 세로 간격이 20px인 Flex 컨테이너 */}
            <Flex flexDirection="column">
              {" "}
              {/* 세로로 정렬된 Flex 컨테이너 */}
              <Text size={"14px"}>
                모세오경에 숨겨져있는 출애굽 속 구원의 모형론을
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                통해 왜곡되고 변질된 구원론과 예빼론, 물질론,성
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                령론, 마귀론 등 감추어진 성경 속 신학들이 참된 진
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                리의 기준으로 회복하게 될 것입니다.
              </Text>{" "}
              {/* 텍스트 */}
            </Flex>
            <Flex flexDirection="column">
              {" "}
              {/* 세로로 정렬된 Flex 컨테이너 */}
              <Text size={"14px"}>
                또한 언약의 하나님을 이해하며 언약을 중심으로 신
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                구약 전체에 흐르는 일관된 흐름과 맥을 잡아 신앙의
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                실제적인 뼈대와 기둥을 세우는 수업이 될 것입니다.
              </Text>{" "}
              {/* 텍스트 */}
            </Flex>
          </Flex>
          <img
            src={img4}
            style={{ width: "50%", height: "auto", objectFit: "cover" }}
          />{" "}
          {/* 이미지 표시 */}
        </Flex>
        <Spacer height={"50px"} /> {/* 50px 간격 */}
        <Flex justifyContent="center">
          {" "}
          {/* 가로 중앙 정렬된 Flex 컨테이너 */}
          <Text size={"14px"}>
            남유다 3대 성군 중 한 명인 요시야 왕의 종교개혁은 신명기를 통한
            개혁이었습니다.
          </Text>{" "}
          {/* 텍스트 */}
          <Text size={"14px"}>참된 부흥은 개혁을 앞서지 않습니다.</Text>{" "}
          {/* 텍스트 */}
        </Flex>
        <Spacer height={"30px"} /> {/* 10px 간격 */}
        <Flex justifyContent="center">
          {" "}
          {/* 가로 중앙 정렬된 Flex 컨테이너 */}
          <Text size={"14px"}>
            부흥의 열쇠는 개혁이며 참된 개혁의 열쇠는 신명기[모세오경]의 회복을
            통해 일어납니다.
          </Text>{" "}
          {/* 텍스트 */}
          <Text size={"14px"}>
            이 수업을 통해 주님의 시각과 마음을 받아 개혁의 정신으로 많은 사람을
            옳은 데로 돌이키는
          </Text>{" "}
          {/* 텍스트 */}
          <Text size={"14px"}>추수할 일꾼으로 준비될 것입니다.</Text>{" "}
          {/* 텍스트 */}
        </Flex>
        <Spacer height={"55px"} />
        <div
          style={
            isMobile
              ? {
                  width: "120%",
                  backgroundColor: "ButtonShadow",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }
              : {
                  width: "100%",
                  backgroundColor: "ButtonShadow",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }
          }
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
                size={isMobile ? "28px" : "40px"}
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
                  <Text
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    천국은 마치 밭에 감추인 보화와 같으니 사람이 이를 발견한 후
                  </Text>{" "}
                  {/* 텍스트 */}
                  <Text
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    숨겨 두고 기뻐하며 돌아가서 자기의 소유를 다 팔아 그 밭을
                    사느니라
                  </Text>{" "}
                </Flex>
                <Text
                  color={color3}
                  font={Fonts.Regular}
                  size={isMobile ? "14px" : "16px"}
                >
                  마 13:44
                </Text>{" "}
                {/* 텍스트 */}
              </Flex>
              <Text
                color={color3}
                font={Fonts.Bold}
                size={isMobile ? "28px" : "40px"}
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
    </>
  );
};

export default Cate1; // Cate1 컴포넌트 내보내기
