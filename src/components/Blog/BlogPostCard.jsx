import { Link } from 'react-router-dom';

const BlogPostCard = ({ post }) => {
  return (
    <div 
      className="p-6 rounded-xl shadow-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] border border-gray-100 dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
        {post.title}
      </h2>
      {/* Displays the excerpt/content from your data */}
      <p className="mb-5 text-gray-600 dark:text-gray-400 line-clamp-3 text-sm">
        {post.excerpt}
      </p>
      <Link 
        to={`/post/${post.id}`} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition duration-150 inline-block"
      >
        Read Post
      </Link>
    </div>
  );
};

export default BlogPostCard;