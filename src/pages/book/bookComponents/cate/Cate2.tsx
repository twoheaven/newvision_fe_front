import { Flex } from "@dohyun-ko/react-atoms";

import ArrowBox from "../component/ArrowBox";
import SmallBookBox from "../component/SmallBookBox";
import bookdatas from "../data/bookdatas";

const Cate2 = () => {
  return (
    <div style={{ width: "90%", padding: "16px" }}>
      <Flex flexDirection="column" gap="16px">
        <ArrowBox
          label1="선한시리즈"
          label2="교회 안에서 하나님 나라를 이루어가기 위해 꼭 읽어야 할 책!"
        />
        <Flex alignItems="center" justifyContent="center">
          <SmallBookBox
            bookimg={bookdatas[0].img}
            label1={bookdatas[0].label1}
            label2={bookdatas[0].label2}
            label3={bookdatas[0].label3}
          />
          <SmallBookBox
            bookimg={bookdatas[1].img}
            label1={bookdatas[1].label1}
            label2={bookdatas[1].label2}
            label3={bookdatas[1].label3}
          />
          <SmallBookBox
            bookimg={bookdatas[2].img}
            label1={bookdatas[2].label1}
            label2={bookdatas[2].label2}
            label3={bookdatas[2].label3}
          />
        </Flex>
      </Flex>
    </div>
  );
};
export default Cate2; // Cate1 컴포넌트 내보내기
