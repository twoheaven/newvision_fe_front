import { Flex } from "@dohyun-ko/react-atoms";

import ArrowBox from "../component/ArrowBox";
import SmallBookBox from "../component/SmallBookBox";
import bookdatas from "../data/bookdatas";

const Cate3 = () => {
  return (
    <div style={{ width: "90%", padding: "16px" }}>
      <Flex flexDirection="column" gap="60px">
        <ArrowBox
          label1="구원론"
          label2="올바른 구원론을 알고 재림전 하나님의 우선순위로 새 부대 준비되기"
        />
        <Flex
          alignItems="center"
          justifyContent="center"
          gap={"60px"}
          style={{ marginLeft: "65px" }}
        >
          <SmallBookBox
            bookimg={bookdatas[3].img}
            label1={bookdatas[3].label1}
            label2={bookdatas[3].label2}
            label3={bookdatas[3].label3}
            imgwidth="200px"
          />
          <SmallBookBox
            bookimg={bookdatas[4].img}
            label1={bookdatas[4].label1}
            label2={bookdatas[4].label2}
            label3={bookdatas[4].label3}
            imgwidth="200px"
          />
          <SmallBookBox
            bookimg={bookdatas[5].img}
            label1={bookdatas[5].label1}
            label2={bookdatas[5].label2}
            label3={bookdatas[5].label3}
            imgwidth="200px"
          />
        </Flex>
      </Flex>
    </div>
  );
};
export default Cate3; // Cate1 컴포넌트 내보내기
