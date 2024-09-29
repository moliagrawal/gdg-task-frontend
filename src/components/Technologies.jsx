import React from 'react';
import { default as android } from '../assets/android.svg'; // replace with correct path
import { default as flutter } from '../assets/flutter.svg'; // replace with correct path
import { default as cloud } from '../assets/cloud.svg'; // replace with correct path

const Technologies = () => {
  return (
    <div className="flex flex-col items-center p-8 font-google-sans">
      {/* Heading Section */}
      <div className="flex items-center mb-8">
        <div className="h-1 bg-red-500 w-40" /> {/* Further elongated red line */}
        <h2 className="text-3xl font-semibold mx-4 text-[#5f5f5f]">Technologies</h2>
        <div className="h-1 bg-red-500 w-40" /> {/* Further elongated red line */}
      </div>
      <p className="text-[#5f5f5f] text-lg mb-8">Domains That Excite Us to Collaborate and Teach!</p>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Android Card */}
        <a
          href="https://developer.android.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-white shadow-2xl rounded-lg w-96 p-6 flex flex-col items-center hover:shadow-3xl transition-shadow duration-300 relative">
            <div className="absolute -top-3 w-32 h-1 bg-red-500 left-1/2 transform -translate-x-1/2" /> {/* Centered elongated red top bar */}
            <img src={android} alt="Android" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-medium text-[#5f5f5f]">Android</h3>
            <div className="mt-2">
              {/* Arrow with hover animation (move downwards) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </a>

        {/* Flutter Card */}
        <a
          href="https://flutter.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-white shadow-2xl rounded-lg w-96 p-6 flex flex-col items-center hover:shadow-3xl transition-shadow duration-300 relative">
            <div className="absolute -top-3 w-32 h-1 bg-blue-500 left-1/2 transform -translate-x-1/2" /> {/* Centered elongated blue top bar */}
            <img src={flutter} alt="Flutter" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-medium text-[#5f5f5f]">Flutter</h3>
            <div className="mt-2">
              {/* Arrow with hover animation (move downwards) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </a>

        {/* Cloud Card */}
        <a
          href="https://cloud.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-white shadow-2xl rounded-lg w-96 p-6 flex flex-col items-center hover:shadow-3xl transition-shadow duration-300 relative">
            <div className="absolute -top-3 w-32 h-1 bg-green-500 left-1/2 transform -translate-x-1/2" /> {/* Centered elongated green top bar */}
            <img src={cloud} alt="Cloud" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-medium text-[#5f5f5f]">Cloud</h3>
            <div className="mt-2">
              {/* Arrow with hover animation (move downwards) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Technologies;
