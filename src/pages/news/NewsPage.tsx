import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";

import PartyPageHeader from "@/components/pageHeader/PartyPageHeader";

const NewsPage = () => {
  return (
    <Area>
      <PartyPageHeader />

      <Spacer height={"30px"} />

      <Content>
        <Flex justifyContent="center"></Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default NewsPage;
