import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import LeftArrow from "@/assets/leftarrow.png";
import RightArrow from "@/assets/rightarrow.png";
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
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보이는 책의 인덱스

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

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <Content>
      <Flex
        alignItems="flex-start"
        flexDirection="column"
        justifyContent="center"
      >
        <Text size={isMobile ? "24px" : "34px"}>김온유 목사 저서 안내</Text>
        <Flex alignItems="center" justifyContent="center" width={"100%"}>
          <Box
            style={
              isMobile
                ? {
                    width: "100%",
                  }
                : {
                    width: "100%",
                  }
            }
            height={""}
            justifyContent="center"
            alignItems="center"
          >
            {isMobile && (
              <>
                {/* 모바일 환경에서만 보이는 이전 버튼 */}
                <button onClick={handlePrevClick}>
                  <img
                    src={LeftArrow}
                    style={{
                      width: "50px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </button>
              </>
            )}
            <Flex
              alignItems="center"
              justifyContent={isMobile ? "flex-start" : "center"} // 모바일 환경에서는 시작점부터 정렬
              gap={isMobile ? "20px" : "50px"} // 모바일 환경에서는 간격 없앰
            >
              {books.map((book, index) => (
                <EnlargedImageWrapper
                  key={index}
                  style={{
                    display: isMobile
                      ? index === currentIndex
                        ? "flex"
                        : "none"
                      : "flex",
                    // 모바일 환경에서 현재 보이는 책만 보여지도록 설정
                  }}
                >
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    style={
                      isMobile
                        ? {
                            margin: "20px 0",
                            flexShrink: 0, // 모바일 환경에서 축소되지 않도록 설정
                          }
                        : {
                            margin: "30px 0",
                          }
                    }
                  >
                    <img
                      style={{
                        width: `${isMobile ? boxWidth / 5 : boxWidth / 6}px`,
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
            {isMobile && (
              <>
                {/* 모바일 환경에서만 보이는 다음 버튼 */}
                <button onClick={handleNextClick}>
                  <img
                    src={RightArrow}
                    style={{
                      width: "50px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </button>
              </>
            )}
          </Box>
        </Flex>
        <Spacer height={isMobile ? "20px" : "50px"} />
      </Flex>
    </Content>
  );
};

export default Book;
