import logo from './digi2.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import Profile from './screens/Profile.jsx';
import Settings from './screens/Settings';
import Post from './components/Post';
import AddPost from './screens/AddPost'

function App() {
  return (
    <Router>
      <div className="App">
   
          <Route exact path="/">
            <Home img src={logo}/>
          </Route>
          <Route path="/post/:postId">
            <Post />
          <Route path="/profile">
            <Profile />
          </Route>
          {/* <Route path="/addpost">
            <AddPost /> */}
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
      
      </div>
    </Router>
  );
}

export default App;
