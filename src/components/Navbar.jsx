import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <nav className="p-4 shadow-md bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          My Blog App
        </Link>
        
        <div className="space-x-4 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Blog Posts
          </Link>
          
          {/* Link to an example post as required for "Individual Post (dynamically, based on post)" */}
          <Link to="/post/1" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Example Post
          </Link>

          <Link to="/contact" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Contact
          </Link>
          
          {/* Theme Toggle Button */}
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