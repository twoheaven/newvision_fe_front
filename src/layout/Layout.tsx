// 토스트 알림에 사용되는 스타일을 불러옵니다.
import "react-toastify/dist/ReactToastify.css";

// 외부 라이브러리 및 모듈에서 필요한 컴포넌트 및 유틸리티를 불러옵니다.
import { Flex, MyThemeProvider } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import colorSet from "src/styles/color-set";
import styled, { keyframes } from "styled-components";

// 애플리케이션에서 사용되는 커스텀 훅 및 상태를 불러옵니다.
import useIsMobile from "@/hooks/useIsMobile";

// 레이아웃 구조를 위한 컴포넌트를 불러오고 사용합니다.
import Footer from "./Footer";
import Header1 from "./Header1";
import MobileHeader1 from "./MobileHeader1";
import MobileProvider from "./MobileProvider";

// 페이드 인 애니메이션을 위한 키프레임 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 모달 배경의 컴포넌트 속성을 위한 인터페이스
interface ModalBackdropProps {
  children?: React.ReactNode;
}

// 페이드 인 애니메이션을 적용한 모달 배경의 스타일드 컴포넌트
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: ${(props: ModalBackdropProps) => (props.children ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  z-index: 10;

  background-color: rgba(0, 0, 0, 0.28);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

// 메인 레이아웃 컴포넌트
const Layout = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>동탄 뉴비전 교회 김온유 목사</title>
          <meta name="descripttion" content="동탄 뉴비전 교회 김온유 목사" />
        </Helmet>
      </div>
      {/*색상 세트를 사용한 테마 프로바이더*/}
      <MyThemeProvider
        theme={{
          ...colorSet,
        }}
      >
        {/* 모바일 특정 기능을 처리하기 위한 모바일 프로바이더 */}
        <MobileProvider>
          {/* 전체 레이아웃을 위한 주요 플렉스 컨테이너 */}
          <Flex
            flexDirection={"column"}
            style={{
              minHeight: "100vh",
            }}
          >
            {/* 모바일 여부에 따라 헤더를 조건부 렌더링 */}
            <Header1Wrapper />

            {/* 중첩된 라우트를 렌더링하기 위한 아웃렛 */}
            <Outlet />

            {/* 푸터 컴포넌트 */}
            <Footer />

            {/* 토스트 알림을 표시하기 위한 토스트 컨테이너 */}
            <ToastContainer />
          </Flex>
        </MobileProvider>
      </MyThemeProvider>
    </>
  );
};

// 모바일과 데스크톱 헤더 중 어떤 것을 선택할지 결정하는 컴포넌트
const Header1Wrapper = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileHeader1 /> : <Header1 />;
};

// 메인 레이아웃 컴포넌트를 기본 내보내기로 설정
export default Layout;
