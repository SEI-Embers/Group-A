import React from "react";
import "./Homepage.css";
import SideNav from "./components/SideNav";
import Timeline from "./screens/Timeline";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <SideNav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
