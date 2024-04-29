import { Button, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Category1Component from "./Cate2/Cate1";
import Category2Component from "./Cate2/Cate2";

const categories = [
  { name: "리더양육훈련", component: Category1Component },
  { name: "새가족양육훈련", component: Category2Component },
];

const HolySchoolCategory2 = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleCategorySelect = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const SelectedComponent = categories[selectedCategoryIndex].component;

  return (
    <>
      <div>
        <Helmet>
          <meta name="descripttion" content="김온유 목사 제자양육코스" />
        </Helmet>
      </div>
      <Flex width={"80%"} style={{ maxWidth: "700px" }}>
        <Flex flexDirection="column">
          <Flex justifyContent="flex-start" alignItems="center">
            <Flex gap={"20px"}>
              {categories.map((category, index) => (
                <Button key={index} onClick={() => handleCategorySelect(index)}>
                  {category.name}
                </Button>
              ))}
            </Flex>
          </Flex>
          <Spacer height={"50px"} />
          <Flex justifyContent="center" alignItems="center">
            <SelectedComponent />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HolySchoolCategory2;
