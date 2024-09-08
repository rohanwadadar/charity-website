// src/components/Product.js
import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {/* Link to the ProductList route */}
      <Link to="/productList">
        {/* Big "Product" icon or text */}
        <h1 style={{ fontSize: "80px", color: "#007bff" }}>🛒 Charity Product</h1>
        <p>Porduct for sell (which profit will be donated in charity)</p>
      </Link>
    </div>
  );
};

export default Product;

