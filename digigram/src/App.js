import './App.css';
import { Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { verifyUser } from "./services/user.js";
import SignIn from "./screens/SignIn.jsx"
import SignUp from "./screens/SignUp.jsx"
import SignOut from "./screens/SignOut.jsx"
import Home from "./screens/Home.jsx"
import Profile from "./screens/Profile.jsx"
import AddPost from "./screens/AddPost.jsx"
import UpdateUser from "./screens/UpdateUser.jsx"
import Nav from "./components/Nav.jsx"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<AddPost />} />
        <Route path="/update" element={<UpdateUser />} />
      </Routes>
      {user ? <Nav /> : <></> }
    </div>
  );
}

export default App;
