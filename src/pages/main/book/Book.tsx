import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  touch-action: pan-y;
`;

const CarouselTrack = styled.div<{
  $isDragging: boolean;
  $isTransitioning: boolean;
}>`
  display: flex;
  gap: 15px;
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  transition: ${({ $isTransitioning }) =>
    $isTransitioning
      ? "transform 0.7s cubic-bezier(0.33, 1, 0.68, 1)"
      : "none"};
  user-select: none;
  will-change: transform;
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
  const getBoxWidth = useCallback(
    () => (isMobile ? window.innerWidth : window.innerWidth * 0.8),
    [isMobile],
  );
  const [boxWidth, setBoxWidth] = useState(getBoxWidth);

  const itemWidth = isMobile ? boxWidth / 3.5 : boxWidth / 6;
  const gapWidth = 15;
  const moveDistance = itemWidth + gapWidth;
  const totalDistance = moveDistance * bookdatas.length;

  const [currentTranslate, setCurrentTranslate] = useState(-totalDistance);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const translateRef = useRef(currentTranslate);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTranslateRef = useRef(currentTranslate);
  const hasDraggedRef = useRef(false);
  const shouldBlockClickRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setBoxWidth(getBoxWidth());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getBoxWidth]);

  const displayBooks = useMemo(
    () => [...bookdatas, ...bookdatas, ...bookdatas],
    [],
  );

  const normalizeTranslate = useCallback(
    (translate: number): number => {
      if (!totalDistance) {
        return translate;
      }

      let normalizedTranslate = translate;

      while (normalizedTranslate <= -totalDistance * 2) {
        normalizedTranslate += totalDistance;
      }
      while (normalizedTranslate > -totalDistance) {
        normalizedTranslate -= totalDistance;
      }

      return normalizedTranslate;
    },
    [totalDistance],
  );

  useEffect(() => {
    translateRef.current = currentTranslate;
  }, [currentTranslate]);

  useEffect(() => {
    const nextTranslate = -totalDistance;

    setIsTransitioning(false);
    translateRef.current = nextTranslate;
    setCurrentTranslate(nextTranslate);

    const frameId = window.requestAnimationFrame(() => {
      setIsTransitioning(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [totalDistance]);

  useEffect(() => {
    if (isDragging) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setIsTransitioning(true);
      setCurrentTranslate((prev) => {
        const nextTranslate = prev - moveDistance;
        translateRef.current = nextTranslate;
        return nextTranslate;
      });
    }, 3600);

    return () => window.clearInterval(interval);
  }, [isDragging, moveDistance]);

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>,
  ) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    const normalizedTranslate = normalizeTranslate(translateRef.current);

    if (Math.abs(normalizedTranslate - translateRef.current) <= 0.5) {
      return;
    }

    setIsTransitioning(false);
    translateRef.current = normalizedTranslate;
    setCurrentTranslate(normalizedTranslate);

    window.requestAnimationFrame(() => {
      setIsTransitioning(true);
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartTranslateRef.current = translateRef.current;
    hasDraggedRef.current = false;
    setIsDragging(true);
    setIsTransitioning(false);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }

    const dragDistance = event.clientX - dragStartXRef.current;
    const nextTranslate = normalizeTranslate(
      dragStartTranslateRef.current + dragDistance,
    );

    if (Math.abs(dragDistance) > 6) {
      hasDraggedRef.current = true;
    }

    if (
      Math.abs(nextTranslate - (dragStartTranslateRef.current + dragDistance)) >
      0.5
    ) {
      dragStartTranslateRef.current = nextTranslate - dragDistance;
    }

    translateRef.current = nextTranslate;
    setCurrentTranslate(nextTranslate);
  };

  const finishDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    isDraggingRef.current = false;
    setIsDragging(false);

    if (!moveDistance) {
      return;
    }

    if (hasDraggedRef.current) {
      shouldBlockClickRef.current = true;
      window.setTimeout(() => {
        shouldBlockClickRef.current = false;
      }, 0);
    }

    const snappedTranslate =
      Math.round(translateRef.current / moveDistance) * moveDistance;

    setIsTransitioning(true);
    translateRef.current = snappedTranslate;
    setCurrentTranslate(snappedTranslate);
  };

  const handleBookClick = () => {
    if (shouldBlockClickRef.current) {
      shouldBlockClickRef.current = false;
      return;
    }

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
              <CarouselContainer
                onPointerCancel={finishDragging}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={finishDragging}
                style={{ flex: 1 }}
              >
                <CarouselTrack
                  $isDragging={isDragging}
                  $isTransitioning={isTransitioning}
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    transform: `translateX(${currentTranslate}px)`,
                  }}
                >
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
                          draggable={false}
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
