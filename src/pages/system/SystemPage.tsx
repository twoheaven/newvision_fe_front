import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";

import SystemPageHeader from "@/components/pageHeader/SystemPageHeader";

interface SystemPageProps {}

const SystemPage = ({}: SystemPageProps) => {
  return (
    <Area>
      <SystemPageHeader />

      <Spacer height={"30px"} />

      <Content>
        <Flex justifyContent="center"></Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default SystemPage;
