import React from "react";
import heroImg from '../../src/assets/heroImg.png';
const HeroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-auto w-full">
    <div className="w-full  bg-white shadow-lg  overflow-hidden">
      <div className="relative h-64 sm:h-[248px] md:h-[660px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        ></div>

        {/* Black opacity overlay on the left */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-black bg-opacity-50"></div>

        {/* Content Over Image */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 space-y-4 text-white">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Your Content Title
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Add descriptive content here to make it engaging.
          </p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default HeroSection;
