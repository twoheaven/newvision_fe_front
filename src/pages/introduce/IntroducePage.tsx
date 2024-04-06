import { Area, Button, Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";

import IntroducePageHeader from "@/components/pageHeader/IntroducePageHeader";

import Category1Component from "./introComponents/IntroCategory1";
import Category2Component from "./introComponents/IntroCategory2";
import Category3Component from "./introComponents/IntroCategory3";
import Category4Component from "./introComponents/IntroCategory4";
import Category5Component from "./introComponents/IntroCategory5";
import Category6Component from "./introComponents/IntroCategory6";
import Category7Component from "./introComponents/IntroCategory7";

const categories = [
  { name: "환영합니다", component: Category1Component },
  { name: "목회사명", component: Category2Component },
  { name: "교회비전", component: Category3Component },
  { name: "예배/모임", component: Category4Component },
  { name: "오시는길", component: Category5Component },
  { name: "새가족안내", component: Category6Component },
  { name: "자주묻는질문", component: Category7Component },
];

const IntroducePage = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleCategorySelect = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const SelectedComponent = categories[selectedCategoryIndex].component;

  return (
    <Area>
      <IntroducePageHeader />
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
      <Flex justifyContent="center" gap={"8px"}>
        <Spacer height={"30px"} />
        <SelectedComponent />
      </Flex>
      <Spacer height={"60px"} />
    </Area>
  );
};

export default IntroducePage;
