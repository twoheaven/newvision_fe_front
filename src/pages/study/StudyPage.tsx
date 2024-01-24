import { Area, Content, Flex, Grid, Spacer } from "@dohyun-ko/react-atoms";

import Intro from "@/assets/intro";
import StudyPageHeader from "@/components/pageHeader/StudyPageHeader";
import useIsMobile from "@/hooks/useIsMobile";

interface StudyPageProps {}

const StudyPage = ({}: StudyPageProps) => {
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
