import useIsMobile from "@/hooks/useIsMobile";

import MobileNewsnewfam from "./MobileNewsnewfam";
import Newsnewfam from "./Newsnewfam";

const NewsnewfamProvider = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileNewsnewfam /> : <Newsnewfam />;
};

export default NewsnewfamProvider;
