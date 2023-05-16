import React from "react";
import PropTypes from "prop-types";
import "./Posts.css";

const Posts = ({ username, avatar, image, caption }) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt={`${username} avatar`} />
        <h2 className="post-username">{username}</h2>
      </div>
      <img className="post-image" src={image} alt={`${username} post`} />
      <div className="post-caption">
        <span className="post-username">{username}</span> {caption}
      </div>
    </div>
  );
};

Posts.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Posts;
