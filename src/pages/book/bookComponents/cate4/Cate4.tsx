import useIsMobile from "@/hooks/useIsMobile";

const Cate4 = () => {
  const isMobile = useIsMobile();
  return <div>{isMobile ? "Mobile View" : "Desktop View4"}</div>;
};
export default Cate4; // Cate1 컴포넌트 내보내기
