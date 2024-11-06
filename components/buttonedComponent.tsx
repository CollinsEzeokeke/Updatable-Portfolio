// components/ButtonBlock.tsx
import React from 'react';
import "@/styles/resumeAnimation.css"
import { IconWorldDownload } from "@tabler/icons-react"

interface ButtonBlockProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({ 
  text = "Download CV", 
  onClick,
  className = ""
}) => {
  return (
    <button 
      onClick={onClick}
      className={`px-[0.8em] py-[1.7em] mx-auto mt-4 rounded-[25px] font-bold 
        bg-white text-black hover:bg- hover:text-white transition-colors 
        duration-400 cursor-pointer h-10 flex items-center btn ${className}`}
    >
      <p className="text">
        {text}<IconWorldDownload/>
      </p>
      <div className="flowers-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} className={`flower flower${index + 1}`}>
            <div className="petal one"></div>
            <div className="petal two"></div>
            <div className="petal three"></div>
            <div className="petal four"></div>
          </div>
        ))}
      </div>
    </button>
  );
};

export default ButtonBlock;