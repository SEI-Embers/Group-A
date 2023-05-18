import React from "react";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <form className="settings-form">
      <h2 className="settings-title">Settings</h2>
        <div className="settings-group">
          <input type="text" id="username" name="username" 
          placeholder="Username"
          />
        
          <input type="password" id="password" name="password"
          placeholder="Password"
          />
        </div>
        <button className="settings-button">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
