import { Area, Content, Spacer } from "@dohyun-ko/react-atoms";

import TeamPageHeader from "@/components/pageHeader/TeamPageHeader";

const IntroducePage = () => {
  return (
    <Area>
      <TeamPageHeader />

      <Spacer height={"30px"} />

      <Content></Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default IntroducePage;
