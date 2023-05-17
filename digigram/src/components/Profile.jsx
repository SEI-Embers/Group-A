import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  if (!userData) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <h1>{userData.username}'s Profile</h1>

      <h2>User Information</h2>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>

      <h2>Posts</h2>
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.caption}</h3>
            <p>{post.post}</p>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default ProfileComponent;
