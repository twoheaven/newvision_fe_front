import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";

import EventPageHeader from "@/components/pageHeader/EventPageHeader";

const EventPage = () => {
  return (
    <Area>
      <EventPageHeader />

      <Spacer height={"30px"} />

      <Content>
        <Flex justifyContent="center"></Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default EventPage;
