import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="p-4 shadow-md bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          My Blog App
        </Link>
        
        <div className="space-x-4 flex items-center">
          <Link to="/posts" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Blog Posts
          </Link>

         

          <Link to="/contact" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Contact
          </Link>

          {/* Auth buttons */}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="text-red-500 hover:text-red-700 dark:text-red-300 dark:hover:text-red-400"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400"
            >
              Login
            </Link>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-white bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
