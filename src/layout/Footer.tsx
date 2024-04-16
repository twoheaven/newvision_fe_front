// 외부 소스에서 필요한 컴포넌트 및 에셋 가져오기
import {
  Area,
  Content,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@dohyun-ko/react-atoms";

import useIsMobile from "@/hooks/useIsMobile";

import logo from "../assets/logo.png";

// 푸터를 나타내는 함수형 컴포넌트
const Footer = () => {
  const isMobile = useIsMobile();
  return (
    // 푸터 영역
    <Area backgroundColor="#494949">
      {/* 가로선 구분자 */}
      <Divider />

      {/* 세로 간격 */}
      <Spacer height={isMobile ? "30px" : "55px"} />

      {/* 내용 섹션 - 회사 정보 및 소셜 미디어 링크 */}
      <Content>
        {/* 항목 간 간격을 두고 정렬하는 Flex 컨테이너 */}
        <Flex
          justifyContent={"center"}
          gap={isMobile ? "30px" : "50px"}
          alignItems="center"
        >
          {/* 왼쪽 열 - 회사 정보 */}
          <Flex>
            <img
              src={logo}
              style={{
                width: "182px",
                height: "38px",
              }}
            />
          </Flex>
          <Flex flexDirection={"column"}>
            <Text color={"white"} size={"14px"}>
              경기도 화성시 동탄문화센터로 7-3 (반송동), 거산프라자 10층 전관
            </Text>
            <Text color={"white"} size={"14px"}>
              Tel. 031-613-0105 [Fax 겸용] / 010-4864-1433
            </Text>
            <Spacer height={"5px"} />
            <Text color={"white"} size={"14px"}>
              Copyright (c) 2023 뉴비전교회 All rights reserved.
            </Text>
          </Flex>
        </Flex>
      </Content>

      {/* 세로 간격 */}
      <Spacer height={isMobile ? "20px" : "50px"} />
    </Area>
  );
};

// Footer 컴포넌트 내보내기
export default Footer;
