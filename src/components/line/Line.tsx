import styled, { css } from "styled-components";

interface LineProps {
  vertical?: boolean;
}

const Line = styled.div`
  background-color: white;
  opacity: 0.7;

  ${(props: LineProps) =>
    props.vertical
      ? css`
          width: 1px;
          height: 100%;
        `
      : css`
          width: 100%;
          height: 1px;
        `};
`;

export default Line;
