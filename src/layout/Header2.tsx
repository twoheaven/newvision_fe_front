// 필요한 컴포넌트 및 라이브러리 가져오기
import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { WrapperLink } from "src/components/wrapperLink/WrapperLink";
import Paths from "src/types/paths";
import styled from "styled-components";

import Logo from "@/assets/logo.png";

// Flex 컨테이너 스타일을 직접 지정
const StyledFlexContainer = styled(Flex)`
  display: flex;
  width: 130%; /* 전체 너비 사용 */
`;

// 스타일드 컴포넌트를 만들어서 Text 컴포넌트 스타일 변경
const StyledText = styled(Text)`
  font-size: 24px; /* 원하는 크기로 조절 */
  color: white; /* 원하는 색상으로 조절 */
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 900; /* 원하는 굵기로 조절 */
`;

// Header 컴포넌트의 프로퍼티를 정의하는 인터페이스
interface Header2Props {}

// Header를 나타내는 함수형 컴포넌트
const Header2 = ({}: Header2Props) => {
  return (
    // Header 영역
    <Content>
      {/* 두번째 층 시작 */}
      <Spacer height={"5px"} />
      {/* 메인 페이지로 이동하는 링크 */}
      <StyledFlexContainer justifyContent="space-between" alignItems="center">
        <Flex>
          <WrapperLink to={Paths.Main}>
            <img src={Logo} alt={"logo"} width={"180px"} />
          </WrapperLink>
        </Flex>
        {/* Flex 컨테이너 - 공간을 벌려주고, 아이템을 가운데 정렬 */}
        {/* 각종 메뉴에 대한 링크 */}
        <Flex gap={"20px"}>
          <WrapperLink to={Paths.Teams}>
            <StyledText>소개</StyledText>
          </WrapperLink>
          <WrapperLink to={Paths.Celebrities}>
            <StyledText>말씀</StyledText>
          </WrapperLink>
          <WrapperLink to={Paths.Event}>
            <StyledText>성령학교</StyledText>
          </WrapperLink>
          <WrapperLink to={Paths.Party}>
            <StyledText>소식</StyledText>
          </WrapperLink>
          <WrapperLink to={Paths.Study}>
            <StyledText>저서</StyledText>
          </WrapperLink>
          <WrapperLink to={Paths.Systems}>
            <StyledText>선교사역</StyledText>
          </WrapperLink>
        </Flex>
      </StyledFlexContainer>
      <Spacer height={"5px"} />
    </Content>
  );
};

// Header 컴포넌트 내보내기
export default Header2;
