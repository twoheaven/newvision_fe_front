import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

import visitimg from "./asset/교회직접방문.jpg";
import visitimg2 from "./asset/페이지준비중.png";

const IntroCategory6 = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        <Helmet>
          <meta
            name="description"
            content="교회에 처음 오신 새가족 분들께 교회안내와 함께 등록 절차를 안내드립니다."
          />
        </Helmet>
      </div>
      <Content>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text size={"24px"} font={Fonts.Bold}>
            새가족 안내
          </Text>
          <Spacer height={"5px"} />
          <Text size={"13px"} style={{ textAlign: "center" }}>
            교회에 처음 오신 새가족 분들께 교회안내와 함께 등록 절차를
            안내드립니다.
          </Text>
          <Spacer height={"50px"} />
        </Flex>
        <Flex
          gap={"5px"}
          style={isMobile ? {} : { marginLeft: "200px" }}
          alignItems="center"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "24px",
              height: "24px",
              padding: "0.3em",
              borderRadius: "50%",
              backgroundColor: "#7DAFE2",
              color: "white",
            }}
          >
            <Text
              size={"28px"}
              font={Fonts.Bold}
              color="white"
              style={{
                transform: "translate(-1px,-9.5px)",
              }}
            >
              1
            </Text>
          </div>
          <Text size={"20px"} font={Fonts.Bold}>
            교회 직접 방문
          </Text>
          <Text>정식 등록</Text>
        </Flex>
        <Spacer height={"10px"} />
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <img src={visitimg} width={isMobile ? "100%" : "70%"}></img>
          <Spacer height={"20px"} />
        </Flex>
        <Flex
          flexDirection="column"
          style={isMobile ? {} : { marginLeft: "200px" }}
        >
          <Flex gap={"5px"} flexDirection="row">
            <Text font={Fonts.Bold}>1. 교회등록</Text>
            <div style={{ width: "58px" }} />
            <Flex flexDirection="row" alignItems="center">
              <div>본당 내에 있는 &#39;</div>
              <div style={{ fontFamily: Fonts.Bold }}>새가족 등록카드</div>
              <div> &#39;를 작성하시고 제출해주십시오.</div>
            </Flex>
          </Flex>
          <Flex gap={"5px"}>
            <Text font={Fonts.Bold}>2. 등록기간</Text>
            <div style={{ width: "55px" }} />
            <Text>
              등록기간 동안 유튜브를 통하여 말씀을 듣고 준비하는 기간을
              가집니다.
            </Text>
          </Flex>
          <Flex gap={"5px"}>
            <Text font={Fonts.Bold}>3. 담임 목사님과 만남</Text>
            <Text>
              등록기간이 지나면, 담임목사님과 상담 및 인사가 있습니다.
            </Text>
          </Flex>
        </Flex>
        <Spacer height={"50px"} />
        <Flex
          gap={"5px"}
          style={isMobile ? {} : { marginLeft: "200px" }}
          alignItems="center"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "24px",
              height: "24px",
              padding: "0.3em",
              borderRadius: "50%",
              backgroundColor: "#7DAFE2",
              color: "white",
            }}
          >
            <Text
              size={"28px"}
              font={Fonts.Bold}
              color="white"
              style={{
                transform: "translate(-1px,-9.5px)",
              }}
            >
              2
            </Text>
          </div>
          <Text size={"20px"} font={Fonts.Bold}>
            온라인 등록
          </Text>
          <Text>지역별 온라인 임시 등록</Text>
        </Flex>
        <Spacer height={"10px"} />
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <img src={visitimg2} width={isMobile ? "100%" : "70%"}></img>
          <Spacer height={"20px"} />
        </Flex>
      </Content>
    </>
  );
};

export default IntroCategory6;
