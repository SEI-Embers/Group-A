import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts.jsx';
import './Home.css';
import { getPosts } from '../services/post.js';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const allPosts = await getPosts();
    setPosts(allPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
        <div className="post-grid">
          {posts ? posts.map((post, index) => (<Posts key={index} post={post} />))
           : (<div className="no-posts">NO POSTS</div>
           )}
        </div>
    </div>
  );
};

export default Home;
