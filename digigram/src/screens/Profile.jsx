import React from "react";
import './Profile.css'
import Header from "../components/Header";

const Profile = ({ username, avatar, posts, followers, following }) => {
  return (
    <>
    <Header />
      <div className="top-container">
        <div className="profile-pic-container">
        <img className="profile-avatar" src="https://static.wikia.nocookie.net/supermarioglitchy4/images/f/f3/Big_chungus.png" alt={`${username} avatar`} />
        
          <div className="stat">{posts} 103 Posts </div>
          <div className="stat">{followers} 1.2M Followers </div>
          <div className="stat"> 3 Following {following}</div>

        </div>
        <div>{username}</div>
      </div>
      <button className="follow-button">Follow</button>
      <div className="profile-gallery">
        {posts ? posts.map((post, index) => (
          <img key={index} src={post} alt={`${username} post`} />
        )) : <div>No Photos</div>}
      </div>
    </>
  );
};

export default Profile;