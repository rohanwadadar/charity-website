// src/components/ProductListing.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); // Set products data
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 w-full object-cover"
            />
            <h2 className="text-xl font-bold my-2">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            <p className="text-sm text-gray-500">Rating: {product.rating}</p>
            {/* Link to Product details */}
            <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
