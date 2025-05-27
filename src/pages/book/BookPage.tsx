import { Area, Button, Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import BookPageHeader from "@/components/pageHeader/BookPageHeader";

import Category1Component from "./bookComponents/cate1/Cate1";
import Category2Component from "./bookComponents/cate2/Cate2";
import Category3Component from "./bookComponents/cate3/Cate3";
import Category4Component from "./bookComponents/cate4/Cate4";

const categories = [
  { name: "전체", component: Category1Component },
  { name: "선한시리즈", component: Category2Component },
  { name: "구원론", component: Category3Component },
  { name: "성령학교교재", component: Category4Component },
];

const BookPage = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleCategorySelect = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const SelectedComponent = categories[selectedCategoryIndex].component;

  return (
    <>
      <div>
        <Helmet>
          <meta name="descripttion" content="김온유 목사 성령학교" />
        </Helmet>
      </div>
      <Area>
        <BookPageHeader />

        <Spacer height={"15px"} />

        <Flex justifyContent="center" gap={"8px"}>
          {categories.map((category, index) => (
            <Button key={index} onClick={() => handleCategorySelect(index)}>
              {category.name}
            </Button>
          ))}
          <Spacer height={"8px"} />
        </Flex>
        <Divider />
        <Flex justifyContent="center" width={"90%"}>
          <Spacer height={"30px"} />
          <SelectedComponent />
        </Flex>

        <Spacer height={"100px"} />
      </Area>
    </>
  );
};

export default BookPage;
