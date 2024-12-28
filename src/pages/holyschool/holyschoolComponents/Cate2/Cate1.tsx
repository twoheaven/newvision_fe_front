import { Flex } from "@dohyun-ko/react-atoms"; // @dohyun-ko/react-atoms 패키지에서 Flex, Spacer, Text를 가져옴
import { Helmet } from "react-helmet-async";

import img4 from "../asset/청년리더훈련1.png";
import img1 from "../asset/킹덤리더스쿨1.png";
import img2 from "../asset/킹덤리더스쿨2.png";
import img3 from "../asset/킹덤리더스쿨3.png";

const Cate1 = () => {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <Helmet>
          <meta name="descripttion" content="김온유 목사 리더 양육 훈련" />
        </Helmet>
      </div>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        style={{ width: "100%" }}
      >
        <div style={{ width: "100%" }}>
          <img src={img1} style={{ width: "100%" }} />
          <img src={img2} style={{ width: "100%" }} />
          <img src={img3} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "100%" }}>
          <img src={img4} style={{ width: "100%" }} />
        </div>
      </Flex>
    </div>
  );
};

export default Cate1; // Cate1 컴포넌트 내보내기
