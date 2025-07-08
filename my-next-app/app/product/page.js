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
      <footer className="bg-gray-800 text-white py-10 mt-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
            <div>
              <h3 className="text-xl font-bold mb-4">OnePage Store</h3>
              <p className="text-gray-300 text-sm">
                Your go-to destination for high-quality fashion and tech products at unbeatable prices. Trusted by thousands of happy customers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline text-gray-300">Home</a></li>
                <li><a href="/products" className="hover:underline text-gray-300">Products</a></li>
                <li><a href="/about" className="hover:underline text-gray-300">About Us</a></li>
                <li><a href="/contact" className="hover:underline text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white text-2xl" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-2xl" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-2xl" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-2xl" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-10">
            &copy; {new Date().getFullYear()} OnePage Store. All rights reserved.
          </div>
        </footer>
    </div>
    
  );
}