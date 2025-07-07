export default function Home() {
  const featured = [
    { id: 1, name: 'Eco Hoodie', price: '$45', image: 'https://via.placeholder.com/300x200?text=Eco+Hoodie' },
    { id: 2, name: 'Smart Glasses', price: '$150', image: 'https://via.placeholder.com/300x200?text=Smart+Glasses' },
    { id: 3, name: 'Leather Wallet', price: '$40', image: 'https://via.placeholder.com/300x200?text=Wallet' }
  ];

  return (
    <div className="space-y-16">
      <section className="text-center space-y-8">
        <h1 className="text-6xl font-extrabold text-blue-600">Welcome to OnePage Store</h1>
        <p className="text-gray-700 text-xl max-w-2xl mx-auto">
          Discover our curated collection of fashion, tech, and lifestyle essentials — delivered with speed and care.
        </p>
        <a
          href="/products"
          className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          🛍️ Shop Now
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">✨ Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {featured.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md text-center hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-blue-600 font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 p-10 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">About OnePage Store</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Founded in 2025, OnePage Store is committed to bringing you stylish and functional products at amazing prices. We believe that everyone deserves access to quality goods, and we work hard to deliver excellence through every purchase.
        </p>
      </section>

      <section className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Contact Us</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">
          Have a question or want to get in touch? Drop us a message and our team will respond promptly.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg" rows="4"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}