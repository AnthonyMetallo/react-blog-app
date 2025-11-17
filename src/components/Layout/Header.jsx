import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="p-4 shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
          My Blog App
        </Link>
        
        <div className="space-x-6 flex items-center">

          <Link to="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition">
            Blog Posts
          </Link>

          <Link to="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition">
            Contact
          </Link>

          {/* LOGIN / LOGOUT */}
          {!isAuthenticated ? (
            <Link to="/login" className="text-blue-600 hover:text-blue-400">
              Login
            </Link>
          ) : (
            <button onClick={logout} className="text-red-500 hover:text-red-400">
              Logout
            </button>
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
