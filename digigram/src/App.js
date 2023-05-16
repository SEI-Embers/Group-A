
import logo from './logo.png';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { verifyUser } from "./services/user.js";
import SignIn from "./screens/SignIn.jsx";
import SignUp from "./screens/SignUp.jsx";
import SignOut from "./screens/SignOut.jsx";
import Home from "./screens/Home.jsx";
import Profile from "./screens/Profile.jsx";
import AddPost from "./screens/AddPost.jsx";
import Settings from './screens/Settings';
import Header from './screens/Header';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      {user ? <Header img src={logo} className="App-logo" alt="logo" /> : <></>}
      <Routes>
        {user ? <Route path="/" element={<Home />} />
 : <Route path="/" element={<SignIn />} />}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
