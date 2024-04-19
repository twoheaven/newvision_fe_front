import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import MissionaryPageHeader from "@/components/pageHeader/MissionPageHeader";

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
          <Flex justifyContent="center"></Flex>
        </Content>

        <Spacer height={"100px"} />
      </Area>
    </>
  );
};

export default MissionaryPage;
