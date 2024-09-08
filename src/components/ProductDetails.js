// src/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-green-600 font-bold text-2xl">${product.price}</p>
    </div>
  );
};

export default ProductDetails;
