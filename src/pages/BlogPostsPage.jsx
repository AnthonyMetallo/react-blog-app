import React, { useEffect, useState } from 'react';
import BlogPostCard from '../components/Blog/BlogPostCard';

const BlogPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // Add preview text and static author for each post
        const processed = data.map((post) => ({
          ...post,
          excerpt: post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body,
          authorName: 'Anthony Metallo',
          authorEmail: 'ametallo@charlotte.edu',
        }));
        setPosts(processed);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setError('Failed to load blog posts.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading posts...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostsPage;
