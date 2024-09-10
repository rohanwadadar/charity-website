import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Stats = () => {
  return (
    <section style={{ marginTop: '180px' }}>
<footer 
  className="bg-green text-white py-12 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer mx-auto max-w-7xl mb-12"
  style={{
    width: '1300px',
    height: '400px',
    position: 'absolute',
    top: '2600px',
    left: '70px',
    borderRadius: '30px 30px 30px 30px',
    opacity: 1 // Ensure it's fully visible or adjust as needed
  }}
>   
<div 
  className="flex flex-col md:flex-row md:justify-between items-start md:items-center mx-auto max-w-6xl"
  style={{
    width: '1052px', // Adjust width
    height: '205px', // Adjust height
    gap: '125px', // Adjust gap between flex items
    opacity: 1 // Ensure it's fully visible
  }}
>    
    
        {/* Logo Section */}
        <div 
  className="flex items-center mb-6 md:mb-0"
  style={{
    width: '113px', // Adjust width
    height: '113px', // Adjust height
    gap: '20px', // Adjust gap if needed
    opacity: 1 // Ensure it's fully visible
  }}
>
  <img
    src="/Frame 116.png" // Update with your logo path
    alt="Logo"
    style={{
      width: '100%', // Ensure the image takes up the container's width
      height: '100%', // Ensure the image takes up the container's height
      objectFit: 'contain' // Maintain aspect ratio while fitting the container
    }}
  />
</div>


        {/* Footer Links */}
<div 
  className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left mb-6 md:mb-0"
  style={{
    width: '597px', // Adjust width
    height: '205px', // Adjust height
    gap: '40px', // Adjust gap between flex items
    opacity: 1 // Ensure it's fully visible
  }}
>
  
          {/* Company Section */}
          <div 
  className="mb-6 md:mb-0"
  style={{
    width: '136px', // Set the width
    height: '205px', // Set the height
    gap: '0px', // Set gap (though gap is typically used for flex or grid layouts, not directly on a single div)
    opacity: 1 // Ensure full visibility
  }}
>        <h3
  className="mb-4" // Margin bottom to match `mb-4` class
  style={{
    fontFamily: 'Manuale', // Apply the Manuale font
    fontSize: '16px', // Set the font size
    fontWeight: 700, // Set the font weight
    lineHeight: '24px', // Set the line height
    textAlign: 'left', // Align text to the left
  }}
>Company</h3>
<ul 
  className="space-y-2"
  style={{
    fontFamily: 'Montserrat', // Apply the Montserrat font
    fontSize: '14px', // Set the font size
    fontWeight: 400, // Set the font weight
    lineHeight: '40px', // Set the line height
    textAlign: 'left', // Align text to the left
    width: '136px', // Set the width of the ul
    height: '160px', // Set the height of the ul
    position: 'relative', // Ensure position is relative for top and left to work
    top: '0px', // Set the top position
    left: '0px', // Set the left position
    opacity: 1 // Ensure full visibility
  }}
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
    width: '136px', // Set the width
    height: '205px', // Set the height
    gap: '0px', // Set gap (though gap is typically used for flex or grid layouts, not directly on a single div)
    opacity: 1 // Ensure full visibility
  }} 
>          <h3
  className="mb-4" // Margin bottom to match `mb-4` class
  style={{
    fontFamily: 'Manuale', // Apply the Manuale font
    fontSize: '16px', // Set the font size
    fontWeight: 700, // Set the font weight
    lineHeight: '24px', // Set the line height
    textAlign: 'left', // Align text to the left
  }}
>Help</h3>
<ul 
  className="space-y-2"
  style={{
    fontFamily: 'Montserrat', // Apply the Montserrat font
    fontSize: '14px', // Set the font size
    fontWeight: 400, // Set the font weight
    lineHeight: '40px', // Set the line height
    textAlign: 'left', // Align text to the left
    width: '136px', // Set the width of the ul
    height: '160px', // Set the height of the ul
    position: 'relative', // Ensure position is relative for top and left to work
    top: '0px', // Set the top position
    left: '0px', // Set the left position
    opacity: 1 // Ensure full visibility
  }}
>              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Customer Support</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Delivery Details</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
          <h3
  className="mb-4" // Margin bottom to match `mb-4` class
  style={{
    fontFamily: 'Manuale', // Apply the Manuale font
    fontSize: '16px', // Set the font size
    fontWeight: 700, // Set the font weight
    lineHeight: '24px', // Set the line height
    textAlign: 'left', // Align text to the left
  }}
>Resources</h3>
            <ul 
  className="space-y-2"
  style={{
    fontFamily: 'Montserrat', // Apply the Montserrat font
    fontSize: '14px', // Set the font size
    fontWeight: 400, // Set the font weight
    lineHeight: '40px', // Set the line height
    textAlign: 'left', // Align text to the left
    width: '136px', // Set the width of the ul
    height: '160px', // Set the height of the ul
    position: 'relative', // Ensure position is relative for top and left to work
    top: '0px', // Set the top position
    left: '0px', // Set the left position
    opacity: 1 // Ensure full visibility
  }}
>              <li><a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Free eBooks</a></li>
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
    width: '136px', // Set the width
    height: '205px', // Set the height
    gap: '0px', // Set gap (though gap is typically used for flex or grid layouts, not directly on a single div)
    opacity: 1 // Ensure full visibility
  }}
>       


   {/* Top row with first two icons */}
   <div
  className="flex justify-center space-x-4 md:space-x-6"
  style={{
    width: '92px',
    height: '92px',
    gap: '20px', // Note: Tailwind doesn't directly support `gap` on flex, so this is handled inline
    opacity: 1 // Ensure it's fully visible
  }}
>            
<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 text-green hover:bg-gray transition w-10 h-10 flex items-center justify-center">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 text-green hover:bg-gray transition w-10 h-10 flex items-center justify-center">
              <FaTwitter size={20} />
            </a>
          </div>
          {/* Bottom row with last two icons */}
         
         
         
         
          <div
  className="flex justify-center space-x-4 md:space-x-6"
  style={{
    width: '92px',
    height: '92px',
    gap: '20px', // Note: Tailwind doesn't directly support `gap` on flex, so this is handled inline
    opacity: 1 // Ensure it's fully visible
  }}
>            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 text-green hover:bg-gray transition w-10 h-10 flex items-center justify-center">
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
      width: '1166.4px',
      height: '1px',
      top: '320px', // Increased from 350px to move it down more
      left: '67px',
      border: '1px solid',
      opacity: 1
    }}
  />

      {/* Copyright Section */}
      <div
  className="text-center"
  style={{
    marginTop: '110px' // Adjust the value as needed
  }}
>
      <p
  className="text-center"
  style={{
    fontFamily: 'Poppins', // Ensure the font is imported in your project
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
    textAlign: 'center'
  }}
>
  © Copyright 2023-24, All Rights Reserved by Charity
</p>
      </div>
    </footer></section>
  );
};

export default Stats;
