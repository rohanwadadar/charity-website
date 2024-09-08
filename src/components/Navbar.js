import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between py-6 px-4 bg-transparent">
      {/* Logo */}
      <div className="text-3xl font-bold text-green-600">
        <a href="/">
          <img src="logo.png" alt="Logo" className="h-10 w-auto" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex items-center text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`lg:flex lg:space-x-8 text-gray-700 ${isOpen ? 'block' : 'hidden'} lg:block`}
      >
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

      {/* Donate Button */}
      <a href="/donate">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition"
          style={{ backgroundColor: '#37955a' }} // Using the preferred green color
        >
          Donate
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
