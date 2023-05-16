import logo from './digi2.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Profile from './screens/Profile.jsx';
import Settings from './screens/Settings';
import Post from './components/Post';

function App() {
  return (
    <Router>
      <div className="App">
   
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
      
      </div>
    </Router>
  );
}

export default App;
