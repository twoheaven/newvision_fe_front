import { Area, Spacer } from "@dohyun-ko/react-atoms";

import Book from "./book/Book";
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
      <Spacer height={"10px"} />
      <Book />
    </Area>
  );
};

export default MainPage;
