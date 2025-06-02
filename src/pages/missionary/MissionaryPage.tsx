import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import missionary from "@/assets/페이지준비중.jpg";
import MissionaryPageHeader from "@/components/pageHeader/MissionPageHeader";

import Fonts from "../../styles/fonts";

const MissionaryPage = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta name="description" content="동탄 뉴비전 교회 선교사역"></meta>
        </Helmet>
      </div>
      <Area>
        <MissionaryPageHeader />

        <Spacer height={"30px"} />

        <Content>
          <Flex
            flexDirection={"column"}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <h1 className="text-center text-2xl font-bold mb-8">
              <Text size={"24px"} font={Fonts.Bold}>
                선교 비전과 현황
              </Text>
            </h1>

            <p
              className="text-center mb-8 text-gray-600"
              style={{ translate: "0 -20px" }}
            >
              뉴비전교회의 선교 비전을 알려드립니다.
            </p>
            <Spacer height={"10px"} />
            <img
              src={missionary}
              alt="missionary"
              style={{ width: "80%", height: "auto" }}
            />
          </Flex>
        </Content>

        <Spacer height={"100px"} />
      </Area>
    </>
  );
};

export default MissionaryPage;
