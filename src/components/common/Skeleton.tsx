import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

const SkeletonBase = styled.div<SkeletonProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "20px"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <SkeletonBase {...props} />;
};

export default Skeleton;
