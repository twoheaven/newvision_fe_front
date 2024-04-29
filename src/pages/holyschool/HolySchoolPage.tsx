import { Area, Button, Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import HolySchoolPageHeader from "@/components/pageHeader/HolyschoolPageHeader";

import Category1Component from "./holyschoolComponents/HolySchoolCategory1";
import Category2Component from "./holyschoolComponents/HolySchoolCategory2";

const categories = [
  { name: "쉐카이나 성령학교", component: Category1Component },
  { name: "제자양육코스", component: Category2Component },
];

const HolySchoolPage = () => {
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
        <HolySchoolPageHeader />

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
        <Flex justifyContent="center">
          <Spacer height={"30px"} />
          <SelectedComponent />
        </Flex>
        <Spacer height={"60px"} />

        <Spacer height={"100px"} />
      </Area>
    </>
  );
};

export default HolySchoolPage;
