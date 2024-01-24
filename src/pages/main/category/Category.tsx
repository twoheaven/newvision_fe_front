import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { Link } from "react-router-dom";
import Paths from "src/types/paths";
import styled from "styled-components";

import useIsMobile from "@/hooks/useIsMobile";

import online from "./assets/online.png";
import school from "./assets/school.png";
import way from "./assets/way.png";
import worship from "./assets/worship.png";

// Flex 컨테이너 스타일을 직접 지정
const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const categories = [
  {
    name: "예배안내",
    backgroundImage: worship,
    path: Paths.Teams,
  },
  {
    name: "온라인 동역 헌금",
    backgroundImage: online,
    path: Paths.Celebrities,
  },
  {
    name: "성령학교 안내",
    backgroundImage: school,
    path: Paths.Systems,
  },
  {
    name: "오시는 길",
    backgroundImage: way,
    path: Paths.Study,
  },
];

// StyledButton 정의
const StyledButton = styled.button<{
  backgroundImage?: string;
  backgroundColor?: string;
  borderRadius?: string;
}>`
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  /* 이미지에 따라 다른 배경 스타일을 설정 */
  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url('${backgroundImage}');
  `}

  /* backgroundColor prop을 사용하여 배경색 설정 */
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
    background-color: ${backgroundColor};
  `}

  /* borderRadius prop을 사용하여 모서리를 둥글게 설정 */
  ${({ borderRadius }) =>
    borderRadius &&
    `
    border-radius: ${borderRadius};
  `}

  height: 133px; /* 데스크탑 환경에서의 높이 */
  width: 220px;
  /* 모바일 환경일 때의 스타일 */
  @media (max-width: 600px) {
    width: 80px;
    height: 40px;
  }
`;

// Category 컴포넌트 정의
const Category = () => {
  // 모바일 환경 여부를 확인하는 커스텀 훅 사용
  const isMobile = useIsMobile();

  return (
    <>
      <Area>
        <Content>
          {/* 카테고리 버튼들을 포함한 Flex 컴포넌트 */}
          <Spacer height={isMobile ? "10px" : "30px"} />
          <Flex justifyContent="center">
            <StyledFlexContainer>
              {categories.map((category, index) => (
                <Link to={category.path} key={index}>
                  {/* Link를 사용하여 페이지로 이동합니다. */}
                  <StyledButton
                    backgroundColor="transparent"
                    borderRadius={isMobile ? "10px" : "20px"}
                    backgroundImage={category.backgroundImage}
                  ></StyledButton>
                </Link>
              ))}
            </StyledFlexContainer>
          </Flex>
        </Content>
      </Area>
    </>
  );
};

// Category 컴포넌트를 내보냅니다.
export default Category;
