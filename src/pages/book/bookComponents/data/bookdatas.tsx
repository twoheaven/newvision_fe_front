import bookimg1 from "../assets/book1.webp";
import bookimg2 from "../assets/book2.webp";
import bookimg3 from "../assets/book3.webp";
import bookimg4 from "../assets/구원론_책표지.jpg"; // 구원론 책 이미지
import bookimg7 from "../assets/성경의맥잡기_책표지.jpg"; // 성령학교 교재 책 이미지
// 책 이미지 데이터 배열

const bookdatas = [
  {
    name: "선한시리즈1",
    img: bookimg1,
    label1: "Good1",
    label2: "제1권 『 선한말 습관 프로젝트 』",
    label3: "하나님 나라 백성들의 '예수님 언어' 사용하기!",
    label4:
      "저자:김온유목사\n페이지 및 크기 : 92page / 120*170mm\n*개별 판매하지 않습니다",
  },
  {
    name: "선한시리즈2",
    img: bookimg2,
    label1: "Good2",
    label2: "제2권 『 선한 동역자 프로젝트 』",
    label3: "교회 안에서 하나님 나라의 '권위와 질서'를 회복하라!",
    label4:
      "저자:김온유목사\n페이지 및 크기 : 66page / 120*170mm\n*개별 판매하지 않습니다",
  },
  {
    name: "선한시리즈3",
    img: bookimg3,
    label1: "Good3",
    label2: "제3권 『 선한 청지기 프로젝트 』",
    label3: "하나님 나라의 성경적 '재정 원리'",
    label4:
      "저자:김온유목사\n페이지 및 크기 : 180page / 120*170mm\n*개별 판매하지 않습니다",
  },
  {
    name: "구원론1",
    img: bookimg4,
    label1: "Salvation1",
    label2: "『 재림전 개혁해야 할 진리 1탄 』",
    label3: "잘못된 구원론 올바르게 알기!",
    label4: "재림전 개혁해야 할 진리 시리즈의 첫 번째 책!",
  },
  {
    name: "구원론2",
    img: bookimg4,
    label1: "Salvation2",
    label2: "『 재림전 개혁해야 할 진리 2탄 』",
    label3: "그리스도의 심판대, 온전히 이해하기",
    label4: "재림전 개혁해야 할 진리 시리즈의 두 번째 책!",
  },
  {
    name: "구원론3",
    img: bookimg4,
    label1: "Salvation3",
    label2: "『 재림전 개혁해야 할 진리 3탄 』",
    label3: "하나님의 우선 순위로 새 부대 준비되기",
    label4: "재림전 개혁해야 할 진리 시리즈의 세 번째 책!",
  },
  {
    name: "성령학교교재1",
    img: bookimg7,
    label1: "Holyschool1",
    label2: "『 모세오경을 통한 성경의 맥잡기 』",
    label3:
      "모세오경을 통해 배우는 언약/ 출애굽 안의 모형론/ 신명기 사관의 이해",
  },
  {
    name: "성령학교교재2",
    img: bookimg7,
    label1: "Holyschool2",
    label2: "『 기름부음학교 』",
    label3: "마지막 때 기름부음의 성경적인 이해 (이론과 실습)",
  },
  {
    name: "성령학교교재3",
    img: bookimg7,
    label1: "Holyschool3",
    label2: "『 요한계시록학교 』",
    label3: "종말론의 성경적인 증거를 살펴보며 성령 안에서 올바르게 이해하기",
  },
];
export default bookdatas;
