import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/posts"); // Always go to blog posts
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 px-6">
      
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white drop-shadow">
        Welcome to <span className="text-blue-600">MyBlog</span> ✍️
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed">
        A clean, minimal blogging platform where ideas grow. Join the conversation or explore posts written by others.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-500 transition"
        >
          Login
        </button>

        <button
          onClick={handleExplore}
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-300 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition"
        >
          Explore Blog
        </button>
      </div>
    </div>
  );
};

export default HomePage;
