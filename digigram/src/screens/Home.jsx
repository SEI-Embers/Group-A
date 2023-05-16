import React from 'react';
import Header from './Header';
import Posts from './AddPost';
import './Home.css'


const Home = ({ posts }) => {
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
