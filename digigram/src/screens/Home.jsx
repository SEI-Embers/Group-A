import { React, useState, useEffect } from 'react';
import Header from './Header';
// import Post from '../components/Post.jsx';
import Posts from './Posts.jsx';
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
      {posts ? posts.map((post, index) => (
        <Posts key={index} post={post} />
      )): <div>NO POSTS</div>}
    </container>
  );
};

export default Home;