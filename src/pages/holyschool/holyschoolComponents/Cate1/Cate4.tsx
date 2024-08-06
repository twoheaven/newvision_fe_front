import { Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { Helmet } from "react-helmet-async";

import Fonts from "@/styles/fonts";

import img from "../asset/성령학교_전체개요.jpg";

const Cate4 = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="김온유 목사 성경 맥잡기 학교 전체 개요"
        />
      </Helmet>
      <Content>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          style={{ transform: "translateX(-20%)" }}
        >
          <Text size={"24px"} font={Fonts.Bold}>
            성령학교 전체개요
          </Text>
          <Spacer height={"5px"} />
          <Text size={"13px"}>뉴비전교회의 비전을 안내드립니다.</Text>
          <img src={img} width={"140%"} alt="성령학교 전체 개요" />
        </Flex>
      </Content>
    </>
  );
};

export default Cate4;
