import { Area, Spacer } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import Album from "./album/Album";
import Book from "./book/Book";
import Category from "./category/Category";
import NewBannerSection from "./newbanner/NewBannerSection";
import NewsnewfamProvider from "./newsnewfam/NewsnewfamProvider";
import Sermon from "./sermon/Sermon";

const MainPage = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta name="description" content="동탄 뉴비전 교회 홈페이지입니다." />
        </Helmet>
      </div>
      <Area>
        <NewBannerSection />
        <Category />
        <Sermon />
        <Spacer height={"10px"} />
        <Book />
        <NewsnewfamProvider />
        <Album />
      </Area>
    </>
  );
};

export default MainPage;
