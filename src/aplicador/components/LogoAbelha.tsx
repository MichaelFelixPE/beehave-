import React from 'react';

interface LogoAbelhaProps {
  size?: number;
  className?: string;
}

const LogoAbelha: React.FC<LogoAbelhaProps> = ({ size = 24, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Asas */}
      <ellipse cx="16" cy="16" rx="7" ry="5" fill="#E8E8E8" opacity="0.8" />
      <ellipse cx="32" cy="16" rx="7" ry="5" fill="#E8E8E8" opacity="0.8" />
      {/* Corpo */}
      <ellipse cx="24" cy="28" rx="13" ry="15" fill="#1a1a1a" />
      {/* Listras amarelas */}
      <path d="M13 24 Q24 20 35 24 L35 28 Q24 24 13 28 Z" fill="#F0B429" />
      <path d="M12 32 Q24 28 36 32 L36 36 Q24 32 12 36 Z" fill="#F0B429" />
      {/* Cabeça */}
      <circle cx="24" cy="14" r="6" fill="#1a1a1a" />
      {/* Antenas */}
      <line x1="21" y1="9" x2="19" y2="4" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" />
      <line x1="27" y1="9" x2="29" y2="4" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="19" cy="4" r="1.5" fill="#1a1a1a" />
      <circle cx="29" cy="4" r="1.5" fill="#1a1a1a" />
      {/* Olhos */}
      <circle cx="22" cy="13" r="1.5" fill="#fff" />
      <circle cx="26" cy="13" r="1.5" fill="#fff" />
    </svg>
  );
};

export default LogoAbelha;
