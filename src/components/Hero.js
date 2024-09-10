// src/components/Hero.js
import React from 'react';
import { FaHouseDamage, FaHandshake, FaHandHoldingUsd, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Hero = () => {
  return (
    <>
 {/* First Section: Empower Hope */}
 <section className="bg-[#FAF6EB] py-20 px-10">
  {/* Grid Layout for Text and Image */}
  <div 
    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-[1440px] mx-auto ml-20" 
    style={{ height: '450px' }}
  >
    {/* Text Section */}
    <div className="max-w-[500px]">
      <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Manuale', fontSize: '70px', fontWeight: 600, lineHeight: '81px' }}>
        Empower Hope, <br /> Transform Lives
      </h1>
      <p className="text-lg text-gray-700" style={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 500, lineHeight: '30px' }}>
        The essence of charity by conveying the idea of uplifting individuals and communities through the power of hope and positive change.
      </p>
    </div>

    {/* Image Section */}
<div className="relative">
  {/* Background Decorative Yellow Circle */}
  <div 
    className="absolute bg-yellow-400 z-10" 
    style={{
      width: '120px',
      height: '120px',
      top: '-50px',
      left: '-40px',
      borderRadius: '50%',
      opacity: 1 // Set to 1 for visibility
    }}
  ></div>

  {/* Green Rectangle */}
  <div 
className="absolute bg-green z-0" 
    style={{
      width: '138px', 
      height: '138px', 
      top: '290px', 
      left: '441px', 
      borderRadius: '23px 23px 23px 23px', 
      opacity: 1 // Set to 1 for visibility
    }}
  ></div>

  {/* Main Image */}
  <img
    src="/children.png"
    alt="Children"
    className="z-5 relative"
    style={{
      // Changed from Hug (282px)px to 282px
      top: '0px',
      left: '40px',
      borderRadius: '20px 0px 0px 0px',
      opacity: 1 // Set to 1 for visibility
    }}
  />
</div>
</div>
</section>


<section
  className="bg-green text-white py-20 px-8 md:px-10 lg:px-15 xl:px-18 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer mx-auto relative"
  style={{
    width: '1178px',
    height: '307px',
    
    left: '0px',
    borderRadius: '40px 40px 40px 40px',
    opacity: 1 // Set to 0 for visibility
  }}
>        <div className="flex flex-col md:flex-row md:justify-around items-center text-white space-y-6 md:space-y-0">
          {/* Projects Completed */}
          <div className="stat-item text-center flex flex-col items-center">
            <FaHouseDamage size={40} className="stat-icon mb-2" />
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">563</h3>
            <p className="mt-2 text-lg">Projects Completed</p>
          </div>

          {/* Trusted Partners */}
          <div className="stat-item text-center flex flex-col items-center">
            <FaHandshake size={40} className="stat-icon mb-2" />
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">425</h3>
            <p className="mt-2 text-lg">Trusted Partners</p>
          </div>

          {/* Money Donated */}
          <div className="stat-item text-center flex flex-col items-center">
            <FaHandHoldingUsd size={40} className="stat-icon mb-2" />
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">978</h3>
            <p className="mt-2 text-lg">Money Donated</p>
          </div>

          {/* Active Volunteers */}
          <div className="stat-item text-center flex flex-col items-center">
            <FaHandsHelping size={40} className="stat-icon mb-2" />
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">32</h3>
            <p className="mt-2 text-lg">Active Volunteers</p>
          </div>
        </div>
      </section>













      {/* Second Section: Urgent Causes */}
      <section 
  className="bg-[#F8F6E4] py-20 px-10"
  style={{
    width: '1440px',
    height: '850px',
    padding: '0px 110px 0px 110px',
    gap: '0px',
    opacity: 1, // Ensure it's fully visible
    position: 'relative', // or 'absolute' if needed
    top: '100px' // Adjust this value to move the section downward
  }}
>
<h2 
  style={{
    fontFamily: 'Manuale', // Ensure this font is imported in your project
    fontSize: '50px',
    fontWeight: 600,
    lineHeight: '50px',
    textAlign: 'center',
    marginBottom: '10px' // Equivalent to mb-10
  }}
>
  Urgent Causes
</h2>
<p 
  style={{
    fontFamily: 'Montserrat', // Ensure this font is imported in your project
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '30px',
    textAlign: 'center',
    color: '#4A4A4A', // Equivalent to text-gray-700
    marginBottom: '40px' // Equivalent to mb-10
  }}
>
  Supporting urgent causes, changing lives.
</p>

        {/* Causes Grid */}
        <div 
  className="grid grid-cols-1 md:grid-cols-3 gap-10"
  style={{
    width: '1200px', // Set the width to 1200px
    height: '517px', // Set the height to 517px
    position: 'relative', // Ensure positioning context is relative
    top: '10px', // Move the element 10px down from its normal position
    left: '10px', // Move the element 10px to the right from its normal position
    gap: '45px', // Set the gap between grid items to 45px
    opacity: 1 // Set the opacity to 0 (fully transparent)
  }}
>          {/* Morocco Earthquake */}
<div 
  className="bg-white shadow-lg rounded-lg p-5"
  style={{
    width: '370px', // Set the width to 370 pixels
    height: '517px', // Set the height to 517 pixels
    gap: '0px', // Set the gap between elements to 0 pixels (note: gap is not applicable directly on divs, it is used with grid layouts)
    opacity: 1 // Set the opacity to 0 (fully transparent)
  }}
>            <img src="/1.png" alt="Morocco Earthquake" className="rounded-lg mb-4" />
<h3 
  className="text-2xl font-bold mb-3"
  style={{
    fontFamily: 'Manuale', // Apply the Manuale font
    fontSize: '22px', // Set font size to 18 pixels
    fontWeight: 600, // Set font weight to 600
    lineHeight: '25.87px', // Set line height to 25.87 pixels
    textAlign: 'left' // Align text to the left
  }}
>
  Morocco Strikes With Earthquake
</h3>
            <p className="text-gray-700 mb-4">
              Current situation for Morocco has gone horrible due to the strike of Earthquake.
            </p>
            <p className="text-xl font-bold text-gray-900">$4400 <span className="text-sm text-gray-500">Donated till now</span></p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>

          {/* Harmful Disease in Air */}
          <div 
  className="bg-white shadow-lg rounded-lg p-5"
  style={{
    width: '370px', // Set the width to 370 pixels
    height: '517px', // Set the height to 517 pixels
    gap: '0px', // Set the gap between elements to 0 pixels (note: gap is not applicable directly on divs, it is used with grid layouts)
    opacity: 1 // Set the opacity to 0 (fully transparent)
  }}
>  
            <img src="/2.png" alt="Harmful Disease" className="rounded-lg mb-4" />
            <h3 
  className="text-2xl font-bold mb-3"
  style={{
    fontFamily: 'Manuale', // Apply the Manuale font
    fontSize: '22px', // Set font size to 18 pixels
    fontWeight: 600, // Set font weight to 600
    lineHeight: '25.87px', // Set line height to 25.87 pixels
    textAlign: 'left' // Align text to the left
  }}
>Harmful Disease In Air</h3>
            <p className="text-gray-700 mb-4">
              World has been infected with deadly life-taking virus.
            </p>
            <p className="text-xl font-bold text-gray-900">$7888 <span className="text-sm text-gray-500">Donated till now</span></p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>

          {/* Patna Flood */}
          <div 
  className="bg-white shadow-lg rounded-lg p-5"
  style={{
    width: '370px', // Set the width to 370 pixels
    height: '517px', // Set the height to 517 pixels
    gap: '0px', // Set the gap between elements to 0 pixels (note: gap is not applicable directly on divs, it is used with grid layouts)
    opacity: 1 // Set the opacity to 0 (fully transparent)
  }}
>  
            <img src="/3.png" alt="Patna Flood" className="rounded-lg mb-4" />
            <h3 
  className="text-2xl font-bold mb-3"
  style={{
    fontFamily: 'Manuale', // Apply the Manuale font
    fontSize: '22px', // Set font size to 18 pixels
    fontWeight: 600, // Set font weight to 600
    lineHeight: '25.87px', // Set line height to 25.87 pixels
    textAlign: 'left' // Align text to the left
  }}
>Patna Suffer With Heavy Flood</h3>
            <p className="text-gray-700 mb-4">
              People in Patna have suffered a very heavy flood in the past few days.
            </p>
            <p className="text-xl font-bold text-gray-900">$11,000 <span className="text-sm text-gray-500">Donated till now</span></p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-green h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section
  className="bg-white py-20 px-4 sm:px-6 lg:px-10 relative"
  style={{
    width: '1499px',
    height: '780px',
 
    padding: '100px 100px 100px 100px',
    gap: '50px',
    opacity: 1 // Set to 1 for visibility
  }}
>
<h2
  className="text-center mb-10"
  style={{
    fontFamily: 'Manuale', // Ensure the font is included in your project
    fontSize: '50px',
    fontWeight: 600,
    lineHeight: '50px',
    width: '653px',
    height: '110px',
    opacity: 1, // Ensure it's fully visible
    position: 'relative', // Ensure it has a positioning context
    left: '300px' // Adjust this value to move it right
  }}
>
  Making a difference for those who face hardship
</h2>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {/* Donate Money */}

        <div
      className="bg-white shadow-lg rounded-lg text-center border-4 border-green-500"
      style={{
        width: '370px',
        height: '420px',
        padding: '38px 23px 38px 24px',
        borderRadius: '20px',
        opacity: 1 // Ensure it's fully visible
      }}
    >      
    
      <div className="flex justify-center mb-4">
            <img src="4.png" alt="Donate Money" className="h-12" />
          </div>
          <h3 
  className="text-xl font-bold mb-3"
  style={{
    fontFamily: 'Manuale', // Ensure the font is included in your project
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '25.87px',
    textAlign: 'center',
    width: '120px',
    height: '26px',
    marginTop: '40px',
    opacity: 1, // Ensure it's fully visible
    marginLeft: 'auto', // This moves the element to the right in a flex container
    marginRight: '100px' // Optional: remove any right margin if needed
  }}
>
  Donate Money
</h3>
<p
  className="text-gray-600 mb-6"
  style={{
    fontFamily: 'Montserrat', // Ensure the font is included in your project
    fontSize: '15px',
    fontWeight: 400,
    marginTop: '20px',
    lineHeight: '21px',
    textAlign: 'center',
    width: '323px',
    height: '84px',
    opacity: 1 // Ensure it's fully transparent
  }}
>             Your small help can change someone else's life and can make someone happy, and you will have a good deed added to your cart.
          </p>
          <Link to="/product-list">
          <button 
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full"
  style={{
    width: '162px', // Set width to 162 pixels
    height: '60px', // Set height to 60 pixels
    padding: '20px 30px', // Set padding
    borderRadius: '30px 30px 30px 30px', // Apply the specified border radius
    border: '1.5px solid', // Apply the border
    opacity: 1 // Ensure it's fully visible
  }}
>
  Donate Now
</button>
          </Link>
        </div>

        {/* Donate Clothes */}
        <div
      className="bg-white shadow-lg rounded-lg text-center border-4 border-green"
      style={{
        width: '370px',
        height: '420px',
        padding: '38px 23px 38px 24px',
        borderRadius: '20px',
        opacity: 1 // Ensure it's fully visible
      }}
    >       <div className="flex justify-center mb-4">
            <img src="6.png" alt="Donate Clothes" className="h-12" />
          </div>
          <h3 
  className="text-xl font-bold mb-3"
  style={{
    fontFamily: 'Manuale', // Ensure the font is included in your project
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '25.87px',
    textAlign: 'center',
    width: '120px',
    height: '26px',
    marginTop: '40px',
    opacity: 1, // Ensure it's fully visible
    marginLeft: 'auto', // This moves the element to the right in a flex container
    marginRight: '100px' // Optional: remove any right margin if needed
  }}
>Donate Clothes</h3>
<p
  className="text-gray-600 mb-6"
  style={{
    fontFamily: 'Montserrat', // Ensure the font is included in your project
    fontSize: '15px',
    fontWeight: 400,
    marginTop: '20px',
    lineHeight: '21px',
    textAlign: 'center',
    width: '323px',
    height: '84px',
    opacity: 1 // Ensure it's fully transparent
  }}
>             Your small help can change someone else's life and can make someone happy, and you will have a good deed added to your cart.
          </p>
          <Link to="/product-list">
          <button 
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full"
  style={{
    width: '162px', // Set width to 162 pixels
    height: '60px', // Set height to 60 pixels
    padding: '20px 30px', // Set padding
    borderRadius: '30px 30px 30px 30px', // Apply the specified border radius
    border: '1.5px solid', // Apply the border
    opacity: 1 // Ensure it's fully visible
  }}
>
  Donate Now
</button>

          </Link>
        </div>

        {/* Donate Food */}
        <div
      className="bg-white shadow-lg rounded-lg text-center border-4 border-green-500"
      style={{
        width: '370px',
        height: '420px',
        padding: '38px 23px 38px 24px',
        borderRadius: '20px',
        opacity: 1 // Ensure it's fully visible
      }}
    >        <div className="flex justify-center mb-4">
            <img src="5.png" alt="Donate Food" className="h-12" />
          </div>
          <h3 
  className="text-xl font-bold mb-3"
  style={{
    fontFamily: 'Manuale', // Ensure the font is included in your project
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '25.87px',
    textAlign: 'center',
    width: '120px',
    height: '26px',
    marginTop: '40px',
    opacity: 1, // Ensure it's fully visible
    marginLeft: 'auto', // This moves the element to the right in a flex container
    marginRight: '100px' // Optional: remove any right margin if needed
  }}
>Donate Food</h3>
<p
  className="text-gray-600 mb-6"
  style={{
    fontFamily: 'Montserrat', // Ensure the font is included in your project
    fontSize: '15px',
    fontWeight: 400,
    marginTop: '20px',
    lineHeight: '21px',
    textAlign: 'center',
    width: '323px',
    height: '84px',
    opacity: 1 // Ensure it's fully transparent
  }}
>            Your small help can change someone else's life and can make someone happy, and you will have a good deed added to your cart.
          </p>
          <Link to="/product-list">
          <button 
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full"
  style={{
    width: '162px', // Set width to 162 pixels
    height: '60px', // Set height to 60 pixels
    padding: '20px 30px', // Set padding
    borderRadius: '30px 30px 30px 30px', // Apply the specified border radius
    border: '1.5px solid', // Apply the border
    opacity: 1 // Ensure it's fully visible
  }}
>
  Donate Now
</button>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
