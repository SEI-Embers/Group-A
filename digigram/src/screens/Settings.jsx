import React from "react";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>
      <form className="settings-form">
        <div className="settings-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="settings-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="settings-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="settings-button">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
