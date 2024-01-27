// Box.tsx

import React from "react";
import styled, { css } from "styled-components";

interface BoxProps {
  width?: string;
  height?: string;
  children?: React.ReactNode; // Add children prop
}

const StyledBox = styled.div<BoxProps>`
  background-color: black;
  opacity: 0.2;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export default Box;
