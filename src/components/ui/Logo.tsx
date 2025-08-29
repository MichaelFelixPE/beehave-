import React from 'react';

interface LogoProps {
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ inverted = false }) => {
  return (
    <div className="flex items-center">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${inverted ? 'bg-white' : 'bg-yellow-400'}`}>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={inverted ? 'text-yellow-500' : 'text-black'}
        >
          {/* Corpo da abelha */}
          <ellipse cx="12" cy="14" rx="6" ry="8" fill="currentColor" fillOpacity="0.8"/>
          
          {/* Listras da abelha */}
          <rect x="7" y="10" width="10" height="1.5" fill={inverted ? '#FBC02D' : '#FFF'} rx="0.75"/>
          <rect x="7" y="13" width="10" height="1.5" fill={inverted ? '#FBC02D' : '#FFF'} rx="0.75"/>
          <rect x="7" y="16" width="10" height="1.5" fill={inverted ? '#FBC02D' : '#FFF'} rx="0.75"/>
          
          {/* Asas */}
          <ellipse cx="9" cy="8" rx="3" ry="4" fill="currentColor" fillOpacity="0.3" transform="rotate(-20 9 8)"/>
          <ellipse cx="15" cy="8" rx="3" ry="4" fill="currentColor" fillOpacity="0.3" transform="rotate(20 15 8)"/>
          
          {/* Antenas */}
          <circle cx="10" cy="6" r="1" fill="currentColor"/>
          <circle cx="14" cy="6" r="1" fill="currentColor"/>
          <line x1="10" y1="6" x2="10" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="14" y1="6" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Logo;