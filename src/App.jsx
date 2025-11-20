import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <Navbar />

        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<HomePage />} />

          {/* Protected blog content */}
          <Route
            path="/posts"
            element={
              <ProtectedRoute>
                <BlogPostsPage />
              </ProtectedRoute>
            }
          />

          {/* Individual Post - should be protected too */}
          <Route
            path="/post/:postId"
            element={
              <ProtectedRoute>
                <IndividualPostPage />
              </ProtectedRoute>
            }
          />

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
    </Router>
  );
};

export default App;
