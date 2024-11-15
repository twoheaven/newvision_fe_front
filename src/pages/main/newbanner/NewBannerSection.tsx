import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import Header2Provider from "@/layout/Header2Provider";

import BannerSlider from "./BannerSlider";

const NewBannerSection = () => {
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const isMobile = useIsMobile();

  // 페이지가 처음 로드될 때 로딩 상태를 sessionStorage에서 불러옵니다.
  useEffect(() => {
    const storedLoading = sessionStorage.getItem("loadingState");

    if (storedLoading === "false") {
      setLoading(false); // 이전에 로딩이 끝났다면 바로 로딩을 false로 설정
    } else {
      const timer = setTimeout(() => {
        setLoading(false); // 3초 후 로딩 완료
        sessionStorage.setItem("loadingState", "false"); // 로딩 상태 저장
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <meta
            name="description"
            content="뉴비전교회 메인화면 홈페이지 배너"
          />
        </Helmet>
      </div>

      <Flex justifyContent="center" width="100%">
        <Flex
          width="100%"
          style={{ position: "relative", textAlign: "center" }}
        >
          <div
            style={{
              textAlign: "center",
              overflow: "hidden",
              position: "relative",
              width: "100%",
            }}
          >
            {/* 로딩 화면 */}
            {loading ? (
              <div
                style={{
                  width: "100%",
                  paddingTop: "15.5%", // 로딩 화면 크기 설정
                  paddingBottom: "15.5%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#C3C3C3FF", // 배경색
                }}
              >
                <span>로딩 중...</span> {/* 로딩 텍스트 */}
              </div>
            ) : (
              <BannerSlider /> // 배너 슬라이더
            )}
          </div>

          <Flex
            justifyContent="center"
            width={isMobile ? "100%" : "80%"}
            style={{ position: "absolute" }}
          >
            <Spacer height="5px" />
            <Header2Provider />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default NewBannerSection;
