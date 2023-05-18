import "./Posts.css";
import { getAccount } from "../services/account.js";
import { useState, useEffect } from "react";
import { deletePost } from "../services/post";

const Posts = ({post, user}) => {
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
        <img
          className="post-avatar"
          src={postUser.profile_pic}
          alt={`${postUser.username} avatar`}
        />
        <h2 className="post-username">{postUser.username}</h2>
      </div>
      {postUser.username === user.profile.username ? <button onClick={() => deletePost(post.id)}>x</button>: <></>}
      {/* <AdvancedImage cldImg={myImage} /> */}
      <img className="post-image" src={`https://res.cloudinary.com/digi-be/${post.caption}`} alt={`${postUser.username} post`} />
      <div className="post-caption">
        <span className="post-username">{postUser.username}</span> {post.content}
      </div>
    </div>
  );
};

export default Posts;
