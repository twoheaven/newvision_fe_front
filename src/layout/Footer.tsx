// 외부 소스에서 필요한 컴포넌트 및 에셋 가져오기
import {
  Area,
  Content,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@dohyun-ko/react-atoms";

import colorSet from "@/styles/color-set";

// Footer 컴포넌트의 프로퍼티를 정의하는 인터페이스
interface FooterProps {}

// 푸터를 나타내는 함수형 컴포넌트
const Footer = ({}: FooterProps) => {
  return (
    // 푸터 영역
    <Area>
      {/* 가로선 구분자 */}
      <Divider />

      {/* 세로 간격 */}
      <Spacer height={"20px"} />

      {/* 내용 섹션 - 회사 정보 및 소셜 미디어 링크 */}
      <Content>
        {/* 항목 간 간격을 두고 정렬하는 Flex 컨테이너 */}
        <Flex justifyContent={"center"}>
          {/* 왼쪽 열 - 회사 정보 */}
          <Flex
            flexDirection={"column"}
            style={{
              color: colorSet.textGray,
            }}
          >
            <Text size={"14px"}>
              경기도 화성시 동탄문화센터로 7-3 (반송동), 거산프라자 10층 전관
            </Text>
            <Text size={"14px"}>
              Tel. 031.613.0105 [Fax 겸용] / 010.4864.1433
            </Text>
            <Spacer height={"5px"} />
            <Text size={"14px"}>
              Copyright (c) 2023 뉴비전교회 All rights reserved.
            </Text>
          </Flex>
        </Flex>
      </Content>

      {/* 세로 간격 */}
      <Spacer height={"20px"} />
    </Area>
  );
};

// Footer 컴포넌트 내보내기
export default Footer;
