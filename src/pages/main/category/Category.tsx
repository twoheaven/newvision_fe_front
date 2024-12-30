import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Paths from "src/types/paths";
import styled from "styled-components";

import useIsMobile from "@/hooks/useIsMobile";

import online from "./assets/online.webp";
import school from "./assets/school.webp";
import way from "./assets/way.webp";
import worship from "./assets/worship.webp";

interface CategoryProps {
  name: string;
  backgroundImage: string;
  path: string;
  lego: number;
}

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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* 기본 배경 스타일 */
  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url('${backgroundImage}');
  `}

  /* 둥근 모서리 */
  ${({ borderRadius }) =>
    borderRadius &&
    `
    border-radius: ${borderRadius};
  `}

  /* Hover 애니메이션 */
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  }

  /* 클릭 시 애니메이션 */
  &:active {
    transform: scale(0.95);
  }
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
    ? (windowWidth * 1.4) / 4.2
    : (windowWidth * 0.8) / 5;

  const categories: CategoryProps[] = [
    {
      name: "예배안내",
      backgroundImage: worship,
      path: Paths.Introduce,
      lego: 3,
    },
    {
      name: "온라인 동역 헌금",
      backgroundImage: online,
      path: Paths.Introduce,
      lego: 3,
    },
    {
      name: "성령학교 안내",
      backgroundImage: school,
      path: Paths.HolySchool,
      lego: 0,
    },
    {
      name: "오시는 길",
      backgroundImage: way,
      path: Paths.Introduce,
      lego: 4,
    },
  ];

  return (
    <>
      <div>
        <Helmet>
          <meta
            name="description"
            content="예배안내 온라인동역헌금 성령학교안내 오시는길"
          />
        </Helmet>
      </div>

      {/* 카테고리 버튼들을 포함한 Flex 컴포넌트 */}
      <Spacer height={isMobile ? "20px" : "50px"} />
      <Flex justifyContent="center" gap={isMobile ? "3px" : "20px"}>
        {categories.map((category, index) => (
          <Link to={category.path} state={category.lego} key={index}>
            <StyledButton
              borderRadius={"30px"}
              backgroundImage={category.backgroundImage}
              style={{
                width: `${buttonWidth}px`,
                height: `${0.58 * buttonWidth}px`,
              }}
            />
          </Link>
        ))}
      </Flex>
      <Spacer height={isMobile ? "20px" : "50px"} />
    </>
  );
};

export default Category;
