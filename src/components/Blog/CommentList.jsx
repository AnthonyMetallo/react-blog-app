import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div className="mt-4">
      {(!comments || comments.length === 0) ? (
        <p className="text-gray-600 dark:text-gray-400">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-4">
          {[...comments].reverse().map((comment) => (
            <div key={comment.id} className="p-5 rounded-lg bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600">
              <p className="font-bold text-blue-600 dark:text-blue-400 text-lg">{comment.name}</p>
              <p className="text-gray-700 dark:text-gray-200 mt-2 whitespace-pre-wrap">
                {comment.body || comment.comment || ''}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;
