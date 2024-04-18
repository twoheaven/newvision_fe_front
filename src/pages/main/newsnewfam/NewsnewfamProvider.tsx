import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";

import MobileNewsnewfam from "./MobileNewsnewfam";
import Newsnewfam from "./Newsnewfam";

const NewsnewfamProvider = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        <Helmet>
          <title>교회소식 새가족등록</title>
          <meta name="description" content="메인 화면 교회소식 새가족등록" />
        </Helmet>
      </div>
      {isMobile ? <MobileNewsnewfam /> : <Newsnewfam />}
    </>
  );
};

export default NewsnewfamProvider;
