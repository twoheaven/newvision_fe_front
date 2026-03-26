import React from "react";

const NaverCafeHostFragment = "cafe.naver.com";
const NaverCafeBlockMessage =
  "크롬에서 네이버 카페를 통해서 들어오실 수 있습니다";

type VimeoDetailAccessGateProps = {
  isAuthed: boolean;
  children: React.ReactNode;
};

const VimeoDetailAccessGate = ({
  isAuthed,
  children,
}: VimeoDetailAccessGateProps) => {
  if (isAuthed) return <>{children}</>;

  // 네이버 카페로부터 유입한 경우에만 상세(비로그인) 접근 허용
  const referrer = typeof document !== "undefined" ? document.referrer : "";
  const isNaverCafe =
    typeof referrer === "string" &&
    referrer.toLowerCase().includes(NaverCafeHostFragment);

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
