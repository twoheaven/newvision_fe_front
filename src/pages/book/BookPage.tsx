import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";

import BookPageHeader from "@/components/pageHeader/BookPageHeader";

const BookPage = () => {
  return (
    <Area>
      <BookPageHeader />

      <Spacer height={"30px"} />

      <Content>
        <Flex justifyContent="center"></Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default BookPage;
