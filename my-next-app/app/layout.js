import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-800">
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-3xl">🛒</span>
              <h1 className="text-xl font-bold text-blue-700 tracking-tight">OnePage Store</h1>
            </div>
            <nav className="flex gap-6 text-md font-medium">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="/product" className="text-gray-700 hover:text-blue-600 transition">Products</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About Us</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </nav>
            <div className="hidden md:flex gap-4 text-blue-600 text-xl">
              <a href="#" className="hover:text-blue-800"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-800"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-800"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-12 px-6">
          {children}

          {/* Home Page Content */}
          <section className="text-center space-y-8 my-16">
            <h1 className="text-5xl font-extrabold text-blue-700">Explore the Best Deals at OnePage Store</h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Browse a wide range of fashion, electronics, home decor, and more. Quality products with fast delivery and secure checkout.
            </p>
            <a
              href="/product"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Start Shopping
            </a>
          </section>

          <section className="my-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Trending Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {["Sneakers", "Headphones", "Smartwatch", "Backpack"].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img
                    src={`https://source.unsplash.com/300x200/?${item}`}
                    alt={item}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg mb-2">{item}</h3>
                    <p className="text-blue-600 font-bold">${(i + 1) * 20}</p>
                    <button className="mt-2 text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-white py-16 rounded-lg my-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-blue-700 mb-4">Why Shop With Us?</h2>
              <p className="text-gray-600 mb-6">
                Enjoy secure checkout, fast delivery, and premium quality from trusted brands. Join thousands of satisfied customers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Free Shipping</h4>
                  <p className="text-gray-500 text-sm">On orders above $50 across the country.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">24/7 Support</h4>
                  <p className="text-gray-500 text-sm">We’re always here to help you anytime.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Easy Returns</h4>
                  <p className="text-gray-500 text-sm">Return any product within 7 days hassle-free.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-10 rounded-lg shadow-md my-20">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Stay In Touch</h2>
            <p className="text-center text-gray-600 mb-6">Subscribe to our newsletter for updates, offers, and more.</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </section>
        </main>

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
                <li><a href="/product" className="hover:underline text-gray-300">Products</a></li>
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
      </body>
    </html>
  );
}