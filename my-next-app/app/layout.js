import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-800">
        <header className="bg-blue-600 shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-3xl">🛒</span>
              <h1 className="text-xl font-bold text-white tracking-tight">OnePage Store</h1>
            </div>
            <nav className="flex gap-6 text-md font-medium">
              <a href="/" className="text-white hover:text-black transition">Home</a>
              <a href="/products" className="text-white hover:text-black transition">Products</a>
              <a href="/about" className="text-white hover:text-black transition">About Us</a>
              <a href="/contact" className="text-white hover:text-black transition">Contact</a>
            </nav>
            <div className="hidden md:flex gap-4 text-blue-600 text-xl">
              <a href="#" className="hover:text-blue-900"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-800"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-800"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-12 px-6">{children}</main>
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
      </body>
    </html>
  );
}