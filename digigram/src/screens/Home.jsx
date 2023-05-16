import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Post from './screens/Post.jsx';
import Posts from './AddPost';
import './Home.css'
import { getPosts } from '../services/post.js'


const Home = () => {
  const [ posts, setPosts ] = useState([])
  const fetchPosts = async () => {
    const allPosts = await getPosts()
    setPosts(allPosts)
  }

  useEffect(() => {
    fetchPosts()
  }, [posts])
  
  return (
    <container>
      <Header />
      <Posts>
        {posts.smap((post, index) => (
          <Posts key={index} post={post} />
        ))}
      </Posts>
    </container>
  );
};

export default Home;