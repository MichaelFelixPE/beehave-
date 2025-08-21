import React from 'react';

interface LogoProps {
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ inverted = false }) => {
  return (
    <div className={`flex items-center justify-center w-10 h-10 rounded-full overflow-hidden ${inverted ? 'bg-yellow-400' : 'bg-yellow-400'}`}>
      <img 
        src="https://drive.google.com/file/d/1JPh6xwOcO8u4EQnxyISmupu-qPdrBOET/view?usp=drive_link" 
        alt="Abelha"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;