import React, { useState } from "react";
import { slide as Menu } from 'react-burger-menu'; 
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const handleStateChange = (state) => setIsOpen(state.isOpen);

  return (
    <Menu isOpen={isOpen} onStateChange={handleStateChange}>
      <Link onClick={closeMenu} to="/" id="home" className="menu-item">Home</Link>
      <Link onClick={closeMenu} to="/addpost" id="addpost" className="menu-item">Add Post</Link>
      <Link onClick={closeMenu} to="/profile" id="profile" className="menu-item">Profile</Link>
      <Link onClick={closeMenu} to="/settings" id="settings" className="menu-item">Settings</Link>
      <Link onClick={closeMenu} to="/sign-out" id="sign-out" className="menu-item">Sign Out</Link>
    </Menu>
  );
};

export default HamburgerMenu;
