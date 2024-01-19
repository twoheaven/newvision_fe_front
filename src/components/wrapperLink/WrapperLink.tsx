import { Link } from "react-router-dom";
import colorSet from "src/styles/color-set";
import styled from "styled-components";

// WrapperLink 컴포넌트
const WrapperLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${colorSet.primary};
  }
`;

// 다른 탭에서 주소로 이동하도록 설정한 WrapperLink 컴포넌트
const ExternalLink = styled(WrapperLink).attrs({
  as: "a",
  target: "_blank",
  rel: "noopener noreferrer",
})`
  // 추가적인 스타일 등을 설정할 수 있음
`;

export { ExternalLink, WrapperLink };
