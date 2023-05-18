import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../logo.png';
import addPostIcon from '../addpost.png';
import homeIcon from '../home.png';
import profileIcon from '../profile.png';
import settingsIcon from '../settings.png';
import signoutIcon from '../signout.png'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img className="logo-icon" src={logo} alt="Logo" />
      </Link>
      <nav className="menu">
        <Link to="/" className="menu-item">
          <img className="icon" src={homeIcon} alt="Home" />
        </Link>
        <Link to="/addpost" className="menu-item">
          <img className="icon" src={addPostIcon} alt="Add Post" />
        </Link>
        <Link to="/profile" className="menu-item">
          <img className="icon" src={profileIcon} alt="Profile" />
        </Link>
        <Link to="/settings" className="menu-item">
          <img className="icon" src={settingsIcon} alt="Settings" />
        </Link>
        <Link to="/sign-out" className="menu-item signout">
        <img className="icon" src={signoutIcon} alt="Sign Out" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
