import { Area, Spacer } from "@dohyun-ko/react-atoms";

import Category from "./category/Category";
import NewBannerSection from "./newbanner/NewBannerSection";

const MainPage = () => {
  return (
    <Area>
      <NewBannerSection />
      <Category />
      <Spacer height={"50px"} />
    </Area>
  );
};

export default MainPage;
