import { Area, Spacer } from "@dohyun-ko/react-atoms";

import Album from "./album/Album";
import Book from "./book/Book";
import Category from "./category/Category";
import NewBannerSection from "./newbanner/NewBannerSection";
import NewsnewfamProvider from "./newsnewfam/NewsnewfamProvider";
import Sermon from "./sermon/Sermon";

const MainPage = () => {
  return (
    <Area>
      <NewBannerSection />
      <Category />
      <Sermon />
      <Spacer height={"10px"} />
      <Book />
      <NewsnewfamProvider />
      <Album />
    </Area>
  );
};

export default MainPage;
