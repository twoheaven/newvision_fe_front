import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import Skeleton from "@/components/common/Skeleton";
import { LAYOUT } from "@/constants/layout";
import useIsMobile from "@/hooks/useIsMobile";
import Header2Provider from "@/layout/Header2Provider";

import BannerSlider from "./BannerSlider";

const LoadingContainer = styled.div`
  width: 100%;
  padding-top: 15.5%;
  padding-bottom: 15.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      background-color: #f5f5f5;
    }
    50% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: #f5f5f5;
    }
  }
`;

const BannerContainer = styled(Flex)`
  position: relative;
  text-align: center;
  width: 100%;
  overflow: hidden;
`;

const HeaderContainer = styled(Flex)<{ isMobile: boolean }>`
  position: absolute;
  justify-content: center;
  width: ${({ isMobile }) => (isMobile ? "100%" : "80%")};
`;

const NewBannerSection = () => {
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const storedLoading = sessionStorage.getItem("loadingState");

    if (storedLoading === "false") {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("loadingState", "false");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="뉴비전교회 메인화면 홈페이지 배너" />
      </Helmet>

      <Flex justifyContent="center" width="100%">
        <BannerContainer>
          <div style={{ width: "100%", overflow: "hidden" }}>
            {loading ? (
              <LoadingContainer>
                <Skeleton width="60%" height="20px" />
              </LoadingContainer>
            ) : (
              <BannerSlider />
            )}
          </div>

          <HeaderContainer isMobile={isMobile}>
            <Spacer height={LAYOUT.MOBILE.SPACING.SMALL} />
            <Header2Provider />
          </HeaderContainer>
        </BannerContainer>
      </Flex>
    </>
  );
};

export default React.memo(NewBannerSection);
