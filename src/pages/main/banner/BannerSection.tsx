import { Area, Button, Content, Flex, Text } from "@dohyun-ko/react-atoms";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
// @ts-ignore
import { toast } from "react-toastify";
import Paths from "src/types/paths";

import { deleteBanner, getBanners, postBanner } from "@/apis/banner-api";
import { WrapperLink } from "@/components/wrapperLink/WrapperLink";
import useIsMobile from "@/hooks/useIsMobile";
import Header2 from "@/layout/Header2";
import colorSet from "@/styles/color-set";
import Fonts from "@/styles/fonts";
import QueryKeys from "@/types/queryKeys";
import { isLoggedIn } from "@/utils/utils";

import kakaoLogo from "./assets/kakao-logo.svg";

// BannerSection 컴포넌트의 프로퍼티 정의
interface BannerSectionProps {}

// BannerSection 컴포넌트 정의
const BannerSection = ({}: BannerSectionProps) => {
  // 배너 데이터를 가져오기 위한 React Query 훅 사용
  const { data } = useQuery([QueryKeys.getBanners], getBanners);
  // 배너 섹션의 배경색을 동적으로 변경하기 위한 상태
  const [backgroundColor, setBackgroundColor] = useState<string>("white");
  // 슬라이드 인덱스를 관리하는 상태
  const [index, setIndex] = useState<number>(0);
  // 새로운 배너 이미지를 저장하는 상태
  const [newBannerImage, setNewBannerImage] = useState<File>();
  // 새로운 배너 배경색을 저장하는 상태
  const [newBannerBackColor, setNewBannerBackColor] = useState<string>("white");

  // React Router의 navigate 훅을 사용하여 페이지 이동 관리
  const navigate = useNavigate();
  // 모바일 환경 여부를 확인하는 커스텀 훅 사용
  const isMobile = useIsMobile();
  // React Query의 Query Client 인스턴스 생성
  const queryClient = useQueryClient();

  // 배너 생성 및 삭제에 사용되는 React Query Mutation 훅들 생성
  const createBanner = useMutation(postBanner);
  const deleteBannerMutation = useMutation(deleteBanner);

  // 배너 추가 함수
  const handleBannerAdd = () => {
    // 새로운 배너 이미지 또는 배경색이 없으면 함수 종료
    if (!newBannerImage || !newBannerBackColor) {
      return;
    }

    // 배너 생성 Mutation 실행
    createBanner.mutate(
      {
        file: newBannerImage,
        backColor: newBannerBackColor,
      },
      {
        onSuccess: () => {
          // 배너 추가 성공 시 상태 초기화 및 토스트 메시지 표시
          setNewBannerImage(undefined);
          setNewBannerBackColor("white");
          toast.success("배너가 추가되었습니다.");
          // 캐시된 배너 데이터를 다시 불러오기
          queryClient.invalidateQueries([QueryKeys.getBanners]);
          queryClient.invalidateQueries([QueryKeys.getBanner]);
        },
        onError: () => {
          // 배너 추가 실패 시 에러 메시지 표시
          toast.error("배너 추가에 실패했습니다.");
        },
      },
    );
  };

  // 배너 삭제 함수
  const handleBannerDelete = (id: number) => {
    // 배너 삭제 Mutation 실행
    deleteBannerMutation.mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          // 배너 삭제 성공 시 토스트 메시지 표시 및 캐시된 데이터 다시 불러오기
          toast.success("배너가 삭제되었습니다.");
          queryClient.invalidateQueries([QueryKeys.getBanners]);
          queryClient.invalidateQueries([QueryKeys.getBanner]);
        },
        onError: () => {
          // 배너 삭제 실패 시 에러 메시지 표시
          toast.error("배너 삭제에 실패했습니다.");
        },
      },
    );
  };

  // 5초마다 슬라이드 인덱스 변경하는 useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (data?.length || 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  // JSX 반환
  return (
    <>
      {/* 배너 섹션 영역 */}
      <Area
        backgroundColor={
          (data && data.length > index && data[index].backcolor) || "white"
        }
      >
        <Content>
          {data && data.length > 0 && (
            <Flex justifyContent={"center"} width={"100%"}>
              {data.map((banner) => (
                <Flex
                  key={banner.id}
                  width={"100%"}
                  style={{
                    position: "relative",
                  }}
                >
                  {/* 배너 이미지 표시 */}
                  <img
                    width={"100%"}
                    src={banner.storedFilePath}
                    alt={banner.originalFileName}
                    style={{
                      pointerEvents: "none",
                      width: "100%",
                      minWidth: "100%",
                    }}
                  />

                  {/* 배너 하단에 링크 버튼들 표시 */}
                  <Flex
                    width={"100%"}
                    style={{
                      position: "absolute",
                    }}
                  >
                    <Header2 />
                  </Flex>
                </Flex>
              ))}
            </Flex>
          )}
        </Content>
      </Area>
      {isLoggedIn() && (
        <Area>
          <Content>
            {/* 배너 추가 입력 폼 및 버튼 */}
            <Flex justifyContent={"center"} gap={"10px"}>
              <Text>배너 이미지(jpg, png)</Text>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setNewBannerImage(e.target.files[0]);
                  }
                }}
              />

              <Text>배경색</Text>
              <input
                type="color"
                onChange={(e) => setNewBannerBackColor(e.target.value)}
              />

              <Button
                backgroundColor={colorSet.primary}
                borderRadius={"4px"}
                style={{
                  padding: "4px 10px",
                }}
                onClick={handleBannerAdd}
              >
                <Text>배너 추가</Text>
              </Button>
            </Flex>
          </Content>
        </Area>
      )}
    </>
  );
};

export default BannerSection;
