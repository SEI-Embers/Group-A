import React, { useState } from "react";
import { createPost } from "../services/post";
import './AddPost.css'

function AddPost(props) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const post = {
      image: image,
      caption: caption,
    };
    await createPost(post);
    setImage(null);
    setCaption('');
    setImagePreview(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCaptionChange = (event) => {
    const caption = event.target.value;
    setCaption(caption);
  };

  return (
    <form onSubmit={handleSubmit} className="add-post-form">
      <h2>Add a New Post</h2>
      {imagePreview && (
        <div className="add-post-form__preview">
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
      <div className="add-post-form__input">
        
        <input
          id="image-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
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

export default AddPost;
