import React from 'react';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className="min-h-screen min-w-screen bg-orange-50 mt-0 bg-cover font-Poppins flex flex-col lg:flex-row justify-around items-center p-4">
      {/* Container is flex-column on small screens and flex-row on large screens */}
      <div className="flex flex-col justify-center gap-5 leading-none text-center lg:text-left">
        <h2 className="text-red-500 font-semibold text-xl sm:text-2xl">NEW ARRIVALS ONLY</h2>
        {/* Text size adjusts based on screen size */}
        <div>
          <div className="flex flex-row justify-center lg:justify-start items-center">
            {/* Text size adjusts based on screen size */}
            <p className="text-gray-800 text-3xl sm:text-4xl font-semibold">New</p>
            <img className="w-10 h-8 ml-2" src={hand_icon} alt="hand icon" />
          </div>
          <p className="text-gray-800 text-3xl sm:text-4xl font-semibold mt-2 sm:mt-4">collections</p>
          <p className="text-gray-800 text-3xl sm:text-4xl font-semibold mt-2 sm:mt-4">for everyone</p>
          {/* Margin top adjusts based on screen size */}
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 sm:gap-3.5 w-48 sm:w-60 h-12 sm:h-14 rounded-3xl mt-5 sm:mt-7 bg-red-500 text-white text-base sm:text-lg font-bold">
            {/* Button size and gap between items adjust based on screen size */}
            Latest Collection
            <img src={arrow_icon} alt="arrow icon" />
          </button>
        </div>
      </div>

      <div className="mt-8 lg:mt-0">
        <img className="w-full sm:w-2/3 lg:w-96 mx-auto" src={hero_image} alt="hero image" />
        {/* Image size adjusts based on screen size */}
      </div>
    </div>
  );
}

export default Hero;