import React from "react";
import './Profile.css'

const Profile = ({ username, avatar, posts, followers, following }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={`${username} avatar`} />
        <div>{username}</div>
        <button>Follow</button>
      </div>
      <div>
        <div>
          <div>{posts}</div>
          <div>Posts</div>
        </div>
        <div>
          <div>{followers}</div>
          <div>Followers</div>
        </div>
        <div>
          <div>{following}</div>
          <div>Following</div>
        </div>
      </div>
      <div>
        {posts.map((post, index) => (
          <img key={index} src={post} alt={`${username} post`} />
        ))}
      </div>
    </div>
  );
};

export default Profile;