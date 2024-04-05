import useIsMobile from "@/hooks/useIsMobile";

import Header2 from "./Header2";
import MobileHeader2 from "./MobileHeader2";

const Header2Provider = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHeader2 /> : <Header2 />;
};

export default Header2Provider;
