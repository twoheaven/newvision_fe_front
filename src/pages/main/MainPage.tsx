import { Area, Spacer } from "@dohyun-ko/react-atoms";

import Book from "./book/Book";
import Category from "./category/Category";
import NewBannerSection from "./newbanner/NewBannerSection";
import Newsnewfam from "./newsnewfam/Newsnewfam";
import Sermon from "./sermon/Sermon";

const MainPage = () => {
  return (
    <Area>
      <NewBannerSection />
      <Category />
      <Sermon />
      <Spacer height={"10px"} />
      <Book />
      <Newsnewfam />
    </Area>
  );
};

export default MainPage;
