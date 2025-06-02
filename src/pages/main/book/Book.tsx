import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Box from "@/components/box/Box";
import useIsMobile from "@/hooks/useIsMobile";
import book1 from "@/pages/book/bookComponents/assets/book1.webp";
import book2 from "@/pages/book/bookComponents/assets/book2.webp";
import book3 from "@/pages/book/bookComponents/assets/book3.webp";
import Paths from "@/types/paths";

const EnlargedImageWrapper = styled.div`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const ArrowButton = styled.button`
  background: #e2e2e2;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #d1d1d1;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #666;
  }
`;

const Book = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [boxWidth, setBoxWidth] = useState(
    isMobile ? window.innerWidth : window.innerWidth * 0.8,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);

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

  const handleBookClick = () => {
    if (!isMobile) {
      navigate(Paths.Book);
    }
  };

  const handleBookTap = () => {
    if (isMobile) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTapTime;

      if (tapLength < 500 && tapLength > 0) {
        navigate(Paths.Book);
      }

      setLastTapTime(currentTime);
    }
  };

  return (
    <>
      <div>
        <Helmet>
          <meta name="description" content="메인 화면 김온유 목사 저서" />
        </Helmet>
      </div>

      <Content>
        <Flex
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="center"
        >
          <Text size={isMobile ? "24px" : "34px"}>김온유 목사 저서 안내</Text>
          <Flex alignItems="center" justifyContent="center" width={"100%"}>
            <Box
              style={{
                width: "100%",
              }}
              justifyContent={isMobile ? "space-between" : "center"}
              alignItems="center"
            >
              {isMobile && (
                <ArrowButton onClick={handlePrevClick}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </ArrowButton>
              )}
              <Flex
                alignItems="center"
                justifyContent={isMobile ? "flex-start" : "center"}
                gap={"15px"}
              >
                {books.map((book, index) => (
                  <EnlargedImageWrapper
                    key={index}
                    style={{
                      overflow: "hidden",
                      display: isMobile
                        ? index === currentIndex
                          ? "flex"
                          : "none"
                        : "flex",
                      cursor: "pointer",
                    }}
                    onClick={handleBookClick}
                    onTouchStart={handleBookTap}
                  >
                    <Flex
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      style={
                        isMobile
                          ? {
                              margin: "20px 0",
                              flexShrink: 0,
                            }
                          : {
                              margin: "30px 0",
                            }
                      }
                    >
                      <img
                        style={{
                          width: `${
                            isMobile ? boxWidth / 3.5 : boxWidth / 6
                          }px`,
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
                <ArrowButton onClick={handleNextClick}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                  </svg>
                </ArrowButton>
              )}
            </Box>
          </Flex>
          <Spacer height={isMobile ? "20px" : "50px"} />
        </Flex>
      </Content>
    </>
  );
};

export default Book;
