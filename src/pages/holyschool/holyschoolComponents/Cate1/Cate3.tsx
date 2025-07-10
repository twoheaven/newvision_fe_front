import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms"; // @dohyun-ko/react-atoms 패키지에서 Flex, Spacer, Text를 가져옴
import { Helmet } from "react-helmet-async";

import ShadowText from "@/components/text/shadowtext"; // "@/components/text/shadowtext"에서 ShadowText 컴포넌트를 가져옴
import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts"; // "@/styles/fonts"에서 Fonts를 가져옴

import img1 from "../asset/3.요한계시록학교 (1).jpg"; // "../asset/1.성경맥잡기학교 (1).jpg" 이미지를 가져옴
import img2 from "../asset/3.요한계시록학교 (2).jpg"; // "../asset/1.성경맥잡기학교 (2).jpg" 이미지를 가져옴
import img3 from "../asset/수업의 핵심 방향성.png";

const Cate3 = () => {
  const color3 = "#996633"; // color3 변수에 "#996633" 할당
  const isMobile = useIsMobile();
  return (
    <>
      <div>
        <Helmet>
          <meta name="descripttion" content="김온유 목사 요한 계시록 학교" />
        </Helmet>
      </div>
      <Flex
        style={{
          textAlign: isMobile ? "center" : "left",
        }}
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
              요한계시록학교
            </ShadowText>{" "}
            {/* 그림자 효과가 있는 텍스트 */}
            <Spacer height={"10px"} /> {/* 10px 간격 */}
            <ShadowText size={"12px"}>ENDTIME ACADEMY</ShadowText>{" "}
            {/* 그림자 효과가 있는 텍스트 */}
          </div>
        </div>
        <Spacer height={isMobile ? "40px" : "80px"} /> {/* 80px 간격 */}
        <Text>종말론의 핵심은 &apos;깨어있는 것&apos;입니다.</Text>{" "}
        {/* 텍스트 */}
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
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    이러므로 너희는 장차 올 이 모든 일을 능히 피하고
                  </Text>{" "}
                  {/* 텍스트 */}
                  <Text
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    인자 앞에 서도록 항상 기도하며 깨어있으라 하시니라
                  </Text>{" "}
                  {/* 텍스트 */}
                </Flex>
                <Text
                  color={color3}
                  font={Fonts.Regular}
                  size={isMobile ? "14px" : "16px"}
                >
                  눅 21:36
                </Text>{" "}
                {/* 텍스트 */}
              </Flex>
              <Text
                color={color3}
                font={Fonts.Bold}
                size={isMobile ? "30px" : "40px"}
                style={{ transform: "translateY(-14px)" }}
              >
                &ldquo;
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
              <Text size={"14px"}>
                &apos;역사를 이끄시는 하나님을 알 때&apos;
              </Text>{" "}
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
        <Text>지금은 요한계시록이 열리는 시대입니다.</Text>
        <Text>
          노아에게 물심판의 경고의 계시를 주셨던 것처럼 말세지말 주님은
        </Text>
        <Text>
          당신의 사랑하는 자에게 자신의 뜻을 드러내고 계시할 것입니다.
        </Text>
        <Text>
          무엇보다 end-time 비밀을 성경을 통해 성령 안에서 증거하며 이해하는
          수업이 될 것입니다.
        </Text>
        <Spacer height={"50px"} />
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
            <Flex gap={"30px"}>
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
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    주 여호와께서는 자기의 비밀을 그 종 선자자들에게
                  </Text>{" "}
                  {/* 텍스트 */}
                  <Text
                    color={color3}
                    font={Fonts.Medium}
                    size={isMobile ? "14px" : "18px"}
                  >
                    보이지 아니하시고는 결코 행하심이 없으시리라
                  </Text>{" "}
                </Flex>
                <Text
                  color={color3}
                  font={Fonts.Regular}
                  size={isMobile ? "14px" : "16px"}
                >
                  암 3:7
                </Text>{" "}
                {/* 텍스트 */}
              </Flex>
              <Text
                color={color3}
                font={Fonts.Bold}
                size={isMobile ? "30px" : "40px"}
                style={{ transform: "translateY(-14px)" }}
              >
                &ldquo;
              </Text>{" "}
              {/* 텍스트 */}
            </Flex>
            <Spacer height={"25px"} /> {/* 30px 간격 */}
          </Flex>
        </div>
        <Spacer height={"50px"} />
        <Text>주를 세번 부인한 베드로와 같은 실패는 더이상 없다!</Text>
        <Text>다니엘과 같은 환난을 이기는 믿음으로 무장하라!</Text>
        <Text>골리앗을 이긴 다윗의 영적 갑주를 입으라!</Text>
        <Text>재림 때 예수님과 연합을 위하여 신부들이여 기름을 준비하라!</Text>
        <Text>주님의 본질과 우선순위를 아는 것이 생존의 방향성이다!</Text>
        <Spacer height={"10px"} />
        <div>
          <img src={img3} width={"100%"} />
        </div>
      </Flex>
    </>
  );
};

export default Cate3; // Cate1 컴포넌트 내보내기
