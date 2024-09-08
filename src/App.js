// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statistics from "./components/stats";
import Product from "./components/Product"; // Import Product component
import ProductListing from "./components/ProductListing"; // Import ProductListing component
import ProductDetails from "./components/ProductDetails"; // Import ProductDetails component

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Statistics />
  

      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductListing />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} /> {/* Example route for product details */}
      </Routes>
    </Router>
  );
}

export default App;
