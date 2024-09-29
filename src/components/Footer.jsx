import React from 'react';
import { default as footer } from "../assets/footer.svg";
import { default as gdg } from "../assets/gdg.svg";

function Footer() {
  return (
    <footer className="bg-gray-100 pt-10 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={gdg}
              alt="GDG Logo"
              className="h-12"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold text-gray-800" style={{ fontFamily: 'Google Sans, sans-serif' }}>Google Developer Groups</p>
              <p>
                <span className="text-blue-600" style={{ fontFamily: 'Google Sans, sans-serif' }}>On Campus</span> · 
                <span className="text-gray-600" style={{ fontFamily: 'Google Sans, sans-serif' }}> Ramdeobaba University</span>
              </p>
            </div>
          </div>
        </div>

        {/* Longer and Bolder Vertical Line */}
        <div className="hidden md:block border-l-4 border-gray-500 h-24 mx-8"></div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <div className="text-gray-900" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            <p>Shri Ramdeobaba College of Engineering and Management,</p>
            <p>Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013</p>
            <p>Email: 
              <a href="mailto:dsc.rknec@gmail.com" className="text-black underline hover:text-blue-600 ml-1">dsc.rknec@gmail.com</a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-6">
            <a href="#" className="hover:opacity-75" aria-label="Instagram">
              <img src="/instagram-icon.png" alt="Instagram" className="h-6" />
            </a>
            <a href="#" className="hover:opacity-75" aria-label="LinkedIn">
              <img src="/linkedin-icon.png" alt="LinkedIn" className="h-6" />
            </a>
            <a href="#" className="hover:opacity-75" aria-label="Twitter">
              <img src="/twitter-icon.png" alt="Twitter" className="h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Colorful Shapes at the Bottom */}
      <div className="mt-6">
        <img
          src={footer}
          alt="Footer Shapes"
          className="w-full block"
          style={{ marginBottom: '0px' }} // Ensure no margin at the bottom
        />
      </div>
    </footer>
  );
}

export default Footer;
