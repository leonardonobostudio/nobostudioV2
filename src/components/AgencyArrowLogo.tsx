import React from 'react';

interface AgencyArrowLogoProps {
  className?: string;
  color?: string;
}

/**
 * Pixel-accurate recreation of the brutalist geometric agency arrow logo
 * seen in the bottom-left of the hero section.
 */
export const AgencyArrowLogo: React.FC<AgencyArrowLogoProps> = ({
  className = "w-32 h-32 md:w-40 md:h-40",
  color = "#FF3811",
}) => {
  return (
    <div className={`relative shrink-0 select-none ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_25px_rgba(255,56,17,0.3)] transition-transform duration-300 hover:scale-105"
      >
        {/* Top-horizontal bar & right fin arrow head */}
        <path
          d="M 5 18 
             L 78 18 
             L 98 42 
             L 98 90 
             L 70 62 
             L 70 42 
             L 5 42 
             Z"
          fill={color}
        />
        {/* Diagonal lower-left ascending tail */}
        <path
          d="M 5 62 
             L 48 20 
             L 68 40 
             L 25 82 
             L 5 82 
             Z"
          fill={color}
        />
        {/* Inner geometric accent block */}
        <path
          d="M 5 18 
             L 40 18 
             L 18 42 
             L 5 42 
             Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
