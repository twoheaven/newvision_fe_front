import { Flex } from "@dohyun-ko/react-atoms";

import ArrowBox from "../component/ArrowBox";
import DetailBookBox from "../component/DetailBookBox";
import bookdatas from "../data/bookdatas";

const Salvation2 = () => {
  return (
    <div style={{ width: "90%", padding: "16px" }}>
      <Flex flexDirection="column" gap="16px" style={{ marginTop: "50px" }}>
        <ArrowBox
          label1="구원론"
          label2="올바른 구원론을 알고 재림전 하나님의 우선순위로 새 부대 준비되기"
        />
        <Flex alignItems="center" justifyContent="center">
          <DetailBookBox
            bookimg={bookdatas[4].img}
            label1={bookdatas[4].label1}
            label2={bookdatas[4].label2}
            label3={bookdatas[4].label3}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default Salvation2;
