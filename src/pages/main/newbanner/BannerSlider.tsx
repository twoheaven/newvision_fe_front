import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import mainImg1 from "./assets/main1.jpg";
import mainImg2 from "./assets/main2.jpg";
import mainImg3 from "./assets/main3.jpg";

const images = [mainImg1, mainImg2, mainImg3];

// 커스텀 Next 버튼
const NextArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        background: "red",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

// 커스텀 Prev 버튼
const PrevArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "red" }}
      >
        <path d="M14.71 16.29a1 1 0 0 1-1.42 0L9 13.41l-4.29 4.29a1 1 0 0 1-1.42-1.42l5-5a1 1 0 0 1 1.42 0l5 5a1 1 0 0 1 0 1.42z" />
        <path d="M14.71 16.29a1 1 0 0 1-1.42 0L9 13.41l-4.29 4.29a1 1 0 0 1-1.42-1.42l5-5a1 1 0 0 1 1.42 0l5 5a1 1 0 0 1 0 1.42z" />
      </svg>
    </div>
  );
};

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
  };

  return (
    <div style={{ width: "100%", margin: "auto", position: "relative" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
