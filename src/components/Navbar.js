import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-transparent">
      {/* Logo */}
      <div className="text-3xl font-bold text-green-600">
        <a href="/">
          <img src="logo.png" alt="Logo" className="h-10 w-auto" />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-gray-700">
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











