// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductListing from "./components/ProductListing"; // Import ProductListing component
import ProductDetails from "./components/ProductDetails"; // Import ProductDetails component
import Stats from "./components/stats";

// Layout component for pages with Navbar and Stats
const LayoutWithNavbarAndStats = ({ children }) => (
  <>

    {children}
    <Stats />
  </>
);

// Component to conditionally render Navbar and Stats
const ConditionalLayout = () => {
  const location = useLocation();
  const showNavbarAndStats = location.pathname === "/";

  return showNavbarAndStats ? (
    <LayoutWithNavbarAndStats>
        <Navbar />
      <Hero />
    </LayoutWithNavbarAndStats>
  ) : (
    <>{/* Render only the children for other routes */}</>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the home page with Hero component */}
        <Route path="/" element={<ConditionalLayout />} />

        {/* Route for Product Listing page */}
        <Route path="/product-list" element={<ProductListing />} />

        {/* Route for Product Details page */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
