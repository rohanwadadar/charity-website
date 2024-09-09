import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Stats = () => {
  return (
    <footer className="bg-green text-white py-12 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer mx-auto max-w-7xl mb-12">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mx-auto max-w-6xl">
        {/* Logo Section */}
        <div className="flex items-center mb-6 md:mb-0">
          <img
            src="/Frame 116.png" // Update with your logo path
            alt="Logo"
            className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 transition-transform duration-300"
          />
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left mb-6 md:mb-0">
          {/* Company Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">About</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Features</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Works</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Career</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Customer Support</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Delivery Details</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Free eBooks</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Development Tutorial</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">How to - Blog</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col space-y-4">
          {/* Top row with first two icons */}
          <div className="flex justify-center space-x-4 md:space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-3 text-green-600 hover:bg-gray-300 transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-3 text-green-600 hover:bg-gray-300 transition">
              <FaTwitter size={20} />
            </a>
          </div>
          {/* Bottom row with last two icons */}
          <div className="flex justify-center space-x-4 md:space-x-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-3 text-green-600 hover:bg-gray-300 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-3 text-green-600 hover:bg-gray-300 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-white opacity-50 my-8" />

      {/* Copyright Section */}
      <div className="text-center mt-4">
        <p className="text-sm sm:text-base">© Copyright 2023-24, All Rights Reserved by Charity</p>
      </div>
    </footer>
  );
};

export default Stats;
