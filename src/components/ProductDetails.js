import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details based on the product ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setError('Failed to fetch product details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">{error}</div>;
  if (!product) return <div className="text-white">No product found</div>;

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen bg-black text-white font-sans">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Product Details</h1>
      <div className="flex flex-col md:flex-row bg-gray-800 text-white p-6 shadow-lg rounded-md border border-gray-600">
        {/* Product Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-cover rounded-md border border-gray-700"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-2/3 md:ml-6">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <p className="text-red-500 text-2xl font-bold mb-4">${product.price}</p>
          <div className="mb-4">
            <p className="text-gray-300 mb-2"><strong>Category:</strong> {product.category}</p>
            <p className="text-gray-300 mb-2"><strong>Brand:</strong> {product.brand}</p>
            <p className="text-gray-300 mb-2"><strong>SKU:</strong> {product.sku}</p>
            <p className="text-gray-300 mb-2"><strong>Stock:</strong> {product.stock}</p>
            <p className="text-gray-300 mb-2"><strong>Rating:</strong> {product.rating} ⭐</p>
            <p className="text-gray-300 mb-2"><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p className="text-gray-300 mb-2"><strong>Shipping Information:</strong> {product.shippingInformation}</p>
            <p className="text-gray-300 mb-2"><strong>Return Policy:</strong> {product.returnPolicy}</p>
            <p className="text-gray-300 mb-2"><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>
            <p className="text-gray-300 mb-2"><strong>Meta Barcode:</strong> {product.meta?.barcode}</p>
            <p className="text-gray-300 mb-2"><strong>Meta QR Code:</strong> {product.meta?.qrCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
