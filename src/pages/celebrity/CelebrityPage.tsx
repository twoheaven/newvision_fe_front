import { Area, Content, Spacer } from "@dohyun-ko/react-atoms";

import CelebrityPageHeader from "@/components/pageHeader/CelebrityPageHeader";

const CelebrityPage = () => {
  return (
    <Area>
      <CelebrityPageHeader />

      <Spacer height={"30px"} />

      <Content></Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default CelebrityPage;
