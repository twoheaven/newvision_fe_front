import { Area, Spacer } from "@dohyun-ko/react-atoms";

import Category from "./category/Category";
import NewBannerSection from "./newbanner/NewBannerSection";
import Sermon from "./sermon/Sermon";

const MainPage = () => {
  return (
    <Area>
      <NewBannerSection />
      <Category />
      <Spacer height={"50px"} />
      <Sermon />
    </Area>
  );
};

export default MainPage;
