const ContactPage = () => {
  // Requirement: The form should not be submitted to any backend 

  return (
    <div className="py-10 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-900 dark:text-white transition-colors duration-300">
        Contact Us
      </h1>
      
      <div className="w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
        
        {/* Prevent actual form submission */}
        <form onSubmit={(e) => e.preventDefault()}> 
          
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition"
              placeholder="Jane Doe"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition"
              placeholder="Enter your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-extrabold rounded-xl hover:bg-blue-700 transition duration-200 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;