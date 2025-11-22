import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/Blog/CommentList';
import CommentForm from '../components/Blog/CommentForm';
import { useAuth } from '../context/AuthContext';

const IndividualPostPage = () => {
  const { postId } = useParams();
  const { isAuthenticated } = useAuth();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await postRes.json();

        const updatedPost = {
          ...postData,
          authorName: 'Anthony Metallo',
          authorEmail: 'ametallo@charlotte.edu',
        };
        setPost(updatedPost);

        const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const commentsData = await commentsRes.json();
        setComments(commentsData);
      } catch (err) {
        console.error('Error fetching post data:', err);
        setError('Failed to load post.');
      } finally {
        setLoading(false);
      }
    };

    fetchPostAndComments();
  }, [postId]);

  const handleAddComment = async (newComment) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: Number(postId),
          name: newComment.name,
          body: newComment.comment,
          email: 'noreply@example.com',
        }),
      });
      const data = await res.json();
      setComments((prev) => [...prev, data]);
    } catch (err) {
      console.error('Error posting comment:', err);
      alert('Failed to post comment.');
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading post...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!post) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        {post.title}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-2">
        By <span className="font-semibold">{post.authorName}</span> ({post.authorEmail})
      </p>

      <p className="text-gray-800 dark:text-gray-300 mb-8 whitespace-pre-wrap leading-relaxed">
        {post.body}
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Comments
      </h2>

      <CommentList comments={comments} />

      {isAuthenticated ? (
        <CommentForm onAddComment={handleAddComment} />
      ) : (
        <p className="mt-6 text-center text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200 p-4 rounded-lg">
          You must be logged in to post a comment.
        </p>
      )}
    </div>
  );
};

export default IndividualPostPage;
