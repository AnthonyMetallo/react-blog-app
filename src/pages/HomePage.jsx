import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleExplore = () => {
    if (isAuthenticated) {
      navigate("/posts"); // or "/blog" depending on your routing
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 dark:bg-gray-900 px-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
        Welcome to <span className="text-blue-600">MyBlog</span> ✍️
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        A simple and clean blogging platform where you can share your thoughts, explore content, and grow your ideas. Start by logging in or jump straight into the blog.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-500 transition"
        >
          Login
        </button>

        <button
          onClick={handleExplore}
          className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg text-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition"
        >
          Explore Blog
        </button>
      </div>
    </div>
  );
};

export default HomePage;
