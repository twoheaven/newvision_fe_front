import type { CSSProperties } from "react";

import Fonts from "./fonts";

const CATEGORY_BUTTON_ACTIVE_BACKGROUND = "#F4F4F4";

export const getCategoryButtonStyle = (isSelected: boolean): CSSProperties => ({
  alignItems: "center",
  backgroundColor: isSelected
    ? CATEGORY_BUTTON_ACTIVE_BACKGROUND
    : "transparent",
  border: isSelected ? "1px solid #e5e5e5" : "1px solid transparent",
  borderRadius: "6px",
  boxSizing: "border-box",
  color: "#111111",
  display: "inline-flex",
  fontFamily: isSelected ? Fonts.Bold : Fonts.Regular,
  justifyContent: "center",
  lineHeight: 1,
  minHeight: "36px",
  padding: "8px 14px",
  transition: "background-color 0.2s ease, border-color 0.2s ease",
  whiteSpace: "nowrap",
});

export const categoryDividerStyle: CSSProperties = {
  color: "#c7c7c7",
  fontFamily: Fonts.Regular,
};
