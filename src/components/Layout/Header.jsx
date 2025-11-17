import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <header className="p-4 shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">

        {/* App Title */}
        <Link to="/" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
          My Blog App
        </Link>

        <div className="space-x-6 flex items-center">

          {/* Blog */}
          <Link to="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition">
            Blog Posts
          </Link>

          {/* Contact */}
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition">
            Contact
          </Link>

          {/* Login / Logout */}
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Login
            </Link>
          ) : (
            <>
              <span className="text-gray-600 dark:text-gray-300 text-sm hidden sm:inline">
                Hello, {user.username}
              </span>
              <button
                onClick={logout}
                className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-white bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-150 shadow-md"
            aria-label="Toggle theme"
          >
            {theme === 'light'
              ? <span role="img" aria-label="dark mode">🌙</span>
              : <span role="img" aria-label="light mode">☀️</span>
            }
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
