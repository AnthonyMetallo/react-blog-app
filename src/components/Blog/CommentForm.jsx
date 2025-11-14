import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const newComment = {
      id: Date.now(),
      name,
      comment: commentText,
    };

    onAddComment(newComment);
    setName('');
    setCommentText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Add a Comment</h3>
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your comment"
        rows="4"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
