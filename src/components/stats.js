import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Stats = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer-section bg-green-600 text-white py-6 px-14 md:px-20 lg:px-28 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer mx-auto max-w-7xl">
        <div className="footer-container flex justify-between items-center mx-auto max-w-6xl relative">
          {/* Logo Section */}
          <div className="footer-column flex items-center">
            <img
              src="/Frame 116.png" // Update with your logo path
              alt="Logo"
              className="w-16 md:w-20 lg:w-24 xl:w-32 transition-transform duration-300"
            />
          </div>

          {/* Company Section */}
          <div className="footer-column">
            <h3 className="footer-title font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">About</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Features</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Works</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Career</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="footer-column">
            <h3 className="footer-title font-semibold mb-2">Help</h3>
            <ul>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Customer Support</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Delivery Details</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-column">
            <h3 className="footer-title font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Free eBooks</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Development Tutorial</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">How to - Blog</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Youtube Playlist</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="footer-social-icons flex space-x-4 ml-4">
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
