export default function Home() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-6xl font-extrabold text-blue-600">Welcome to OnePage Store</h1>
      <p className="text-gray-700 text-xl max-w-2xl mx-auto">
        Discover a curated collection of fashion, tech, and lifestyle products. Unbeatable deals, fast delivery, and trusted quality — all in one place.
      </p>
      <a
        href="/product"
        className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        🛍️ Start Shopping
      </a>
    </div>
  );
}