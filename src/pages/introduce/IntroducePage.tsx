import { Area, Button, Divider, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import IntroducePageHeader from "@/components/pageHeader/IntroducePageHeader";
import {
  categoryDividerStyle,
  getCategoryButtonStyle,
} from "@/styles/categoryButton";

import Category1Component from "./introComponents/IntroCategory1";
import Category2Component from "./introComponents/IntroCategory2";
import Category3Component from "./introComponents/IntroCategory3";
import Category4Component from "./introComponents/IntroCategory4";
import Category5Component from "./introComponents/IntroCategory5";
import Category6Component from "./introComponents/IntroCategory6";

const categories = [
  { name: "환영합니다", component: Category1Component },
  { name: "목회사명", component: Category2Component },
  { name: "교회비전", component: Category3Component },
  { name: "예배/모임", component: Category4Component },
  { name: "오시는길", component: Category5Component },
  { name: "새가족안내", component: Category6Component },
];

const IntroducePage = () => {
  const location = useLocation();
  const visit1 = location.state?.visit1 ?? 0;
  const visit2 = location.state?.visit2 ?? null;
  const category = location.state?.category;

  // 카테고리에 따른 초기 인덱스 설정
  const getInitialCategoryIndex = () => {
    if (visit1 === "새가족안내" || visit2 === "새가족안내") return 5;
    if (category === "worship") return 3; // 예배/모임
    if (category === "offering") return 3; // 예배/모임의 헌금 정보
    if (category === "location") return 4; // 오시는 길
    return typeof visit1 === "number" && categories[visit1] ? visit1 : 0;
  };

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(
    getInitialCategoryIndex(),
  );

  const handleCategorySelect = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const SelectedComponent = categories[selectedCategoryIndex].component;

  return (
    <>
      <div>
        <Helmet>
          <meta
            name="description"
            content="동탄 뉴비전 교회 김온유 목사 소개"
          />
        </Helmet>
      </div>
      <Area>
        <IntroducePageHeader />
        <Spacer height={"15px"} />
        <Flex
          justifyContent="center"
          gap={"8px"}
          style={{ flexWrap: "wrap", rowGap: "8px" }}
        >
          {categories.map((category, index) => (
            <Flex key={index} alignItems="center" gap={"8px"}>
              <Button
                onClick={() => handleCategorySelect(index)}
                style={getCategoryButtonStyle(selectedCategoryIndex === index)}
              >
                {category.name}
              </Button>
              {index < categories.length - 1 && (
                <span style={categoryDividerStyle}>|</span>
              )}
            </Flex>
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
    </>
  );
};

export default IntroducePage;
