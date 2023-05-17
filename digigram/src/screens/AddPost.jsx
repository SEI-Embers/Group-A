import React, { useState } from "react";
import { createPost } from "../services/post";
import './AddPost.css'

function AddPost(props) {
  const [post, setPost] = useState({
    image: '',
    caption: '',
  })
  // const [image, setImage] = useState("");
  // const [caption, setCaption] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createPost(post);
  };

  const handleChange = (event) => {
    setPost({...post, [event.target.name]: event.target.value,});
  };

  const { image, caption } = post

  return (
    <form onSubmit={handleSubmit} className="add-post-form">
      <h2>Add a New Post</h2>
      <div className="add-post-form__input">
        <label htmlFor="image-input">Image URL</label>
        <input
          id="image-input"
          type="text"
          value={image}
          onChange={handleChange}
          placeholder="../digi10.png"
          required
        />
      </div>
      <div className="add-post-form__input">
        <label htmlFor="caption-input">Caption</label>
        <textarea
          id="caption-input"
          value={caption}
          onChange={handleChange}
          placeholder="Write a caption..."
          required
        />
      </div>
      <button type="submit" className="add-post-form__submit-btn">
        Share
      </button>
    </form>
  );
}

export default AddPost;
