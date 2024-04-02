import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Box from "@/components/box/Box";
import useIsMobile from "@/hooks/useIsMobile";
import book1 from "@/pages/book/assets/book1.webp";
import book2 from "@/pages/book/assets/book2.webp";
import book3 from "@/pages/book/assets/book3.webp";

const EnlargedImageWrapper = styled.div`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Book = () => {
  const isMobile = useIsMobile();
  const [boxWidth, setBoxWidth] = useState(
    isMobile ? window.innerWidth : window.innerWidth * 0.8,
  );

  useEffect(() => {
    const handleResize = () => {
      setBoxWidth(isMobile ? window.innerWidth : window.innerWidth * 0.8);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const books = [
    { image: book2, title: "01. 선한 동역자 프로젝트" },
    { image: book3, title: "02. 선한 청지기 프로젝트" },
    { image: book1, title: "03. 선한말 습관 프로젝트" },
  ];

  return (
    <Content>
      <Flex
        alignItems="flex-start"
        flexDirection="column"
        justifyContent="center"
      >
        <Text size={isMobile ? "24px" : "34px"}>김온유 목사 저서 안내</Text>
        <Flex alignItems="center" justifyContent="center">
          <Box
            style={{
              width: `${boxWidth / 1.1}px`,
            }}
            height={""}
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              gap={isMobile ? "20px" : "50px"}
            >
              {books.map((book, index) => (
                <EnlargedImageWrapper key={index}>
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    style={
                      isMobile
                        ? {
                            margin: "20px 0", // 위아래로 20px의 margin 추가
                          }
                        : {
                            margin: "30px 0", // 위아래로 20px의 margin 추가
                          }
                    }
                  >
                    <img
                      style={{
                        width: `${boxWidth / 6}px`,
                        transition: "transform 0.3s ease-in-out",
                      }}
                      src={book.image}
                      alt="Book Cover"
                    />
                    <Text
                      size={isMobile ? "14px" : "20px"}
                      style={{ fontWeight: "bold" }}
                    >
                      {book.title}
                    </Text>
                  </Flex>
                </EnlargedImageWrapper>
              ))}
            </Flex>
          </Box>
        </Flex>
        <Spacer height={isMobile ? "20px" : "50px"} />
      </Flex>
    </Content>
  );
};

export default Book;
