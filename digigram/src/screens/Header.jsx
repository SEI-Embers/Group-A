import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import './AddPost.jsx'
import './Home.jsx'
import './Profile.jsx'
import './Settings.jsx'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        Instagram
      </Link>
      <div className="menu">
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/addpost" className="menu-item">
          Add Post
        </Link>
        <Link to="/profile" className="menu-item">
          Profile
        </Link>
        <Link to="/settings" className="menu-item">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Header;
