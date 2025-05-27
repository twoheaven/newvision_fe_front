import { Flex } from "@dohyun-ko/react-atoms";

import ArrowBox from "../component/ArrowBox";
import DetailBookBox from "../component/DetailBookBox";
import bookdatas from "../data/bookdatas";

const Holyschool3 = () => {
  return (
    <div style={{ width: "90%", padding: "16px" }}>
      <Flex flexDirection="column" gap="16px" style={{ marginTop: "50px" }}>
        <ArrowBox
          label1="선한시리즈"
          label2="교회 안에서 하나님 나라를 이루어가기 위해 꼭 읽어야 할 책!"
        />
        <Flex alignItems="center" justifyContent="center">
          <DetailBookBox
            bookimg={bookdatas[8].img}
            label1={bookdatas[8].label1}
            label2={bookdatas[8].label2}
            label3={bookdatas[8].label3}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default Holyschool3;
