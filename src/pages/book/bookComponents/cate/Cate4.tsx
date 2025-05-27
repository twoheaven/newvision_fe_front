import { Flex } from "@dohyun-ko/react-atoms";

import ArrowBox from "../component/ArrowBox";
import SmallBookBox from "../component/SmallBookBox";
import bookdatas from "../data/bookdatas";

const Cate4 = () => {
  return (
    <div style={{ width: "90%", padding: "16px" }}>
      <Flex flexDirection="column" gap="60px">
        <ArrowBox
          label1="성령학교 교재"
          label2="성령의 기름부음과 성경의 맥을 이해하는 교재"
        />
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ marginLeft: "65px" }}
          gap={"60px"}
        >
          <SmallBookBox
            bookimg={bookdatas[6].img}
            label1={bookdatas[6].label1}
            label2={bookdatas[6].label2}
            label3={bookdatas[6].label3}
            imgwidth="200px"
          />
          <SmallBookBox
            bookimg={bookdatas[7].img}
            label1={bookdatas[7].label1}
            label2={bookdatas[7].label2}
            label3={bookdatas[7].label3}
            imgwidth="200px"
          />
          <SmallBookBox
            bookimg={bookdatas[8].img}
            label1={bookdatas[8].label1}
            label2={bookdatas[8].label2}
            label3={bookdatas[8].label3}
            imgwidth="200px"
          />
        </Flex>
      </Flex>
    </div>
  );
};
export default Cate4; // Cate1 컴포넌트 내보내기
