import React from "react";
import { slide as Menu } from 'react-burger-menu'; 
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
 
const HamburgerMenu = () => {
  return (
    <Menu>
      <Link to="/" id="home" className="menu-item">Home</Link>
      <Link to="/addpost" id="addpost" className="menu-item">Add Post</Link>
      <Link to="/profile" id="profile" className="menu-item">Profile</Link>
      <Link to="/settings" id="settings" className="menu-item">Settings</Link>
      <Link to="/sign-out" id="sign-out" className="menu-item">Sign Out</Link>
    </Menu>
  );
};

export default HamburgerMenu;
