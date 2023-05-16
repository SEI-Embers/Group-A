import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import '../screens/AddPost.jsx'
import '../screens/Home.jsx'
import '../screens/Profile.jsx'
import '../screens/Settings.jsx'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        Digigram
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
        <Link to="/sign-out" className="menu-item">
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Header;
