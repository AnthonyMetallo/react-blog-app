import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogPostsPage />} />
          <Route path="/post/:postId" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<p className="text-center mt-10 text-red-500">Page not found</p>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
