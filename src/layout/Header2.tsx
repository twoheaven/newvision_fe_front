// 필요한 컴포넌트 및 라이브러리 가져오기
import {
  Area,
  Content,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@dohyun-ko/react-atoms";
import { useNavigate } from "react-router-dom";
import { WrapperLink } from "src/components/wrapperLink/WrapperLink";
import Paths from "src/types/paths";
import styled from "styled-components";

import Logo from "@/assets/logo.png";
// 로고 이미지 가져오기
import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

import kakaoLogo from "../assets/kakao-logo.svg";

const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* Set maximum width to 1200px */
  width: 100%; /* Ensure it takes the full width within the maximum */
  margin: 0 auto; /* Center the container horizontally */
`;

// WrapperLink에 스타일 추가
const StyledWrapperLink = styled(WrapperLink)`
  flex: 1; /* 각 WrapperLink가 동일한 너비를 가질 수 있도록 설정 */
  text-align: center; /* 텍스트 가운데 정렬 */
`;

// Header 컴포넌트의 프로퍼티를 정의하는 인터페이스
interface Header2Props {}

// Header를 나타내는 함수형 컴포넌트
const Header2 = ({}: Header2Props) => {
  // 모바일 환경 여부를 확인하는 커스텀 훅 사용
  const isMobile = useIsMobile();
  // React Router의 navigate 훅 사용
  const navigate = useNavigate();

  return (
    // Header 영역
    <Area>
      <Content>
        {/* 두번째 층 시작 */}
        <Spacer height={"5px"} />
        {/* 메인 페이지로 이동하는 링크 */}
        <Flex justifyContent="">
          <Flex>
            <WrapperLink to={Paths.Main}>
              <img src={Logo} alt={"logo"} width={"70px"} />
            </WrapperLink>
          </Flex>
          {/* Flex 컨테이너 - 공간을 벌려주고, 아이템을 가운데 정렬 */}
          {/* 각종 메뉴에 대한 링크 */}
          <Flex>
            <WrapperLink to={Paths.Teams}>
              <Text>공연팀</Text>
            </WrapperLink>
            <Text style={{ color: "#999999" }}>|</Text>
            <WrapperLink to={Paths.Celebrities}>
              <Text>연예인</Text>
            </WrapperLink>
            <Text style={{ color: "#999999" }}>|</Text>
            <WrapperLink to={Paths.Event}>
              <Text>행사</Text>
            </WrapperLink>
            <Text style={{ color: "#999999" }}>|</Text>
            <WrapperLink to={Paths.Party}>
              <Text>파티</Text>
            </WrapperLink>
            <Text style={{ color: "#999999" }}>|</Text>
            <WrapperLink to={Paths.Study}>
              <Text>교육</Text>
            </WrapperLink>
            <Text style={{ color: "#999999" }}>|</Text>
            <WrapperLink to={Paths.Systems}>
              <Text>시스템</Text>
            </WrapperLink>
            <Text style={{ color: "#999999" }}>|</Text>
          </Flex>
        </Flex>
        <Spacer height={"5px"} />
      </Content>

      {/* 가로선 구분자 */}
      <Divider />
    </Area>
  );
};

// Header 컴포넌트 내보내기
export default Header2;
