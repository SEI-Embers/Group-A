import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Post from './Post';
import './Home.css'
import { getPosts } from '../services/post.js'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

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
    <Container>
      <Header />
      <Posts>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Posts>
    </Container>
  );
};

export default Home;