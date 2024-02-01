import { Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paths from "src/types/paths";
import styled from "styled-components";

import useIsMobile from "@/hooks/useIsMobile";

import online from "./assets/online.png";
import school from "./assets/school.png";
import way from "./assets/way.png";
import worship from "./assets/worship.png";

const categories = [
  {
    name: "예배안내",
    backgroundImage: worship,
    path: Paths.Introduce,
  },
  {
    name: "온라인 동역 헌금",
    backgroundImage: online,
    path: Paths.Sermon,
  },
  {
    name: "성령학교 안내",
    backgroundImage: school,
    path: Paths.Missionary,
  },
  {
    name: "오시는 길",
    backgroundImage: way,
    path: Paths.Book,
  },
];

const StyledButton = styled.button<{
  backgroundImage?: string;
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

  /* borderRadius prop을 사용하여 모서리를 둥글게 설정 */
  ${({ borderRadius }) =>
    borderRadius &&
    `
    border-radius: ${borderRadius};
  `}
`;

const Category = () => {
  const isMobile = useIsMobile();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 최초 한 번만 실행

  const buttonWidth = isMobile
    ? (windowWidth * 1) / 5
    : (windowWidth * 0.8) / 5;

  return (
    <Content>
      {/* 카테고리 버튼들을 포함한 Flex 컴포넌트 */}
      <Spacer height={isMobile ? "10px" : "50px"} />
      <Flex justifyContent="center" gap={isMobile ? "3px" : "20px"}>
        {categories.map((category, index) => (
          <Link to={category.path} key={index}>
            <StyledButton
              borderRadius={isMobile ? "10px" : "20px"}
              backgroundImage={category.backgroundImage}
              style={{
                width: `${buttonWidth}px`,
                height: `${0.6 * buttonWidth}px`,
              }}
            ></StyledButton>
          </Link>
        ))}
      </Flex>
    </Content>
  );
};

export default Category;
