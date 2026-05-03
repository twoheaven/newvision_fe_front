import { Button, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import useIsMobile from "@/hooks/useIsMobile";

import Fonts from "../../../styles/fonts";
import Category1Component from "./Cate1/Cate1";
import Category2Component from "./Cate1/Cate2";
import Category3Component from "./Cate1/Cate3";
import Category4Component from "./Cate1/Cate4";

const categories = [
  { name: "전체개요", component: Category4Component },
  { name: "성경맥잡기학교", component: Category1Component },
  { name: "기름부음학교", component: Category2Component },
  { name: "요한계시록학교", component: Category3Component },
];

const HolySchoolCategory1 = () => {
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
          <meta name="descripttion" content="김온유 목사 쉐카이나 성령학교" />
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
                  style={{
                    fontFamily:
                      selectedCategoryIndex === index
                        ? Fonts.Bold
                        : Fonts.Regular,
                  }}
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

export default HolySchoolCategory1;
