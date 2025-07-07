import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-800">
        <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-extrabold tracking-tight">🛒 OnePage Store</h1>
            <nav className="flex gap-8 text-lg font-medium">
              <a href="/" className="hover:underline">Home</a>
              <a href="/products" className="hover:underline">Products</a>
              <a href="/about" className="hover:underline">About Us</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-12 px-6">{children}</main>
        <footer className="bg-white text-center py-6 border-t mt-12 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} OnePage Store. All rights reserved.
        </footer>
      </body>
    </html>
  );
}