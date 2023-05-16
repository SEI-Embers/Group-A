import React from "react";
import "./SideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function SideNav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://static.vecteezy.com/system/resources/thumbnails/006/428/710/small/cool-fox-with-sharp-eyes-mascot-logo-design-free-vector.jpg"
        alt="Sidenav Logo"
      />

      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;
