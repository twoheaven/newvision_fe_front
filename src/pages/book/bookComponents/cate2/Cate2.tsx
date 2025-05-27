import useIsMobile from "@/hooks/useIsMobile";

const Cate2 = () => {
  const isMobile = useIsMobile();
  return <div>{isMobile ? "Mobile View" : "Desktop View2"}</div>;
};
export default Cate2; // Cate1 컴포넌트 내보내기
