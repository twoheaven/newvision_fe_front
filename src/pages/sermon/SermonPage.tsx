import { Area, Content, Spacer } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import CelebrityPageHeader from "@/components/pageHeader/SermonPageHeader";

const SermonPage = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>김온유 목사 설교 말씀</title>
          <meta name="description" content="김온유 목사 설교 말씀" />
        </Helmet>
      </div>

      <Area>
        <CelebrityPageHeader />
        <Spacer height={"30px"} />
        <Content></Content>
        <Spacer height={"100px"} />
      </Area>
    </>
  );
};

export default SermonPage;
