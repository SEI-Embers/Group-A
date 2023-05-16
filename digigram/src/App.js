import logo from './digi2.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import Profile from './screens/Profile.jsx';
import Settings from './screens/Settings';
import Post from './components/Post';
import AddPost from './screens/AddPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={() => <Home img={logo} />} />
        <Route path="/post/:postId" component={Post} />
        <Route path="/profile" component={Profile} />
        <Route path="/addpost" component={AddPost} /> 
        <Route path="/settings" component={Settings} />
      </div>
    </Router>
  );
}

export default App;
