import React from 'react';
import { default as home } from "../assets/home.svg";

// Scroll to "Get to Know Us" Section
const scrollToKnowUs = () => {
  const knowUsSection = document.getElementById('get-to-know-us');
  if (knowUsSection) {
    knowUsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => {
  return (
    <header className="flex flex-col items-center py-20 space-y-10 text-center">
      {/* Logo Text */}
      <p>
        <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Google Sans, sans-serif' }}>
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#DB4437]">o</span>
          <span className="text-[#F4B400]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#0F9D58]">l</span>
          <span className="text-[#DB4437]">e</span>{' '}
          <span className="text-black">Developer Groups</span>
        </h1>
        <h2 className="text-2xl" style={{ color: '#5f5f5f', fontFamily: 'Google Sans, sans-serif' }}>RBU Chapter</h2>
      </p>

      {/* Illustration */}
      <img
        src={home} // Replace with the actual image path
        alt="Google Developer Groups illustration"
        className="w-1/8 max-w-1/8 h-1/28md:w-1/2 rounded-md"
      />

      {/* Description */}
      <p className="text-gray-700 text-lg md:text-xl px-5 md:px-0 max-w-3xl" style={{ fontFamily: 'Google Sans, sans-serif' }}>
        Google Developer Groups are community groups for college and university students interested in Google developer technologies.
      </p>

      {/* Join Us Button */}
      <button
        onClick={scrollToKnowUs} // Scroll to the "Get to Know Us" section
        className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none"
        style={{ fontFamily: 'Google Sans, sans-serif' }}
      >
        JOIN US
      </button>

      {/* Scroll Down Indicator with Color Transition */}
      <div className="mt-5 flex flex-col items-center space-y-2">
        {/* Arrow 1 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-300 transition duration-300 ease-in-out animate-bounce"
          style={{ stroke: 'currentColor', strokeWidth: 4 }}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
            className="transition-colors duration-500 ease-in-out hover:text-blue-500"
          />
        </svg>
        {/* Arrow 2 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500 transition duration-300 ease-in-out animate-bounce"
          style={{ stroke: 'currentColor', strokeWidth: 4 }}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
            className="transition-colors duration-500 ease-in-out hover:text-green-500"
          />
        </svg>
        {/* Arrow 3 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-700 transition duration-300 ease-in-out animate-bounce"
          style={{ stroke: 'currentColor', strokeWidth: 4 }}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
            className="transition-colors duration-500 ease-in-out hover:text-red-500"
          />
        </svg>
      </div>
    </header>
  );
};

export default Home;
