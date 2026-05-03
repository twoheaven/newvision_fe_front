import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Box from "@/components/box/Box";
import useIsMobile from "@/hooks/useIsMobile";
import bookdatas from "@/pages/book/bookComponents/data/bookdatas";
import Paths from "@/types/paths";

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 15px;
  transition: transform 0.8s ease-in-out;
`;

const BookItemWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Book = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentTranslate, setCurrentTranslate] = useState(() => {
    // 초기값을 음수로 설정하여 첫 책이 중앙에 위치하도록 함
    const itemWidth = isMobile
      ? window.innerWidth / 3.5
      : (window.innerWidth * 0.8) / 6;
    const gapWidth = 15;
    return -(itemWidth + gapWidth) * 3;
  });
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

  const itemWidth = isMobile ? boxWidth / 3.5 : boxWidth / 6;
  const gapWidth = 15;
  const moveDistance = itemWidth + gapWidth;
  const totalDistance = moveDistance * bookdatas.length;

  // 책 배열 앞뒤에 3개씩 복제본 추가 (양쪽 끝에 공간 생성)
  const displayBooks = [
    ...bookdatas.slice(-3),
    ...bookdatas,
    ...bookdatas.slice(0, 3),
  ];

  // 위치를 정규화: 루프 처리
  const normalizeTranslate = (translate: number): number => {
    // 처음 3개 복제본(-moveDistance * 3)과 끝 3개 복제본 사이에서 순환
    if (translate <= -moveDistance * 3 - totalDistance) {
      return translate + totalDistance;
    }
    if (translate > -moveDistance * 3) {
      return translate - totalDistance;
    }
    return translate;
  };

  // 자동 회전 effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTranslate((prev) => {
        let newTranslate = prev - moveDistance;
        return normalizeTranslate(newTranslate);
      });
    }, 4000); // 4초마다 다음 책으로 이동

    return () => clearInterval(interval);
  }, [moveDistance]);

  // currentTranslate 변경시 DOM 업데이트
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  }, [currentTranslate]);

  const handleBookClick = () => {
    navigate(Paths.Book);
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
              justifyContent="center"
              alignItems="center"
            >
              <CarouselContainer style={{ flex: 1 }}>
                <CarouselTrack ref={trackRef}>
                  {displayBooks.map((book, index) => (
                    <BookItemWrapper
                      key={index}
                      onClick={handleBookClick}
                      style={{
                        width: isMobile
                          ? `${boxWidth / 3.5}px`
                          : `${boxWidth / 6}px`,
                      }}
                    >
                      <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{
                          margin: isMobile ? "20px 0" : "30px 0",
                        }}
                      >
                        <img
                          style={{
                            width: "100%",
                            aspectRatio: "3 / 4",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                          src={book.img}
                          alt={book.label2}
                        />
                        <Text
                          size={isMobile ? "12px" : "14px"}
                          style={{
                            fontWeight: "bold",
                            marginTop: "8px",
                            textAlign: "center",
                          }}
                        >
                          {book.label2}
                        </Text>
                      </Flex>
                    </BookItemWrapper>
                  ))}
                </CarouselTrack>
              </CarouselContainer>
            </Box>
          </Flex>
          <Spacer height={isMobile ? "20px" : "50px"} />
        </Flex>
      </Content>
    </>
  );
};

export default Book;
