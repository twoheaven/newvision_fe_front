// Box.tsx

import React from "react";
import styled, { css, CSSObject } from "styled-components";

interface BoxProps {
  width?: string | number;
  height?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  backgroundImage?: string;
  alignItems?: string;
  justifyContent?: string;
  children?: React.ReactNode;
}

// Add index signature to CSSProperties
interface CustomCSSProperties extends React.CSSProperties {
  [key: string]: any;
}

const convertCssPropertiesToCssObject = (
  cssProperties: CustomCSSProperties,
): CSSObject => {
  const cssObject: CSSObject = {};
  for (const key in cssProperties) {
    if (Object.prototype.hasOwnProperty.call(cssProperties, key)) {
      cssObject[key] = cssProperties[key];
    }
  }
  return cssObject;
};

const StyledBox = styled.div<BoxProps>`
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

  ${(props) =>
    props.style &&
    css`
      ${convertCssPropertiesToCssObject(props.style)};
    `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.backgroundImage &&
    css`
      background-image: url(${props.backgroundImage});
      background-size: cover;
    `}

  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};

  background: linear-gradient(
    180deg,
    #e6e6e6 0%,
    #e9e9e9 1.63%,
    #f6f6f6 10.7%,
    #fdfdfd 22.82%,
    #ffffff 50.56%,
    #fdfdfd 78.98%,
    #f6f6f6 89.29%,
    #ebebeb 96.64%,
    #e2e2e2 100%
  );
`;

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export default Box;
