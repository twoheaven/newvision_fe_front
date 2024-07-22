import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import mainImg1 from "./assets/main1.jpg";
import mainImg2 from "./assets/main2.jpg";
import mainImg3 from "./assets/main3.jpg";

const images = [mainImg1, mainImg2, mainImg3];

// 커스텀 Next 버튼
const NextArrow = (props: { onClick: undefined }) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        right: "10px",
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
        <path d="M8.293 16.293a1 1 0 0 1 1.414 0L15 13.414l5.293 5.293a1 1 0 0 1-1.414 1.414L15 15.828l-5.293 5.293a1 1 0 0 1-1.414-1.414L13.586 14 8.293 8.707a1 1 0 0 1 0-1.414z" />
      </svg>
    </div>
  );
};

// 커스텀 Prev 버튼
const PrevArrow = (props: { onClick: undefined }) => {
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
        <path d="M15.707 16.293a1 1 0 0 0-1.414 0L9 13.414 3.707 18.707a1 1 0 0 0 1.414 1.414L9 15.828l5.293 5.293a1 1 0 0 0 1.414-1.414L10.414 14l5.293-5.293a1 1 0 0 0-1.414-1.414z" />
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
