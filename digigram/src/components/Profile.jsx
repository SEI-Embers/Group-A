import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = ({ username, avatar }) => {
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
    <div>
      <div>
        <img src={avatar} alt={`${username} avatar`} />
        <div>{username}</div>
        <button>Follow</button>
      </div>
      <div>
        {userData && (
          <div>
            <div>
              <div>{userData.posts}</div>
              <div>Posts</div>
            </div>
            <div>
              <div>{userData.followers}</div>
              <div>Followers</div>
            </div>
            <div>
              <div>{userData.following}</div>
              <div>Following</div>
            </div>
          </div>
        )}
      </div>
      <div>
        {userPosts.length > 0 ? (
          userPosts.map((post, index) => (
            <img key={index} src={post} alt={`${username} post`} />
          ))
        ) : (
          <div>No Photos</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
