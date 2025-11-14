import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <header className="p-4 shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link to="/" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
          My Blog App
        </Link>
        
        <div className="space-x-6 flex items-center">
          {/* Home (Blog Posts List) */}
          <Link to="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition">
            Blog Posts
          </Link>
          
          {/* Individual Post (Example link as required) */}
          <Link to="/post/1" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition hidden sm:inline">
            Example Post
          </Link>
          
          {/* Contact Page */}
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition">
            Contact
          </Link>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full text-white bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-150 shadow-md"
            aria-label="Toggle theme"
          >
            {/* Display Moon for light mode, Sun for dark mode */}
            {theme === 'light' ? 
                <span role="img" aria-label="dark mode">🌙</span> : 
                <span role="img" aria-label="light mode">☀️</span>
            }
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;