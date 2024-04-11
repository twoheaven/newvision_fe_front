import { Text } from "@dohyun-ko/react-atoms";
import React from "react";

interface ShadowTextProps {
  children: React.ReactNode;
  size?: string;
  font?: string; // 폰트 스타일을 설정하기 위한 옵션
}

const ShadowText: React.FC<ShadowTextProps> = ({
  children,
  size = "inherit",
  font = "inherit",
}) => {
  return (
    <Text
      style={{
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontSize: size,
        fontFamily: font,
      }}
    >
      {children}
    </Text>
  );
};

export default ShadowText;
