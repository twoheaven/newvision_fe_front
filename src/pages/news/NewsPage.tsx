import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";

import NewsPageHeader from "@/components/pageHeader/NewsPageHeader";

import BoardList from "../../note/pages/BoardList";
import Fonts from "../../styles/fonts";
// import { PostList } from "@/note/components/PostList.jsx";

const NewsPage = () => {
  return (
    <Area>
      <NewsPageHeader />

      <Spacer height={"30px"} />
      <Flex
        flexDirection={"column"}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <h1 className="text-center text-2xl font-bold mb-8">
          <Text size={"24px"} font={Fonts.Bold}>
            공지
          </Text>
        </h1>

        <p
          className="text-center mb-8 text-gray-600"
          style={{ translate: "0 -20px" }}
        >
          뉴비전교회 공지사항을 알려드립니다.
        </p>
        <Spacer height={"10px"} />
      </Flex>

      <Content>
        <Flex justifyContent="center">
          <BoardList />
        </Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default NewsPage;
