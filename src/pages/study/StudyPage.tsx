import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";

import StudyPageHeader from "@/components/pageHeader/StudyPageHeader";

const StudyPage = () => {
  return (
    <Area>
      <StudyPageHeader />

      <Spacer height={"30px"} />

      <Content>
        <Flex justifyContent="center"></Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default StudyPage;
