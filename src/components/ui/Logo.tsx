import React from 'react';

interface LogoProps {
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ inverted = false }) => {
  return (
    <div className={`flex items-center justify-center w-10 h-10 rounded-full overflow-hidden ${inverted ? 'bg-yellow-400' : 'bg-yellow-400'}`}>
      <img 
        src="https://yt3.googleusercontent.com/ytc/AIdro_ky9Qn8P9WUVR9j-g7QC4BdhwUkgP7ZP82IJs8F5EvRJcs=s900-c-k-c0x00ffffff-no-rj" 
        alt="Abelha"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;