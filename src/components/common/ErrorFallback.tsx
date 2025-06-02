import { Flex, Text } from "@dohyun-ko/react-atoms";
import React from "react";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="20px"
    >
      <Text size="24px" color="red">
        오류가 발생했습니다
      </Text>
      <Text size="16px" color="gray">
        {error.message}
      </Text>
      {resetErrorBoundary && (
        <button
          onClick={resetErrorBoundary}
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007AFF",
            color: "white",
            cursor: "pointer",
          }}
        >
          다시 시도
        </button>
      )}
    </Flex>
  );
};

export default ErrorFallback;
