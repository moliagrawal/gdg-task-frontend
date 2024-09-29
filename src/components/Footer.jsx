import React from 'react';
import { default as footer } from "../assets/footer.svg";
import { default as insta } from "../assets/insta.svg";
import { default as linkedin } from "../assets/linkedin.svg";
import { default as twitter } from "../assets/twitter.svg";
import { default as gdg } from "../assets/gdg.svg";
import { default as loc } from "../assets/loc.svg"
import { default as mail } from "../assets/mail.svg"

function Footer() {
  return (
    <footer className="bg-gray-100 pt-10 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Left Section */}
        <div className="text-center md:text-center">
          <div className="flex flex-col items-center">
            {/* GDG Logo Above Text */}
            <img
              src={gdg}
              alt="GDG Logo"
              className="h-16 mb-2" // Increase height for better visibility
            />
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800" style={{ fontFamily: 'Google Sans, sans-serif' }}>Google Developer Groups</p>
              <p>
                <span className="text-blue-600" style={{ fontFamily: 'Google Sans, sans-serif' }}>On Campus</span> ·
                <span className="text-gray-600" style={{ fontFamily: 'Google Sans, sans-serif' }}> Ramdeobaba University</span>
              </p>
            </div>
          </div>
        </div>

        {/* Thinner, Longer, and Darker Vertical Line */}
        <div className="hidden md:block border-l-2 border-gray-700 h-32 mx-8"></div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <div className="text-gray-900" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            {/* Location Icon + Address */}
            {/* Location Icon + Address */}
            <div className="flex items-center mb-2">
              <img src={loc} alt="Location" className="h-5 mr-2" />
              <div className="ml-2"> {/* Added margin-left for space between icon and address */}
                <p>Shri Ramdeobaba College of Engineering and Management,</p>
                <p>Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013</p>
              </div>
            </div>

            {/* Mail Icon + Email ID + Follow Us in the same row */}
            <div className="flex items-center mb-4">
              <img src={mail} alt="Mail" className="h-5 mr-2" />
              <p className="ml-2"> {/* Added margin-left for space between icon and email */}
                <a href="mailto:dsc.rknec@gmail.com" className="text-black underline hover:text-blue-600 ml-1">dsc.rknec@gmail.com</a>
              </p>

              {/* Spacer */}
              <span className="mx-6"></span>

              {/* Follow Us Section */}
              <p className="text-gray-900 font-semibold">Follow Us:</p>
            </div>

            <div className="ml-64 mt-2 pb-4 flex space-x-6">
              <a href="#" className="hover:opacity-75" aria-label="Instagram">
                <img src={insta} alt="Instagram" className="h-18" /> {/* Increased size to h-8 */}
              </a>
              <a href="#" className="hover:opacity-75" aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn" className="h-18" /> {/* Increased size to h-8 */}
              </a>
              <a href="#" className="hover:opacity-75" aria-label="Twitter">
                <img src={twitter} alt="Twitter" className="h-18" /> {/* Increased size to h-8 */}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Colorful Shapes at the Bottom */}
      <div className="mt-6">
        <img
          src={footer}
          alt="Footer Shapes"
          className="w-full block"
          style={{ marginBottom: '0px' }} // Adjust height to match the look
        />
      </div>
    </footer>
  );
}

export default Footer;
