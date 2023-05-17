import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const ProfileComponent = () => {
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchUserPosts();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/accounts/<user_id>/'); // Replace <user_id> with the actual user ID
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const response = await axios.get('/posts/', {
        params: {
          account: '<user_id>', // Replace <user_id> with the actual user ID
        },
      });
      setUserPosts(response.data);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  return (
    <div className="profile-container">
      {userData && (
        <div className="profile-header">
          <img src={userData.profile_pic} alt={`${userData.username} avatar`} className="profile-avatar" />
          <div>{userData.username}</div>
          <button>Follow</button>
        </div>
      )}

      {userData && (
        <div className="profile-stats">
          <div className="stat">
            <div className="stat-value">{userData.posts.length}</div>
            <div className="stat-label">Posts</div>
          </div>
          <div className="stat">
            <div className="stat-value">{userData.followers}</div>
            <div className="stat-label">Followers</div>
          </div>
          <div className="stat">
            <div className="stat-value">{userData.following}</div>
            <div className="stat-label">Following</div>
          </div>
        </div>
      )}

      <div className="profile-posts">
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <img key={post.id} src={post.caption} alt={`${userData.username} post`} className="profile-post" />
          ))
        ) : (
          <div>No Photos</div>
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
