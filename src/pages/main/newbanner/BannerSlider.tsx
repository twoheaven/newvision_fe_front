import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import mainImg1 from "./assets/main1.jpg";
import mainImg2 from "./assets/main2.jpg";
import mainImg3 from "./assets/main3.jpg";

const images = [mainImg1, mainImg2, mainImg3];

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
        width="35"
        height="82"
        viewBox="0 0 35 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.6"
          d="M0.401001 5.37167L30.4409 40.8069L0.401001 76.2421V81.6138L35.001 40.8069L0.401001 0V5.37167Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

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
        width="35"
        height="82"
        viewBox="0 0 35 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.6"
          d="M34.6 76.2421L4.56 40.8069L34.6 5.37167V0L0 40.8069L34.6 81.6138V76.2421Z"
          fill="white"
        />
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
  );
};

export default BannerSlider;
