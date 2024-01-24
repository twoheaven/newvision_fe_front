import { Area, Content, Spacer } from "@dohyun-ko/react-atoms";

import TeamPageHeader from "@/components/pageHeader/TeamPageHeader";

const TeamPage = () => {
  return (
    <Area>
      <TeamPageHeader />

      <Spacer height={"30px"} />

      <Content></Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default TeamPage;
