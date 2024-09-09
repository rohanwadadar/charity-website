import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-6 px-4 sm:px-6 md:px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-green-600">
          <a href="/">
            <img src="logo.png" alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li className="hover:text-green-500 cursor-pointer">
            <a href="https://rohanwadadar.github.io/portfolio/">Home</a>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <a href="https://rohanwadadar.github.io/portfolio/">About Us</a>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <a href="https://rohanwadadar.github.io/portfolio/">Contact Us</a>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <a href="https://rohanwadadar.github.io/portfolio/">Blogs</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 hover:text-green-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Donate Button */}
        <a href="/product-list">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition"
            style={{ backgroundColor: '#37955a' }} // Using the preferred green color
          >
            Donate
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
