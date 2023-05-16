import React, { useState } from "react";
import PropTypes from "prop-types";
import './AddPost.css'

function AddPost({ onSubmit }) {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ image, caption });
    setImage("");
    setCaption("");
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="add-post-form">
      <h2>Add a New Post</h2>
      <div className="add-post-form__input">
        <label htmlFor="image-input">Image URL</label>
        <input
          id="image-input"
          type="text"
          value={image}
          onChange={handleImageChange}
          placeholder="../digi10.png"
          required
        />
      </div>
      <div className="add-post-form__input">
        <label htmlFor="caption-input">Caption</label>
        <textarea
          id="caption-input"
          value={caption}
          onChange={handleCaptionChange}
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

AddPost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddPost;
