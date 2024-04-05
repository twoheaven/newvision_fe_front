import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";

import NewsPageHeader from "@/components/pageHeader/NewsPageHeader";

const NewsPage = () => {
  return (
    <Area>
      <NewsPageHeader />

      <Spacer height={"30px"} />

      <Content>
        <Flex justifyContent="center"></Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default NewsPage;
