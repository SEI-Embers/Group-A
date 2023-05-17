import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentsComponent = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('/comments/');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/comments/', { comment: newComment });
      setNewComment('');
      fetchComments(); // Refresh comments after creating a new one
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await axios.delete(`/comments/${commentId}/`);
      fetchComments(); // Refresh comments after deleting one
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div>
      <h1>Comments</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>

      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <button onClick={() => handleDelete(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CommentsComponent;
