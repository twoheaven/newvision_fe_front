import { Flex } from "@dohyun-ko/react-atoms";

import ArrowBox from "../component/ArrowBox";
import DetailBookBox from "../component/DetailBookBox";
import bookdatas from "../data/bookdatas";

const Good2 = () => {
  return (
    <div style={{ width: "90%", padding: "16px" }}>
      <Flex flexDirection="column" gap="16px" style={{ marginTop: "50px" }}>
        <ArrowBox
          label1="선한시리즈"
          label2="교회 안에서 하나님 나라를 이루어가기 위해 꼭 읽어야 할 책!"
        />
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ transform: "translateY(-100px)" }}
        >
          <DetailBookBox
            bookimg={bookdatas[1].img}
            label1={bookdatas[1].label1}
            label2={bookdatas[1].label2}
            label3={bookdatas[1].label3}
            label4={bookdatas[1].label4}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default Good2;
