// src/components/LikeButton.jsx

import React, { useState } from 'react';

const LikeButton = () => {
  // Local state for the like functionality
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(15); 

  const handleLike = () => {
    // Toggles the like count based on current state
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    // Toggles the liked state
    setIsLiked(prev => !prev);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold transition duration-300 shadow-lg ${
        isLiked 
          ? 'text-white bg-red-600 hover:bg-red-700' 
          : 'text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
      }`}
      aria-label="Like post"
    >
      {/* Heart Icon (fill color is controlled by text-white or text-gray-700 via fill-current) */}
      <svg 
        className="w-5 h-5 fill-current" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;