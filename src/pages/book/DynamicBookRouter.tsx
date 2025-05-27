// DynamicBookRouter.jsx
import { Area, Spacer } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import BookPageHeader from "../../components/pageHeader/BookPageHeader";
import MainPage from "../main/MainPage";
import Holyschool1 from "./bookComponents/detail/BookHolyschool1";
import Holyschool2 from "./bookComponents/detail/BookHolyschool2";
import Holyschool3 from "./bookComponents/detail/BookHolyschool3";
import Salvation1 from "./bookComponents/detail/BookSalvation1";
import Salvation2 from "./bookComponents/detail/BookSalvation2";
import Salvation3 from "./bookComponents/detail/BookSalvation3";
import Good1 from "./bookComponents/detail/Good1";
import Good2 from "./bookComponents/detail/Good2";
import Good3 from "./bookComponents/detail/Good3";

const componentMap: { [key: string]: JSX.Element } = {
  Good1: <Good1 />,
  Good2: <Good2 />,
  Good3: <Good3 />,
  Salvation1: <Salvation1 />,
  Salvation2: <Salvation2 />,
  Salvation3: <Salvation3 />,
  Holyschool1: <Holyschool1 />,
  Holyschool2: <Holyschool2 />,
  Holyschool3: <Holyschool3 />,
  // 필요한 책 이름과 컴포넌트를 여기 추가
};

function DynamicBookRouter() {
  const { label1 } = useParams<{ label1?: string }>();
  const Component =
    label1 && componentMap[label1] ? componentMap[label1] : null;

  return (
    (
      <div style={{ width: "100%", height: "100%" }}>
        <div>
          <Helmet>
            <meta name="descripttion" content="김온유 목사 저서" />
          </Helmet>
        </div>
        <Area>
          <BookPageHeader />
          {Component}
          <Spacer height={"15px"} />
        </Area>
      </div>
    ) || <MainPage />
  );
}

export default DynamicBookRouter;
