import React from "react";

interface SparkleIconProps {
  className?: string;
  size?: number;
}

const SparkleIcon: React.FC<SparkleIconProps> = ({ className = "", size = 56 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
  </svg>
);

export default SparkleIcon;
