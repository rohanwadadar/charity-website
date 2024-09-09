import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false); // State for category list visibility

  useEffect(() => {
    // Fetch all products
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });

    // Fetch categories
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    // Fetch products by category if a category is selected
    if (selectedCategory) {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then(res => res.json())
        .then(data => setFilteredProducts(data.products))
        .catch(error => console.error('Error fetching products by category:', error));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  useEffect(() => {
    // Fetch products based on search term
    if (searchTerm) {
      fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then(res => res.json())
        .then(data => setFilteredProducts(data.products));
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen bg-gradient-to-r from-green via-blue to-purple text-white font-sans">
     <h1 style={{ fontSize: "85px", color: "#000000" }}>🛒 Charity Product</h1>
        <p>Porduct for sell (which profit will be donated in charity)</p>
   
      <h1 className="text-4xl font-extrabold mb-8">Product Listing</h1>
      
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-white p-2 mb-4 w-full rounded-md bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
      />
      
      {/* Toggle Button for Categories */}
      <button
        onClick={() => setShowCategories(!showCategories)}
        className="bg-white text-green p-2 rounded-md mb-4 hover:bg-green hover:text-white transition-colors"
      >
        {showCategories ? 'Hide Categories' : 'Show Categories'}
      </button>
      
      {/* Category List Box */}
      {showCategories && (
        <div className="bg-purple shadow-lg rounded-lg p-6 mb-8 border border-gray">
          <h2 className="text-2xl font-semibold text-white mb-4">Categories</h2>
          <ul className="flex flex-wrap space-x-2">
            <li
              key="all"
              className={`bg-gray hover:bg-gray rounded-md p-3 cursor-pointer ${!selectedCategory ? 'bg-gray' : ''}`}
              onClick={() => setSelectedCategory('')}
            >
              All Categories
            </li>
            {categories.map((category, index) => (
              <li
                key={index}
                className={`bg-gray hover:bg-gray rounded-md p-3 cursor-pointer ${selectedCategory === category ? 'bg-green' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white text-black p-1 shadow-md rounded-md border border-gray">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 w-full object-cover rounded-t-md"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray mb-2">{product.description}</p>
              <p className="text-red font-bold mb-4">${product.price}</p>
              <Link to={`/product/${product.id}`} className="text-green hover:underline">
               View Details
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

 
 
  


  );
};

export default ProductListing;
