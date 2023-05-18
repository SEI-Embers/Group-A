import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts.jsx';
import './Home.css';
import { getPosts } from '../services/post.js';

const Home = ({user}) => {
  const [ posts, setPosts ] = useState([])
  const fetchPosts = async () => {
    const allPosts = await getPosts();
    setPosts(allPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      {posts && posts.length ? (
        <div className="post-grid">
          {posts.map((post, index) => (
            <Posts key={index} post={post} user={user} />
          ))}
        </div>
      ) : (
        <div className="no-posts">NO POSTS</div>
      )}
    </div>
  );
};

export default Home;
