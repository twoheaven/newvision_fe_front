import { Button, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Category1Component from "./Cate1/Cate1";
import Category2Component from "./Cate1/Cate2";
import Category3Component from "./Cate1/Cate3";

const categories = [
  { name: "성경맥잡기학교", component: Category1Component },
  { name: "기름부음학교", component: Category2Component },
  { name: "요한계시록학교", component: Category3Component },
];

const HolySchoolCategory1 = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleCategorySelect = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const SelectedComponent = categories[selectedCategoryIndex].component;

  return (
    <>
      <div>
        <Helmet>
          <meta name="descripttion" content="김온유 목사 쉐카이나 성령학교" />
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

export default HolySchoolCategory1;
