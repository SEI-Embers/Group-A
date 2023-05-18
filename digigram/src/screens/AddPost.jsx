import React, { useState } from "react";
import { createPost } from "../services/post";
import { useNavigate } from "react-router-dom";
import "./AddPost.css";

function AddPost(props) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(image);

    const formData = new FormData();
    formData.append("caption", image);
    formData.append("account", props.user.profile.id);
    formData.append("content", caption);

    // console.log(formData)

    // axios.post('https://digi-be.herokuapp.com/posts/', formData, {
    // }).then(response => {
    //     console.log(response.data);
    // }).catch(error => {
    //     console.error(error);
    // });

    // const post = {
    //   account: props.user.profile.user,
    //   caption: image,
    //   content: caption,
    // };
    console.log(formData);
    await createPost(formData);
    navigate("/");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
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
    <>
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
    </>
  );
}

export default AddPost;
