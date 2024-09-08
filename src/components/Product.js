// src/components/Product.js
import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {/* Link to the ProductList route */}
      <Link to="/productList">
        {/* Big "Product" icon or text */}
        <h1 style={{ fontSize: "80px", color: "#007bff" }}>🛒 Product</h1>
        <p>Check out our lastest product</p>
      </Link>
    </div>
  );
};

export default Product;

