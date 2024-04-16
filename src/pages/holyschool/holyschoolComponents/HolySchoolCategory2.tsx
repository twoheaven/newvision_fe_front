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
  );
};

export default HolySchoolCategory2;
