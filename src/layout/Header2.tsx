// 필요한 컴포넌트 및 라이브러리 가져오기
import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { WrapperLink } from "src/components/wrapperLink/WrapperLink";
import Paths from "src/types/paths";
import styled from "styled-components";

import Logo from "@/assets/logo.png";
import useIsMobile from "@/hooks/useIsMobile";

// Flex 컨테이너 스타일을 직접 지정
const StyledFlexContainer = styled(Flex)`
  display: flex;
  width: 130%; /* 전체 너비 사용 */
`;

// StyledText 스타일드 컴포넌트를 Header2 내부에서 정의
const StyledText = styled(Text)`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 900; /* 원하는 굵기로 조절 */
  color: white; /* 원하는 색상으로 조절 */
`;

// Header를 나타내는 함수형 컴포넌트
const Header2 = () => {
  const isMobile = useIsMobile();

  return (
    // Header 영역
    <Content>
      {/* 두번째 층 시작 */}
      <Spacer height={isMobile ? "3px" : "5px"} />
      {/* 메인 페이지로 이동하는 링크 */}
      <StyledFlexContainer justifyContent="space-between" alignItems="center">
        <Flex>
          <WrapperLink to={Paths.Main}>
            <img src={Logo} alt={"logo"} width={isMobile ? "75px" : "180px"} />
          </WrapperLink>
        </Flex>
        {/* Flex 컨테이너 - 공간을 벌려주고, 아이템을 가운데 정렬 */}
        {/* 각종 메뉴에 대한 링크 */}
        <Flex gap={isMobile ? "6px" : "20px"}>
          {[
            { path: Paths.Introduce, label: "소개" },
            { path: Paths.Sermon, label: "말씀" },
            { path: Paths.HolySchool, label: "성령학교" },
            { path: Paths.News, label: "소식" },
            { path: Paths.Book, label: "저서" },
            { path: Paths.Missionary, label: "선교사역" },
          ].map(({ path, label }) => (
            <WrapperLink to={path} key={path}>
              <StyledText size={isMobile ? "12px" : "24px"}>{label}</StyledText>
            </WrapperLink>
          ))}
        </Flex>
      </StyledFlexContainer>
      <Spacer height={"5px"} />
    </Content>
  );
};

// Header 컴포넌트 내보내기
export default Header2;
