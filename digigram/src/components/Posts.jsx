import React, { useState, useEffect } from "react";
import "./Posts.css";
import { getAccount } from "../services/account.js";

const Posts = ({ post }) => {
  const [postUser, setPostUser] = useState({});

  useEffect(() => {
    const fetchPostUser = async () => {
      const user = await getAccount(post.account);
      setPostUser(user);
    };

    fetchPostUser();
  }, [post.account]);

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
      <img
        className="post-image"
        src={post.caption}
        alt={`${postUser.username} post`}
      />
      <div className="post-caption">
        <span className="post-username">{postUser.username}</span> {post.content}
      </div>
    </div>
  );
};

export default Posts;
