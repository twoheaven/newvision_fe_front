import { Area, Button, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { deleteBanner, getBanners, postBanner } from "@/apis/banner-api";
import useIsMobile from "@/hooks/useIsMobile";
import Header2 from "@/layout/Header2";
import colorSet from "@/styles/color-set";
import QueryKeys from "@/types/queryKeys";
import { isLoggedIn } from "@/utils/utils";

import mainImg from "./assets/mainpageimg.png";

// BannerSection 컴포넌트의 프로퍼티 정의
interface NewBannerSectionProps {}

// BannerSection 컴포넌트 정의
const NewBannerSection = ({}: NewBannerSectionProps) => {
  // 배너 데이터를 가져오기 위한 React Query 훅 사용
  const { data } = useQuery([QueryKeys.getBanners], getBanners);

  // JSX 반환
  return (
    <>
      {/* 배너 섹션 영역 */}
      {data && data.length > 0 && (
        <Flex justifyContent={"center"} width={"100%"}>
          <Flex
            width={"100%"}
            style={{
              position: "relative",
            }}
          >
            {/* 배너 이미지 표시 */}
            <img
              width={"100%"}
              src={mainImg}
              alt={"mainimg"}
              style={{
                pointerEvents: "none",
                width: "100%",
                minWidth: "100%",
              }}
            />

            {/* 헤더 */}
            <Flex
              justifyContent="center"
              width={"80%"}
              style={{
                position: "absolute",
              }}
            >
              <Spacer height={"5px"} />
              <Header2 />
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default NewBannerSection;
