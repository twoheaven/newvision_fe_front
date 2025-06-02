import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Paths from "src/types/paths";
import styled from "styled-components";

import { LAYOUT } from "@/constants/layout";
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
  category?: string;
}

const StyledButton = styled.button<{
  backgroundImage?: string;
  borderRadius?: string;
}>`
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url('${backgroundImage}');
  `}

  ${({ borderRadius }) =>
    borderRadius &&
    `
    border-radius: ${borderRadius};
  `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const categories: CategoryProps[] = [
  {
    name: "예배안내",
    backgroundImage: worship,
    path: Paths.Introduce,
    lego: 3,
    category: "worship",
  },
  {
    name: "온라인 동역 헌금",
    backgroundImage: online,
    path: Paths.Introduce,
    lego: 3,
    category: "offering",
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
    category: "location",
  },
];

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
  }, []);

  const buttonWidth = isMobile
    ? (windowWidth * 1.4) / 4.2
    : (windowWidth * 0.8) / 5;

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="예배안내 온라인동역헌금 성령학교안내 오시는길"
        />
      </Helmet>

      <Spacer
        height={
          isMobile ? LAYOUT.MOBILE.SPACING.LARGE : LAYOUT.DESKTOP.SPACING.LARGE
        }
      />
      <Flex
        justifyContent="center"
        gap={
          isMobile ? LAYOUT.MOBILE.SPACING.SMALL : LAYOUT.DESKTOP.SPACING.MEDIUM
        }
      >
        {categories.map((category, index) => (
          <Link
            to={category.path}
            state={{ lego: category.lego, category: category.category }}
            key={index}
          >
            <StyledButton
              borderRadius="30px"
              backgroundImage={category.backgroundImage}
              style={{
                width: `${buttonWidth}px`,
                height: `${0.58 * buttonWidth}px`,
              }}
              aria-label={category.name}
            />
          </Link>
        ))}
      </Flex>
      <Spacer
        height={
          isMobile ? LAYOUT.MOBILE.SPACING.LARGE : LAYOUT.DESKTOP.SPACING.LARGE
        }
      />
    </>
  );
};

export default React.memo(Category);
