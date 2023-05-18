import React from "react";
import './Profile.css'

const Profile = ({ user, posts}) => {
  return (
    <>
      <div className="top-container">
        <div className="profile-pic-container">
        <img className="profile-avatar" src="https://static.wikia.nocookie.net/supermarioglitchy4/images/f/f3/Big_chungus.png" alt={`${user.profile.username} avatar`} />
        
          <div className="stat"> 103 Posts </div>
          <div className="stat"> 1.2M Followers </div>
          <div className="stat"> 3 Following </div>

        </div>
        <div>{user.profile.username}</div>
      </div>
      <button className="follow-button">Follow</button>
      <div className="profile-gallery">
        {posts ? posts.map((post, index) => (
          <img key={index} src={post} alt={`${user.profile.username} post`} />
        )) : <div>No Photos</div>}
      </div>
    </>
  );
};

export default Profile;