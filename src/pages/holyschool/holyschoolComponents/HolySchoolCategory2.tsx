import { Button, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";

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
    <Flex justifyContent="center" alignItems="center">
      <Flex justifyContent="center" alignItems="center" gap={"8px"}>
        {categories.map((category, index) => (
          <Button key={index} onClick={() => handleCategorySelect(index)}>
            {category.name}
          </Button>
        ))}
      </Flex>
      <Spacer height={"8px"} />
      <Flex justifyContent="center">
        <SelectedComponent />
      </Flex>
    </Flex>
  );
};

export default HolySchoolCategory2;
