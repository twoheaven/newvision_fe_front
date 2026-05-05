import "./IntroCategory1.css";

import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

import kimonyouimg from "./asset/목사님사진.jpg";

const welcomeParagraphs = [
  "동탄뉴비전교회에 오신 여러분을 진심으로 환영합니다.",
  "이곳은 단순히 예배를 드리는 공간을 넘어, 하나님의 살아있는 말씀 앞에서 우리의 삶이 새롭게 변화되는 공동체입니다.",
  "오늘을 살아가는 우리는 수많은 혼란과 영적 침체 속에 놓여 있지만, 하나님의 진리는 여전히 분명하며, 그 말씀은 우리의 삶을 다시 일으키는 능력이 있습니다.",
  "동탄뉴비전교회는 어둠 속에서 빛을 비추는 등대와 같이, 왜곡된 시대 속에서도 하나님의 진리를 바로 세우고 삶으로 살아내는 신앙을 추구합니다.",
  "우리는 단순한 지식이나 형식적인 신앙에 머무르지 않고, 말씀을 따라 살아가는 실제적인 믿음, 그리고 그 믿음이 삶 속에서 열매 맺는 신앙을 함께 만들어갑니다.",
  "여러분 한 사람, 한 사람이 하나님의 계획 안에서 회복되고 세워지기를 기대합니다.",
];

const IntroCategory1 = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div>
        <Helmet>
          <meta
            name="description"
            content="뉴비전교회에 오신 여러분을 진심으로 환영합니다"
          />
        </Helmet>
      </div>
      <Content>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <p className="intro-welcome-title" lang="ko">
            환영합니다
          </p>
          <Spacer height={"5px"} />
          <p className="intro-welcome-subtitle" lang="ko">
            뉴비전교회에 오신 여러분을 진심으로 환영합니다.
          </p>
          <Spacer height={"50px"} />
          <div className="intro-welcome-slogan" lang="ko">
            <span className="intro-welcome-phrase">
              &quot;<strong>개혁의 부르심</strong>을 가지고
            </span>
            <wbr />
            <span className="intro-welcome-phrase">
              <strong>새부대로 준비</strong>되는 교회!&quot;
            </span>
          </div>
          <p className="intro-welcome-church" lang="ko">
            동탄 뉴비전교회
          </p>
        </Flex>
        <Spacer height={"50px"} />
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection={isMobile ? "column" : undefined}
          gap={isMobile ? "28px" : undefined}
          width={isMobile ? "100%" : undefined}
        >
          <img
            className="intro-welcome-pastor-image"
            src={kimonyouimg}
            width={isMobile ? "80%" : "30%"}
            alt="담임목사 김온유"
          />
          <Flex
            flexDirection="column"
            justifyContent="center"
            width={isMobile ? "100%" : undefined}
          >
            <Flex>
              <div className="intro-welcome-copy" lang="ko">
                {welcomeParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Flex>
            <Flex flexDirection="column">
              <br />
              <Flex justifyContent={isMobile ? "center" : ""}>
                <Flex flexDirection="column">
                  <Flex alignItems="center" gap={"5px"}>
                    <Text font={Fonts.Bold} color="gray" size={"20px"}>
                      담임목사
                    </Text>
                    <Text font={Fonts.Bold} size={"24px"}>
                      김온유
                    </Text>
                  </Flex>

                  <Text>
                    장로회 신학대학원 M.Div 졸업
                    <br />
                    미국 드류 신학대학원 목회학 박사(D.Min) 과정
                    <br />
                    예장통합 여수노회 목사안수
                    <br />
                    쉐카이나 영광 미니스트리 대표
                    <br />
                  </Text>
                  <Text font={Fonts.Bold}>
                    <strong>쉐카이나 성령학교 강사</strong>
                    <br />
                    <strong>동탄 뉴비전교회 담임목사</strong>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Content>
    </>
  );
};

export default IntroCategory1;
