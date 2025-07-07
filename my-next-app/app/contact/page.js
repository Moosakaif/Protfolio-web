export default function Contact() {
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-blue-600 text-center">Get in Touch</h2>
      <p className="text-center text-gray-700">
        Have questions or feedback? Fill out the form below and we’ll get back to you as soon as possible.
      </p>
      <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
        <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg" rows="5"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}