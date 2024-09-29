// HomeHeader.jsx
import React from 'react';
import { default as home } from "../assets/home.svg";

const scrollToMission = () => {
  const missionSection = document.getElementById('mission-section');
  if (missionSection) {
    missionSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => {
  return (
    <header className="flex flex-col items-center py-20 space-y-10 text-center">
      {/* Logo Text */}
      <h1 className="text-4xl md:text-5xl font-bold">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#DB4437]">o</span>
        <span className="text-[#F4B400]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#0F9D58]">l</span>
        <span className="text-[#DB4437]">e</span>{' '}
        <span className="text-black">Developer Groups</span>
      </h1>
      <h2 className="text-2xl text-gray-700">RBU Chapter</h2>
    
      {/* Illustration */}
      <img
        src={home} // Replace with the actual image path
        alt="Google Developer Groups illustration"
        className="w-full max-w-100 h-auto md:w-1/2 rounded-md"
      />

      {/* Description */}
      <p className="text-gray-700 text-lg md:text-xl px-5 md:px-0 max-w-3xl">
        Google Developer Groups are community groups for college and university students interested in Google developer technologies.
      </p>

      {/* Join Us Button */}
      <button
        onClick={scrollToMission}
        className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none"
      >
        JOIN US
      </button>

      {/* Scroll Down Indicator */}
      <div className="mt-5 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </header>
  );
};

export default Home; 