import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import styled from "styled-components";

import OptimizedImage from "@/components/common/OptimizedImage";
import { LAYOUT } from "@/constants/layout";
import useIsMobile from "@/hooks/useIsMobile";

import mainImg1 from "./assets/main1.jpg";
import mainImg2 from "./assets/main2.jpg";
import mainImg3 from "./assets/main3.jpg";

const images = [mainImg1, mainImg2, mainImg3];

const ArrowButton = styled.div<{ isNext?: boolean }>`
  display: block;
  position: absolute;
  ${({ isNext }) => (isNext ? "right: 10px" : "left: 10px")};
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 35px;
    height: 82px;
    fill: white;
  }
`;

const NextArrow = (props: { onClick: undefined }) => {
  const { onClick } = props;
  return (
    <ArrowButton isNext onClick={onClick}>
      <svg viewBox="0 0 35 82" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.401001 5.37167L30.4409 40.8069L0.401001 76.2421V81.6138L35.001 40.8069L0.401001 0V5.37167Z" />
      </svg>
    </ArrowButton>
  );
};

const PrevArrow = (props: { onClick: undefined }) => {
  const { onClick } = props;
  return (
    <ArrowButton onClick={onClick}>
      <svg viewBox="0 0 35 82" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.6 76.2421L4.56 40.8069L34.6 5.37167V0L0 40.8069L34.6 81.6138V76.2421Z" />
      </svg>
    </ArrowButton>
  );
};

const BannerSlider = () => {
  const isMobile = useIsMobile();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: isMobile ? <></> : <NextArrow onClick={undefined} />,
    prevArrow: isMobile ? <></> : <PrevArrow onClick={undefined} />,
    lazyLoad: "ondemand" as const,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <OptimizedImage
            src={image}
            alt={`메인 배너 ${index + 1}`}
            style={{
              width: "100%",
              height: isMobile
                ? `${LAYOUT.MOBILE.BANNER_HEIGHT}px`
                : LAYOUT.DESKTOP.BANNER_HEIGHT,
              objectFit: isMobile ? "cover" : "contain",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
