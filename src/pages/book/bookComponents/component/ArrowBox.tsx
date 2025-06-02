import { Flex, Text } from "@dohyun-ko/react-atoms";

import useIsMobile from "../../../../hooks/useIsMobile";
import Fonts from "../../../../styles/fonts";

const ArrowBox = ({ label1, label2 }: { label1: string; label2: string }) => {
  const isMobile = useIsMobile();
  return (
    <div>
      <Flex alignItems="end" gap="12px" justifyContent="center">
        {/* Vector - gradient arrow box */}
        <div
          style={{
            position: "relative",
            right: "-12px",

            padding: "8px 16px",
            background: "#DDA6A6",
            color: "#fff",
            display: "inline-block",
          }}
        >
          <Text font={Fonts.Bold} size={"20px"} color={"#FFFFFF"}>
            {label1}
          </Text>

          {/* 화살표 꼬리 */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-23px",
              transform: "translateY(-50%)",
              width: "0",
              height: "0px",
              borderTop: "23px solid transparent",
              borderBottom: "23px solid transparent",
              borderLeft: "23px solid #DDA6A6",
            }}
          />
        </div>

        {/* 선 (Vector line) */}

        <div
          style={{
            width: "calc(60%)",
            height: "0px",
            border: "2px solid #DEA6A6",
          }}
        >
          <Text
            font={Fonts.Medium}
            size={"20px"}
            color={"#000000"}
            style={{
              textAlign: "initial",
              transform: "translateY(-120%)",
              marginLeft: "30px",
              display: isMobile ? "none" : "block",
            }}
          >
            {label2}
          </Text>
        </div>
      </Flex>
    </div>
  );
};
export default ArrowBox; // ArrowBox 컴포넌트 내보내기
