import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/Blog/CommentList';
import CommentForm from '../components/Blog/CommentForm';

const IndividualPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        // Fetch post
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await postRes.json();

        // Force static author info
        const updatedPost = {
          ...postData,
          authorName: 'Anthony Metallo',
          authorEmail: 'ametallo@charlotte.edu',
        };
        setPost(updatedPost);

        // Fetch comments
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
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">
        By <span className="font-semibold">{post.authorName}</span> ({post.authorEmail})
      </p>
      <p className="text-gray-800 mb-8 whitespace-pre-wrap">{post.body}</p>

      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <CommentList comments={comments} />
      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
};

export default IndividualPostPage;
