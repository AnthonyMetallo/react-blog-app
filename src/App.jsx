import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Layout/Footer';

import HomePage from './pages/HomePage';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        
        <Navbar />

        <div className="flex-grow">
          <Routes>
            {/* Public Landing Page */}
            <Route path="/" element={<HomePage />} />

            {/* Public Blog Posts */}
            <Route path="/posts" element={<BlogPostsPage />} />

            <Route path="/post/:postId" element={<IndividualPostPage />} />

            {/* Public route */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Login Page */}
            <Route path="/login" element={<LoginPage />} />

            {/* Fallback */}
            <Route
              path="*"
              element={<p className="text-center mt-10 text-red-500">Page not found</p>}
            />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
};

export default App;
