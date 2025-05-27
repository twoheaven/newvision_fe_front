import useIsMobile from "@/hooks/useIsMobile";

const Cate3 = () => {
  const isMobile = useIsMobile();
  return <div>{isMobile ? "Mobile View" : "Desktop View3"}</div>;
};
export default Cate3; // Cate1 컴포넌트 내보내기
