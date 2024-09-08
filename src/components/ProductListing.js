import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then(res => res.json())
        .then(data => setFilteredProducts(data.products));
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Product Listing</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 w-full object-cover"
            />
            <h2 className="text-xl font-bold my-2">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
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
