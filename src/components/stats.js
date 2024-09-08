import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Stats = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-green-600 text-white py-6 px-4 md:px-8 lg:px-12 xl:px-16 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mx-auto max-w-6xl">
          {/* Logo Section */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="/Frame 116.png" // Update with your logo path
              alt="Logo"
              className="w-16 md:w-20 lg:w-24 xl:w-32 transition-transform duration-300"
            />
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left mb-6 md:mb-0">
            {/* Company Section */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Company</h3>
              <ul>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">About</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Features</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Works</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Career</a></li>
              </ul>
            </div>

            {/* Help Section */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Help</h3>
              <ul>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Customer Support</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Delivery Details</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Free eBooks</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Development Tutorial</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">How to - Blog</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p>© Copyright 2023-24, All Rights Reserved by Charity</p>
        </div>
      </footer>
    </>
  );
};

export default Stats;
