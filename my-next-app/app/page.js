'use client';

import { useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Modern T-Shirt', price: '$25', image: 'https://via.placeholder.com/300x200?text=T-Shirt' },
    { id: 2, name: 'Stylish Shoes', price: '$60', image: 'https://via.placeholder.com/300x200?text=Shoes' },
    { id: 3, name: 'Trendy Watch', price: '$120', image: 'https://via.placeholder.com/300x200?text=Watch' },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Simple E-Commerce</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="mt-2 text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
