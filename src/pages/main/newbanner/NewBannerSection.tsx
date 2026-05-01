import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import { onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import Skeleton from "@/components/common/Skeleton";
import { LAYOUT } from "@/constants/layout";
import useIsMobile from "@/hooks/useIsMobile";
import Header2Provider from "@/layout/Header2Provider";
import { auth } from "@/note/firebase/config";

import BannerSlider from "./BannerSlider";
import { MainBannerItem, deleteMainBanner, fetchMainBanners, uploadMainBanner } from "./bannerService";

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
  const [user, setUser] = useState<User | null>(null);
  const [banners, setBanners] = useState<MainBannerItem[]>([]);
  const [bannerTitle, setBannerTitle] = useState("");
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const isMobile = useIsMobile();

  const loadBanners = async () => {
    try {
      const items = await fetchMainBanners();
      setBanners(items);
    } catch (error) {
      console.error(error);
      setErrorMessage("메인 배너를 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    loadBanners();
  }, []);

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

  const onUploadBanner = async () => {
    if (!user) {
      setErrorMessage("로그인한 사용자만 배너를 업로드할 수 있습니다.");
      return;
    }

    if (!bannerTitle.trim()) {
      setErrorMessage("배너 제목을 입력해주세요.");
      return;
    }

    if (!bannerFile) {
      setErrorMessage("배너 이미지를 선택해주세요.");
      return;
    }

    try {
      setIsSaving(true);
      setErrorMessage("");
      setSuccessMessage("");
      await uploadMainBanner(bannerTitle.trim(), bannerFile);
      setBannerTitle("");
      setBannerFile(null);
      await loadBanners();
      setSuccessMessage("메인 배너가 추가되었습니다.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "배너 업로드 중 오류가 발생했습니다.";
      setErrorMessage(message);
    } finally {
      setIsSaving(false);
    }
  };

  const onDeleteBanner = async (id: string) => {
    if (!user) {
      setErrorMessage("로그인한 사용자만 배너를 삭제할 수 있습니다.");
      return;
    }
    const ok = window.confirm("선택한 배너를 삭제하시겠습니까?");
    if (!ok) return;
    try {
      setIsSaving(true);
      setErrorMessage("");
      setSuccessMessage("");
      await deleteMainBanner(id);
      await loadBanners();
      setSuccessMessage("메인 배너가 삭제되었습니다.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "배너 삭제 중 오류가 발생했습니다.";
      setErrorMessage(message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="뉴비전교회 메인화면 홈페이지 배너" />
      </Helmet>

      <Flex justifyContent="center" width="100%">
        <BannerContainer>
          {user && (
            <div
              style={{
                position: "absolute",
                top: isMobile ? "8px" : "14px",
                left: "12px",
                zIndex: 3,
                display: "flex",
                gap: "8px",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                borderRadius: "8px",
                padding: "6px 8px",
                flexWrap: "wrap",
                maxWidth: isMobile ? "90%" : "70%",
              }}
            >
              <input
                type="text"
                value={bannerTitle}
                onChange={(event) => setBannerTitle(event.target.value)}
                placeholder="배너 제목"
                style={{ border: "1px solid #d1d5db", borderRadius: "6px", padding: "6px 8px" }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(event) => setBannerFile(event.target.files?.[0] ?? null)}
              />
              <button
                type="button"
                onClick={onUploadBanner}
                disabled={isSaving}
                style={{
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  backgroundColor: "#111827",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {isSaving ? "처리 중..." : "배너 추가"}
              </button>
            </div>
          )}
          <div style={{ width: "100%", overflow: "hidden" }}>
            {loading ? (
              <LoadingContainer>
                <Skeleton width="60%" height="20px" />
              </LoadingContainer>
            ) : (
              <BannerSlider banners={banners} isAdmin={Boolean(user)} onDeleteBanner={onDeleteBanner} />
            )}
          </div>

          <HeaderContainer isMobile={isMobile}>
            <Spacer height={LAYOUT.MOBILE.SPACING.SMALL} />
            <Header2Provider />
          </HeaderContainer>
        </BannerContainer>
      </Flex>
      {(errorMessage || successMessage) && (
        <Flex justifyContent="center" style={{ marginTop: "8px" }}>
          <span style={{ color: errorMessage ? "#dc2626" : "#16a34a", fontSize: "14px" }}>
            {errorMessage || successMessage}
          </span>
        </Flex>
      )}
    </>
  );
};

export default React.memo(NewBannerSection);
