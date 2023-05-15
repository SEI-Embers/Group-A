import './App.css';
import { Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { verifyUser } from "./services/user.js";
import Home from "./screens/Home.jsx"
import SignIn from "./screens/SignIn.jsx"
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
        {user ? <Route path="/home" element={<Home />} /> : <Route path="/" element={<SignIn />} /> }
      </Routes>
      {user ? <Nav /> : <></> }
    </div>
  );
}

export default App;
