import React, { useEffect } from "react"; // ← useEffect 추가

const NaverCafeBlockMessage = "네이버 카페를 통해서 들어오실 수 있습니다";

const NaverCafeInAppUaPattern = /NAVER\(inapp;\s*cafe/i;

const isGuestAllowedFromNaverCafe = (): boolean => {
  if (typeof window === "undefined") return false;

  if (sessionStorage.getItem("naver_cafe_access") === "1") return true;

  const ua = navigator.userAgent ?? "";
  if (NaverCafeInAppUaPattern.test(ua)) return true;
  return false;
};

type VimeoDetailAccessGateProps = {
  isAuthed: boolean;
  children: React.ReactNode;
};

const VimeoDetailAccessGate = ({
  isAuthed,
  children,
}: VimeoDetailAccessGateProps) => {
  // ↓ 이 useEffect 추가 (isAuthed 상관없이 항상 파라미터 제거)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("from") === "naver_cafe") {
      sessionStorage.setItem("naver_cafe_access", "1");
      params.delete("from");
      const newUrl = `${window.location.pathname}${
        params.toString() ? "?" + params.toString() : ""
      }`;
      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  if (isAuthed) return <>{children}</>;

  const isNaverCafe = isGuestAllowedFromNaverCafe();

  if (!isNaverCafe) {
    return (
      <div
        className="p-8 max-w-2xl mx-auto text-center"
        style={{ fontSize: 16 }}
      >
        {NaverCafeBlockMessage}
      </div>
    );
  }

  return <>{children}</>;
};

export default VimeoDetailAccessGate;
