import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Post from './Post';
import './Home.css'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const Home = ({ posts }) => {
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
