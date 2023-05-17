import React from "react";
// import PropTypes from "prop-types";
import "./Posts.css";

const Posts = ({post}) => {
  return (
    <div className="post-container">
      <div className="post-header">
        {/* <img className="post-avatar" src={avatar} alt={`${username} avatar`} /> */}
        <h2 className="post-username">{post.account}</h2>
      </div>
      <img className="post-image" src={post.caption} alt={`${post.account} post`} />
      <div className="post-caption">
        <span className="post-username">{post.account}</span> {post.content}
      </div>
    </div>
  );
};

// Posts.propTypes = {
//   account: PropTypes.string.isRequired,
//   // avatar: PropTypes.string.isRequired,
//   caption: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// };

export default Posts;
