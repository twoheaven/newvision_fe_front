import { Button, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";
import { getCategoryButtonStyle } from "@/styles/categoryButton";

import Category1Component from "./Cate2/Cate1";
import Category2Component from "./Cate2/Cate2";

const categories = [
  { name: "리더양육훈련", component: Category1Component },
  { name: "새가족양육훈련", component: Category2Component },
];

const HolySchoolCategory2 = () => {
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
          <meta name="descripttion" content="김온유 목사 제자양육코스" />
        </Helmet>
      </div>
      <Flex
        width={"100%"}
        style={{
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
          padding: isMobile ? "0 16px" : undefined,
          boxSizing: "border-box",
        }}
      >
        <Flex flexDirection="column">
          <Flex
            justifyContent={isMobile ? "center" : "flex-start"}
            alignItems="center"
          >
            <Flex
              gap={"20px"}
              style={{
                flexWrap: isMobile ? "wrap" : undefined,
                justifyContent: isMobile ? "center" : undefined,
                rowGap: isMobile ? "12px" : undefined,
              }}
            >
              {categories.map((category, index) => (
                <Button
                  key={index}
                  onClick={() => handleCategorySelect(index)}
                  style={getCategoryButtonStyle(
                    selectedCategoryIndex === index,
                  )}
                >
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
