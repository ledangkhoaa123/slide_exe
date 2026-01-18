import React from 'react';

interface NavigationDotsProps {
  currentSlide: number;
  totalSlides: number;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({ currentSlide, totalSlides }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div 
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentSlide === index 
              ? 'bg-amber-500 h-6' 
              : 'bg-amber-200 hover:bg-amber-300'
          }`}
        />
      ))}
    </div>
  );
};
