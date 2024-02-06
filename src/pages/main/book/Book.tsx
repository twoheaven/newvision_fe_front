import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Box from "@/components/box/Box";
import useIsMobile from "@/hooks/useIsMobile";
import book1 from "@/pages/book/assets/book1.png";
import book2 from "@/pages/book/assets/book2.png";
import book3 from "@/pages/book/assets/book3.png";

interface EnlargedImageProps {
  isHovered: boolean;
}

const EnlargedImageWrapper = styled.div<EnlargedImageProps>`
  transition: transform 0.3s ease-in-out;

  ${({ isHovered }) =>
    isHovered &&
    `
    transform: scale(1.2);
  `}
`;

const Book = () => {
  const isMobile = useIsMobile();
  const [boxWidth, setBoxWidth] = useState(
    isMobile ? window.innerWidth : window.innerWidth * 0.8,
  );
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setBoxWidth(window.innerWidth * 0.8);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex
      alignItems="flex-start"
      flexDirection="column"
      justifyContent="center"
    >
      <Text size={"34px"}>김온유 목사 저서 안내</Text>
      <Flex alignItems="center" justifyContent="center">
        <Box
          style={{ width: `${boxWidth}px` }}
          height={"350px"}
          justifyContent="center"
          alignItems="center"
        >
          <Flex alignItems="center" justifyContent="center" gap={"20px"}>
            <EnlargedImageWrapper
              isHovered={isHovered1}
              onMouseOver={() => setIsHovered1(true)}
              onMouseOut={() => setIsHovered1(false)}
            >
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  style={{
                    width: `${boxWidth / 6}px`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={book2}
                  alt="Book Cover"
                />
                <Text style={{ fontWeight: "bold" }}>
                  01. 선한 동역자 프로젝트
                </Text>
              </Flex>
            </EnlargedImageWrapper>
            <EnlargedImageWrapper
              isHovered={isHovered2}
              onMouseOver={() => setIsHovered2(true)}
              onMouseOut={() => setIsHovered2(false)}
            >
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  style={{
                    width: `${boxWidth / 6}px`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={book3}
                  alt="Book Cover"
                />
                <Text style={{ fontWeight: "bold" }}>
                  02. 선한 청지기 프로젝트
                </Text>
              </Flex>
            </EnlargedImageWrapper>
            <EnlargedImageWrapper
              isHovered={isHovered3}
              onMouseOver={() => setIsHovered3(true)}
              onMouseOut={() => setIsHovered3(false)}
            >
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  style={{
                    width: `${boxWidth / 6}px`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={book1}
                  alt="Book Cover"
                />
                <Text style={{ fontWeight: "bold" }}>
                  03. 선한말 습관 프로젝트
                </Text>
              </Flex>
            </EnlargedImageWrapper>
          </Flex>
        </Box>
      </Flex>
      <Spacer height={"50px"} />
    </Flex>
  );
};

export default Book;
