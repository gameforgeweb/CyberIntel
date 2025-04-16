import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield outline with gradient */}
      <path
        d="M50 5L15 20V45C15 69.5 29.5 92.5 50 95C70.5 92.5 85 69.5 85 45V20L50 5Z"
        fill="url(#shield-gradient)"
        stroke="url(#stroke-gradient)"
        strokeWidth="2"
      />

      {/* Digital circuit lines */}
      <path
        d="M35 45H65M45 35V65M55 35V65"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Connection dots */}
      <circle cx="35" cy="45" r="3" fill="white" />
      <circle cx="45" cy="35" r="3" fill="white" />
      <circle cx="55" cy="35" r="3" fill="white" />
      <circle cx="65" cy="45" r="3" fill="white" />
      <circle cx="45" cy="65" r="3" fill="white" />
      <circle cx="55" cy="65" r="3" fill="white" />

      {/* Gradients */}
      <defs>
        <linearGradient id="shield-gradient" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5451FF" />
          <stop offset="100%" stopColor="#FF7878" />
        </linearGradient>
        <linearGradient id="stroke-gradient" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo; 