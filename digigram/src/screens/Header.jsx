import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from './logo.png';
import addPostIcon from '../addpost.png';
import homeIcon from '../home.png';
import profileIcon from '../profile.png';
import settingsIcon from '../settings.png';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="menu">
        <Link to="/" className="menu-item">
          <img src={homeIcon} alt="Home" />
        </Link>
        <Link to="/addpost" className="menu-item">
          <img src={addPostIcon} alt="Add Post" />
        </Link>
        <Link to="/profile" className="menu-item">
          <img src={profileIcon} alt="Profile" />
        </Link>
        <Link to="/settings" className="menu-item">
          <img src={settingsIcon} alt="Settings" />
        </Link>
        <Link to="/sign-out" className="menu-item">
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Header;
