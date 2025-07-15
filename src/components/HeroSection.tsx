import React from 'react';

const HeroSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;