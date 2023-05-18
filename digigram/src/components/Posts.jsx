import React from "react";
// import PropTypes from "prop-types";
import "./Posts.css";
import { getAccount } from "../services/account.js";
import { useState, useEffect } from "react";

const Posts = ({post}) => {
  const [ postUser, setPostUser ] = useState({})
  const fetchPostUser = async () => {
    const user = await getAccount(post.account)
    setPostUser(user)
  }

  useEffect(() => {
    fetchPostUser()
    console.log(post)
  },[])

  return (
    <div className="post-container">
      <div className="post-header">
        {/* <img className="post-avatar" src={postUser.profile_pic} alt={`${postUser.username} avatar`} /> */}
        <h2 className="post-username">{postUser.username}</h2>
      </div>
      <img className="post-image" src={post.caption} alt={`${postUser.username} post`} />
      <div className="post-caption">
        <span className="post-username">{postUser.username}</span> {post.content}
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
