import React from "react";

const NaverCafeHostFragment = "cafe.naver.com";
const NaverCafeBlockMessage = "네이버 카페를 통해서 들어오실 수 있습니다";

/** 네이버 카페 앱(인앱 브라우저) UA 예: ... NAVER(inapp; cafe; 123; 1.2.3) */
const NaverCafeInAppUaPattern = /NAVER\(inapp;\s*cafe/i;

const isGuestAllowedFromNaverCafe = (): boolean => {
  if (typeof window === "undefined") return false;

  // 이번 세션에서 이미 허용된 경우
  if (sessionStorage.getItem("naver_cafe_access") === "1") return true;

  // URL 파라미터 확인 후 즉시 제거
  const params = new URLSearchParams(window.location.search);
  if (params.get("from") === "naver_cafe") {
    sessionStorage.setItem("naver_cafe_access", "1");
    params.delete("from");
    const newUrl = `${window.location.pathname}${
      params.size ? "?" + params.toString() : ""
    }`;
    window.history.replaceState({}, "", newUrl);
    return true;
  }
  // 카페 앱 WebView는 referrer가 비거나 짧게 오는 경우가 많아 UA로 보완
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
  if (isAuthed) return <>{children}</>;

  // 네이버 카페 웹(referrer) 또는 네이버 카페 앱 인앱(UA)에서만 비로그인 접근 허용
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
