import "@/IntroPage.css";

import { Area, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import IntroButton1 from "@/assets/introButton (1).png";
import IntroButton2 from "@/assets/introButton (2).png";
import IntroButton3 from "@/assets/introButton (3).png";
import WhiteLogo from "@/assets/whitelogo.png";
import Line from "@/components/line/Line";
import useIsMobile from "@/hooks/useIsMobile";
import Paths from "@/types/paths";

const IntroPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Area
      className="intro-container"
      style={{
        overflow: "hidden",
        alignContent: "center",
      }}
    >
      <Flex justifyContent="center">
        <Flex flexDirection="column" alignItems="center">
          <img
            src={WhiteLogo}
            alt={"newvisionlogo"}
            width={isMobile ? "" : "150px"}
            height={isMobile ? "0px" : "138px"}
          ></img>
          <Text size={isMobile ? "35px" : "80px"} color={"white"}>
            N E W V I S I O N
          </Text>
        </Flex>
        <Line
          style={{
            width: "90%",
            maxWidth: "1200px",
          }}
        />
        <Spacer height={"20px"} />
        <Flex width={"100%"} alignItems="" flexDirection="column">
          <Link to={Paths.Main}>
            <img
              src={IntroButton1}
              alt={"IntroButton1"}
              style={
                isMobile
                  ? {
                      maxWidth: `${windowWidth * 0.8}px`,
                    }
                  : {
                      maxWidth: "471px",
                    }
              }
            />
          </Link>
          <a href="https://www.youtube.com/@kimonyou153">
            <img
              src={IntroButton2}
              alt={"IntroButton2"}
              style={
                isMobile
                  ? {
                      maxWidth: `${windowWidth * 0.7}px`,
                    }
                  : {
                      maxWidth: "371px",
                    }
              }
            />
          </a>
          <a href="https://litt.ly/new_vision_church">
            <img
              src={IntroButton3}
              alt={"IntroButton3"}
              style={
                isMobile
                  ? {
                      maxWidth: `${windowWidth * 0.7}px`,
                    }
                  : {
                      maxWidth: "371px",
                    }
              }
            />
          </a>
        </Flex>
      </Flex>
    </Area>
  );
};

export default IntroPage;
