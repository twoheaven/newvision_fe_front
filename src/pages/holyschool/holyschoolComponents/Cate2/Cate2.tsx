import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms"; // @dohyun-ko/react-atoms 패키지에서 Flex, Spacer, Text를 가져옴
import { Helmet } from "react-helmet-async";

import ShadowText from "@/components/text/shadowtext"; // "@/components/text/shadowtext"에서 ShadowText 컴포넌트를 가져옴
import Fonts from "@/styles/fonts"; // "@/styles/fonts"에서 Fonts를 가져옴

import img1 from "../asset/6.새가족양육훈련.png"; // "../asset/1.성경맥잡기학교 (1).jpg" 이미지를 가져옴

const Cate2 = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>김온유 목사 새가족 양육 훈련</title>
          <meta name="descripttion" content="김온유 목사 새가족 양육 훈련" />
        </Helmet>
      </div>
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
              새가족양육훈련
            </ShadowText>{" "}
            {/* 그림자 효과가 있는 텍스트 */}
            <Spacer height={"10px"} /> {/* 10px 간격 */}
            <ShadowText size={"12px"}>KINGDOM LEADER SCHOOL</ShadowText>{" "}
            {/* 그림자 효과가 있는 텍스트 */}
          </div>
        </div>
        <Spacer height={"80px"} /> {/* 80px 간격 */}
        <Text>새가족양육훈련 설명</Text>
        <Text>새가족양육훈련 설명</Text>
        <Text>새가족양육훈련 설명</Text>
        <Text>새가족양육훈련 설명</Text>
        <Text>새가족양육훈련 설명</Text>
        <Text>새가족양육훈련 설명</Text>
      </Flex>
    </>
  );
};

export default Cate2; // Cate1 컴포넌트 내보내기
