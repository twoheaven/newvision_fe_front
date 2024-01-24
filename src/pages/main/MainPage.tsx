import { Spacer } from "@dohyun-ko/react-atoms";

import Category from "./category/Category";
import NewBannerSection from "./newbanner/NewBannerSection";

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  return (
    <>
      <NewBannerSection />
      <Category />
      <Spacer height={"50px"} />
    </>
  );
};

export default MainPage;
