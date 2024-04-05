// 필요한 컴포넌트 및 라이브러리 가져오기
import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { WrapperLink } from "src/components/wrapperLink/WrapperLink";
import Paths from "src/types/paths";
import styled from "styled-components";

import Logo from "@/assets/logo.png";

// Flex 컨테이너 스타일을 직접 지정
const StyledFlexContainer = styled(Flex)`
  display: flex;
  width: 95%;
`;

// StyledText 스타일드 컴포넌트를 Header2 내부에서 정의
const StyledText = styled(Text)`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold; /* 원하는 굵기로 조절 */
  color: white; /* 원하는 색상으로 조절 */
`;

// Header를 나타내는 함수형 컴포넌트
const MobileHeader2 = () => {
  return (
    // Header 영역
    <>
      <Spacer height={"3px"} />
      {/* 메인 페이지로 이동하는 링크 */}
      <StyledFlexContainer justifyContent="space-between" alignItems="center">
        <Flex>
          <WrapperLink to={Paths.Main}>
            <img src={Logo} alt={"logo"} width={"75px"} />
          </WrapperLink>
        </Flex>
        {/* Flex 컨테이너 - 공간을 벌려주고, 아이템을 가운데 정렬 */}
        {/* 각종 메뉴에 대한 링크 */}
        <Flex gap={"6px"}>
          {[
            { path: Paths.Introduce, label: "소개" },
            { path: Paths.Sermon, label: "말씀" },
            { path: Paths.HolySchool, label: "성령학교" },
            { path: Paths.News, label: "소식" },
            { path: Paths.Book, label: "저서" },
            { path: Paths.Missionary, label: "선교사역" },
          ].map(({ path, label }) => (
            <WrapperLink to={path} key={path}>
              <StyledText size={"12px"}>{label}</StyledText>
            </WrapperLink>
          ))}
        </Flex>
      </StyledFlexContainer>
      <Spacer height={"5px"} />
    </>
  );
};

// Header 컴포넌트 내보내기
export default MobileHeader2;
