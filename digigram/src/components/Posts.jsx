import React, { useState, useEffect } from "react";
import "./Posts.css";
import { getAccount } from "../services/account.js";

const Posts = ({ post }) => {
  const [postUser, setPostUser] = useState({});

  useEffect(() => {
    fetchPostUser()
    console.log(post)
  },[])
  

  return (
    <div className="post-container">
      <div className="post-header">
        <img
          className="post-avatar"
          src={postUser.profile_pic}
          alt={`${postUser.username} avatar`}
        />
        <h2 className="post-username">{postUser.username}</h2>
      </div>
      {/* <AdvancedImage cldImg={myImage} /> */}
      <img className="post-image" src={`https://res.cloudinary.com/digi-be/${post.caption}`} alt={`${postUser.username} post`} />
      <div className="post-caption">
        <span className="post-username">{postUser.username}</span> {post.content}
      </div>
    </div>
  );
};

export default Posts;
