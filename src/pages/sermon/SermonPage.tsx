import { Area, Content, Spacer } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import CelebrityPageHeader from "@/components/pageHeader/SermonPageHeader";

import SermonList from "./SermonList";

const SermonPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="김온유 목사 설교 말씀" />
      </Helmet>

      <Area>
        <CelebrityPageHeader />
        <Spacer height={"30px"} />
        <Content>
          <SermonList />
        </Content>
        <Spacer height={"100px"} />
      </Area>
    </>
  );
};

export default SermonPage;
