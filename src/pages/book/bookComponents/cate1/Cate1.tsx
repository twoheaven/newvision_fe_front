import { Flex, Spacer } from "@dohyun-ko/react-atoms";

import useIsMobile from "@/hooks/useIsMobile";

import ArrowBox from "../component/ArrowBox";
import SmallBookBox from "../component/SmallBookBox";
import bookdatas from "../data/bookdatas";

const Cate1 = () => {
  const isMobile = useIsMobile();

  return (
    <div style={{ width: "90%", padding: "16px" }}>
      {isMobile ? (
        "Mobile View"
      ) : (
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
          <Spacer height="60px" />
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
        </Flex>
      )}
    </div>
  );
};

export default Cate1;
