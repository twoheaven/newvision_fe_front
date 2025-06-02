import { Area, Button, Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import BookPageHeader from "@/components/pageHeader/BookPageHeader";

import useIsMobile from "../../hooks/useIsMobile";
import Fonts from "../../styles/fonts";
import Category1Component from "./bookComponents/cate/Cate1";
import Category2Component from "./bookComponents/cate/Cate2";
import Category3Component from "./bookComponents/cate/Cate3";
import Category4Component from "./bookComponents/cate/Cate4";

const categories = [
  { name: "전체", component: Category1Component },
  { name: "선한시리즈", component: Category2Component },
  { name: "구원론", component: Category3Component },
  { name: "성령학교교재", component: Category4Component },
];

const BookPage = () => {
  const isMobile = useIsMobile();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleCategorySelect = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const SelectedComponent = categories[selectedCategoryIndex].component;

  return (
    <>
      <div>
        <Helmet>
          <meta name="descripttion" content="김온유 목사 저서" />
        </Helmet>
      </div>
      <Area>
        <BookPageHeader />

        <Spacer height={"15px"} />

        <Flex justifyContent="center" gap={"8px"}>
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => handleCategorySelect(index)}
              style={{
                fontFamily:
                  selectedCategoryIndex === index ? Fonts.Bold : Fonts.Regular,
              }}
            >
              {category.name}
            </Button>
          ))}
          <Spacer height={"8px"} />
        </Flex>
        <Divider />
        <Flex justifyContent="center" width={isMobile ? "100%" : "90%"}>
          <Spacer height={"30px"} />
          <SelectedComponent />
        </Flex>

        <Spacer height={"100px"} />
      </Area>
    </>
  );
};

export default BookPage;
