import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { default as gdg } from "../assets/gdg.svg"

const Header = () => {
  // State to handle mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <img src={gdg} alt="Logo" className="w-6 h-6" /> {/* Replace with your logo path */}
        {/* Title */}
        <span className="font-medium text-gray-800">
          GDG RCOEM
        </span>
      </div>

      {/* Burger Menu (for mobile) */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation (hidden on mobile, visible on large screens) */}
      <nav className="hidden lg:flex flex-1 justify-end space-x-8 mr-4">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/events"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          Events
        </Link>
        <Link
          to="/team"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          Team
        </Link>
        <Link
          to="/alumni"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          Alumni
        </Link>
        <Link
          to="/contact"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu (visible when burger menu is clicked) */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Events
            </Link>
            <Link
              to="/team"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Team
            </Link>
            <Link
              to="/alumni"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Alumni
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}

      {/* Toggle Button */}
      <div className="hidden lg:flex items-center">
        <button
          className="relative w-12 h-6 bg-gray-200 dark:bg-gray-600 rounded-full p-1 transition duration-300 focus:outline-none"
        >
          {/* Toggle Indicator */}
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;