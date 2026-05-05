import "./QuoteCard.css";

import { Flex, Text } from "@dohyun-ko/react-atoms";
import type { CSSProperties } from "react";

import useIsMobile from "@/hooks/useIsMobile";
import Fonts from "@/styles/fonts";

interface HolySchoolQuoteCardProps {
  color: string;
  lines: string[];
  reference: string;
  desktopTextSize?: string;
  mobileTextSize?: string;
  quoteColor?: string;
}

const HolySchoolQuoteCard = ({
  color,
  lines,
  reference,
  desktopTextSize = "18px",
  mobileTextSize = "14px",
  quoteColor,
}: HolySchoolQuoteCardProps) => {
  const isMobile = useIsMobile();
  const cardStyle = {
    "--holyschool-quote-mark-color": quoteColor ?? color,
  } as CSSProperties;

  return (
    <div className="holyschool-quote-card" style={cardStyle}>
      <span
        className="holyschool-quote-mark holyschool-quote-mark-left"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <span
        className="holyschool-quote-mark holyschool-quote-mark-right"
        aria-hidden="true"
      >
        &rdquo;
      </span>
      <div className="holyschool-quote-content">
        <Flex flexDirection="column" alignItems="center" gap={"20px"}>
          <Flex flexDirection="column" alignItems="center">
            {lines.map((line) => (
              <Text
                key={line}
                color={color}
                font={Fonts.Medium}
                size={isMobile ? mobileTextSize : desktopTextSize}
                style={{ textAlign: "center" }}
              >
                {line}
              </Text>
            ))}
          </Flex>
          <Text
            color={color}
            font={Fonts.Regular}
            size={isMobile ? "14px" : "16px"}
          >
            {reference}
          </Text>
        </Flex>
      </div>
    </div>
  );
};

export default HolySchoolQuoteCard;
