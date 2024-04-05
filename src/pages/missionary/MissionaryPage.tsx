import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";

import MissionaryPageHeader from "@/components/pageHeader/MissionPageHeader";

const MissionaryPage = () => {
  return (
    <Area>
      <MissionaryPageHeader />

      <Spacer height={"30px"} />

      <Content>
        <Flex justifyContent="center"></Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default MissionaryPage;
