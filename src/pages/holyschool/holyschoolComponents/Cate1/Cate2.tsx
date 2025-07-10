import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms"; // @dohyun-ko/react-atoms 패키지에서 Flex, Spacer, Text를 가져옴
import { Helmet } from "react-helmet-async";

import ShadowText from "@/components/text/shadowtext"; // "@/components/text/shadowtext"에서 ShadowText 컴포넌트를 가져옴
import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts"; // "@/styles/fonts"에서 Fonts를 가져옴

import img1 from "../asset/2.기름부음학교 (1).jpg"; // "../asset/1.성경맥잡기학교 (1).jpg" 이미지를 가져옴
import img2 from "../asset/2.기름부음학교 (2).jpg"; // "../asset/1.성경맥잡기학교 (2).jpg" 이미지를 가져옴
import img3 from "../asset/2.기름부음학교 (3).jpg"; // "../asset/1.성경맥잡기학교 (3).jpg" 이미지를 가져옴
import img4 from "../asset/2.기름부음학교 (4).jpg"; // "../asset/1.성경맥잡기학교 (4).jpg" 이미지를 가져옴

const Cate2 = () => {
  const isMobile = useIsMobile();
  const color3 = "#BEBEED";
  const color1 = "#6161BA";

  return (
    <>
      <div>
        <Helmet>
          <meta name="descripttion" content="김온유 목사 기름 부음 학교" />
        </Helmet>
      </div>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        style={{ textAlign: "center" }}
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
              기름부음학교
            </ShadowText>{" "}
            {/* 그림자 효과가 있는 텍스트 */}
            <Spacer height={"10px"} /> {/* 10px 간격 */}
            <ShadowText size={"12px"}>ANOINTING ACADEMY</ShadowText>{" "}
            {/* 그림자 효과가 있는 텍스트 */}
          </div>
        </div>
        <Spacer height={"40px"} /> {/* 80px 간격 */}
        <Text font={Fonts.Bold}>초대교회와 같은</Text>
        <Text font={Fonts.Bold}>사도행전의 역사가 나타나는 교회!</Text>
        <Spacer height={"40px"} />
        <Flex gap={"3px"}>
          <Text>
            마지막 참 교회는 요엘서 예언의 성취가 온전히 이루어짐으로{" "}
          </Text>
          <Text color={color1} font={Fonts.Bold}>
            폭포수같이 부어지는
          </Text>
        </Flex>
        <Flex gap={"3px"}>
          <Text>성령의 기름부음 안에서 환상과 꿈과 예언을 통한</Text>
          <Text color={color1} font={Fonts.Bold}>
            예언적인 체질의 교회
          </Text>
          <Text>가 될 것입니다.</Text>{" "}
        </Flex>
        <Spacer height={"60px"} /> {/* 30px 간격 */}
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
                size={isMobile ? "30px" : "40px"}
                style={{ transform: "translateY(-14px)" }}
              >
                &ldquo;
              </Text>{" "}
              {/* 텍스트 */}
              <Flex flexDirection="column" alignItems="center" gap={"20px"}>
                {" "}
                {/* 세로로 정렬된 Flex 컨테이너 */}
                <Flex flexDirection="column" alignItems="center">
                  {" "}
                  {/* 세로로 정렬된 Flex 컨테이너 */}
                  <Text
                    color={color1}
                    font={Fonts.Medium}
                    size={isMobile ? "15px" : "18px"}
                  >
                    오직 성령이 너희에게 임하시면 너희가 권능을 받고
                  </Text>{" "}
                  {/* 텍스트 */}
                  <Text
                    color={color1}
                    font={Fonts.Medium}
                    size={isMobile ? "15px" : "18px"}
                  >
                    예루살렘과 온 유대와 사마리아와 땅 끝까지 이르러
                  </Text>{" "}
                  {/* 텍스트 */}
                  <Text
                    color={color1}
                    font={Fonts.Medium}
                    size={isMobile ? "15px" : "18px"}
                  >
                    내 증인이 되리라 하시니라
                  </Text>{" "}
                  {/* 텍스트 */}
                </Flex>
                <Text
                  color={color1}
                  font={Fonts.Regular}
                  size={isMobile ? "14px" : "16px"}
                >
                  행 1:8
                </Text>{" "}
                {/* 텍스트 */}
              </Flex>
              <Text
                color={color3}
                font={Fonts.Bold}
                size={isMobile ? "30px" : "40px"}
                style={{ transform: "translateY(-14px)" }}
              >
                &rdquo;
              </Text>{" "}
              {/* 텍스트 */}
            </Flex>
            <Spacer height={"30px"} /> {/* 30px 간격 */}
          </Flex>
        </div>
        <Spacer height={"60px"} /> {/* 80px 간격 */}
        <img
          src={img2}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />{" "}
        <Spacer height={"60px"} /> {/* 80px 간격 */}
        <Flex gap={"15px"} justifyContent="center" alignItems="center">
          {" "}
          {/* 간격이 15px인, 세로 및 가로 중앙 정렬된 Flex 컨테이너 */}
          <img
            src={img3}
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
                예수님은 가르치시고 전파하시고 고치시는 사역이
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>주사역이었습니다.</Text> {/* 텍스트 */}
            </Flex>
            <Flex flexDirection="column">
              {" "}
              {/* 세로로 정렬된 Flex 컨테이너 */}
              <Text size={"14px"}>
                예언적인 능력과 기름부은 안에서 축사와 치유사역
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                을 하신 예수님의 사역을 그대로 계승하여 주님의 뜻
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                을 드러내시는 게 하나님의 일입니다.
              </Text>{" "}
              {/* 텍스트 */}
            </Flex>
            <Flex flexDirection="column">
              {" "}
              {/* 세로로 정렬된 Flex 컨테이너 */}
              <Text size={"14px"}>
                잘못된 신학으로 인해 은사중지론과 같은 오류들로
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>
                인한 영적 무지가 예수님의 사역과 성령의 인도하심
              </Text>{" "}
              {/* 텍스트 */}
              <Text size={"14px"}>에서 방향을 잃게 만들었습니다.</Text>{" "}
              {/* 텍스트 */}
            </Flex>
          </Flex>
        </Flex>
        <Spacer height={"60px"} /> {/* 80px 간격 */}
        {/* 이미지 표시 */}
        <Text size={"14px"}>
          이 수업은 은사 자체보다 은사를 주신 하나님께 인도하는 주된 목적을
          가지고 있습니다.
        </Text>{" "}
        <Spacer height={"30px"} />
        <Text size={"14px"}>
          교회에게 주신 도구[은사]를 어떻게 활용할 것인가에 대해 배워서 은사가
          영혼을 죽이는 무기가 아니라
        </Text>{" "}
        <Text size={"14px"}>
          교회에 덕을 끼치며 하나님 나라 확장의 살리는 도구가 되도록 준비시키고
          훈련시키는 장이 될 것입니다.
        </Text>{" "}
        <Spacer height={"60px"} />
        <img
          src={img4}
          style={{ width: "60%", height: "auto", objectFit: "cover" }}
        />{" "}
        {/* 이미지 표시 */}
      </Flex>
    </>
  );
};

export default Cate2; // Cate1 컴포넌트 내보내기
