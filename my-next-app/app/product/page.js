'use client';

import { useState } from 'react';

export default function Products() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Modern T-Shirt', price: '$25', image: 'https://via.placeholder.com/300x200?text=T-Shirt' },
    { id: 2, name: 'Stylish Shoes', price: '$60', image: 'https://via.placeholder.com/300x200?text=Shoes' },
    { id: 3, name: 'Trendy Watch', price: '$120', image: 'https://via.placeholder.com/300x200?text=Watch' },
    { id: 4, name: 'Headphones', price: '$80', image: 'https://via.placeholder.com/300x200?text=Headphones' },
    { id: 5, name: 'Backpack', price: '$35', image: 'https://via.placeholder.com/300x200?text=Backpack' }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">🛍️ Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden text-center hover:shadow-xl transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-blue-600 font-semibold text-lg mb-4">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
            
          </div>
          
        ))}
      </div>
      
    </div>
    
  );
}