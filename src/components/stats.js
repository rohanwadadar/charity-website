import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Stats = () => {
  return (
    
    
    <section className="bg-white  mt-[180px]">
      <footer 
        className="bg-green text-white py-12 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer mx-auto mb-12"
        style={{
          width: '90%', // Adjust width responsively
          maxWidth: '1300px', // Max width to keep the original design on larger screens
          height: 'auto', // Allow height to be responsive
          position: 'absolute',
          top: '2600px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '30px',
          opacity: 1,
        }}
      >   
        <div 
          className="flex flex-col md:flex-row md:justify-between items-start md:items-center mx-auto max-w-6xl"
          style={{
            width: '100%', // Full width with max-width on the parent
            height: 'auto', // Responsive height
            gap: '125px', 
            opacity: 1,
          }}
        >    
          {/* Logo Section */}
          <div 
            className="flex items-center mb-6 md:mb-0"
            style={{
              width: '113px',
              height: '113px',
              gap: '20px',
              opacity: 1,
            }}
          >
            <img
              src="/Frame 116.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Footer Links */}
          <div 
            className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left mb-6 md:mb-0"
            style={{
              width: '100%',
              maxWidth: '597px', // Maintain original design on larger screens
              gap: '40px',
              opacity: 1,
            }}
          >
            {/* Company Section */}
            <div 
              className="mb-6 md:mb-0"
              style={{
                width: '136px',
                height: '205px',
                opacity: 1,
              }}
            >        
              <h3
                className="font-manuale text-lg font-bold leading-6 text-left mb-4"
              >Company</h3>
              <ul 
                className="space-y-2 font-montserrat text-sm leading-10 text-left"
              >
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">About</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Features</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Works</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Career</a></li>
              </ul>
            </div>

            {/* Help Section */}
            <div 
              className="mb-6 md:mb-0"
              style={{
                width: '136px',
                height: '205px',
                opacity: 1,
              }} 
            >          
              <h3
                className="font-manuale text-lg font-bold leading-6 text-left mb-4"
              >Help</h3>
              <ul 
                className="space-y-2 font-montserrat text-sm leading-10 text-left"
              >
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Customer Support</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Delivery Details</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div
              className="mb-6 md:mb-0"
              style={{
                width: '136px',
                height: '205px',
                opacity: 1,
              }}
            >
              <h3
                className="font-manuale text-lg font-bold leading-6 text-left mb-4"
              >Resources</h3>
              <ul 
                className="space-y-2 font-montserrat text-sm leading-10 text-left"
              >
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Free eBooks</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Development Tutorial</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">How to - Blog</a></li>
                <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div 
            className="mb-6 md:mb-0"
            style={{
              width: '136px',
              height: '205px',
              opacity: 1,
            }}
          >       
            <div className="flex justify-center space-x-4 md:space-x-6 mb-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 text-green hover:bg-gray transition w-10 h-10 flex items-center justify-center">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 text-green hover:bg-gray transition w-10 h-10 flex items-center justify-center">
                <FaTwitter size={20} />
              </a>
            </div>
            <div className="flex justify-center space-x-4 md:space-x-6">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 text-green hover:bg-gray transition w-10 h-10 flex items-center justify-center">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 text-green hover:bg-gray transition w-10 h-10 flex items-center justify-center">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr
          className="border-t border-white opacity-100 my-8 absolute"
          style={{
            width: '90%',
            maxWidth: '1166px',
            top: '320px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: '1px solid',
            opacity: 1,
          }}
        />

        {/* Copyright Section */}
        <div
          className="text-center"
          style={{
            marginTop: '110px',
          }}
        >
          <p
            className="font-poppins text-sm leading-6 text-center"
          >
            © Copyright 2023-24, All Rights Reserved by Charity
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Stats;
