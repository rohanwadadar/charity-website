import React from 'react';
import { FaHouseDamage, FaHandshake, FaHandHoldingUsd, FaHandsHelping } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
    
      {/* First Section: Empower Hope */}
      <section className="bg-[#FAF6EB] py-20 px-10">
        {/* Grid Layout for Text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Text Section */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Empower Hope, <br /> Transform Lives
            </h1>
            <p className="text-lg text-gray-700">
              The essence of charity by conveying the idea of uplifting individuals and communities
              through the power of hope and positive change.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            {/* Background Decorative Yellow Circle */}
            <div className="absolute bg-yellow-400 w-16 h-16 rounded-full -top-8 -left-8"></div>

            {/* Main Image */}
            <img
              src="/children.png"
              alt="Children"
              className="rounded-lg shadow-lg"
            />

            {/* Background Decorative Green Square */}
            <div className="absolute bg-green-500 w-16 h-16 rounded-lg -bottom-8 -right-8"></div>
          </div>
        </div>
      </section>









      
 {/* Stats Section */}
 <section className="stats-section bg-green text-white py-6 px-14 md:px-20 lg:px-28 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer mx-auto max-w-7xl">

<div className="stats-container  flex justify-around items-center text-white space-x-4">
  {/* Projects Completed */}
  <div className="stat-item text-center">
  <FaHouseDamage size={40} className="stat-icon mb-2 ml-14" />
    <h3 className="stat-number text-4xl font-bold text-yellow-400">563</h3>
    <p className="stat-description mt-2 text-lg">Projects Completed</p>
  </div>

  {/* Trusted Partners */}
  <div className="stat-item text-center">
    <FaHandshake size={48} className="stat-icon mb-2 ml-12" />
    <h3 className="stat-number text-4xl font-bold text-yellow-400">425</h3>
    <p className="stat-description mt-2 text-lg">Trusted Partners</p>
  </div>

  {/* Money Donated */}
  <div className="stat-item text-center">
    <FaHandHoldingUsd size={48} className="stat-icon mb-2 ml-12" />
    <h3 className="stat-number text-4xl font-bold text-yellow-400">978</h3>
    <p className="stat-description mt-2 text-lg">Money Donated</p>
  </div>

  {/* Active Volunteers */}
  <div className="stat-item text-center ">
    <FaHandsHelping size={48} className="stat-icon mb-2 ml-12" />
    <h3 className="stat-number text-4xl font-bold text-yellow-400">32</h3>
    <p className="stat-description mt-2 text-lg">Active Volunteers</p>
  </div>
</div>

</section>
      {/* Second Section: Urgent Causes */}
      <section className="bg-white py-20 px-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Urgent Causes</h2>
        <p className="text-center text-lg text-gray-700 mb-10">
          Supporting urgent causes, changing lives.
        </p>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Morocco Earthquake */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <img src="/1.png" alt="Morocco Earthquake" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-3">Morocco Strikes With Earthquake</h3>
            <p className="text-gray-700 mb-4">
              Current situation for Morocco has gone horrible due to the strike of Earthquake.
            </p>
            <p className="text-xl font-bold text-gray-900">$4400 <span className="text-sm text-gray-500">Donated till now</span></p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>

          {/* Harmful Disease in Air */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <img src="/2.png" alt="Harmful Disease" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-3">Harmful Disease In Air</h3>
            <p className="text-gray-700 mb-4">
              World has been infected with deadly life-taking virus.
            </p>
            <p className="text-xl font-bold text-gray-900">$7888 <span className="text-sm text-gray-500">Donated till now</span></p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
         

          {/* Patna Flood */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <img src="/3.png" alt="Patna Flood" className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-3">Patna Suffer With Heavy Flood</h3>
            <p className="text-gray-700 mb-4">
              People in Patna have suffered a very heavy flood in the past few days.
            </p>
            <p className="text-xl font-bold text-gray-900">$11,000 <span className="text-sm text-gray-500">Donated till now</span></p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
            <div className="bg-orange-500 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>

        </div>
      </section>
      <section className="bg-white py-20 px-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Making a difference for those who face hardship
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {/* Donate Money */}
  <a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
    <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-yellow-200">
      <div className="flex justify-center mb-4">
        <img src="4.png" alt="Donate Money" className="h-12" />
      </div>
      <h3 className="text-xl font-bold mb-3">Donate Money</h3>
      <p className="text-gray-600 mb-6">
        Your small help can change someone else's life and can make someone happy, and you will have a good deed added to your cart.
      </p>
      <button className="bg-yellow-200 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-full">
        Donate Now
      </button>
    </div>
  </a>

  {/* Donate Clothes */}
  <a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
    <div className="bg-white shadow-lg rounded-lg p-6 text-center border-2 border-green-500">
      <div className="flex justify-center mb-4">
        <img src="6.png" alt="Donate Clothes" className="h-12" />
      </div>
      <h3 className="text-xl font-bold mb-3">Donate Clothes</h3>
      <p className="text-gray-600 mb-6">
        Your small help can change someone else's life and can make someone happy, and you will have a good deed added to your cart.
      </p>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full">
        Donate Now
      </button>
    </div>
  </a>

  {/* Donate Food */}
  <a href="https://rohanwadadar.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
    <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-yellow-200">
      <div className="flex justify-center mb-4">
        <img src="5.png" alt="Donate Food" className="h-12" />
      </div>
      <h3 className="text-xl font-bold mb-3">Donate Food</h3>
      <p className="text-gray-600 mb-6">
        Your small help can change someone else's life and can make someone happy, and you will have a good deed added to your cart.
      </p>
      <button className="bg-yellow-200 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-full">
        Donate Now
      </button>
    </div>
  </a>
</div>

    </section>
      
    </>
  );
};

export default Hero;
