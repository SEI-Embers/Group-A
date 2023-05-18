
import logo from './logo.png';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "./services/user.js";
import SignIn from "./screens/SignIn.jsx";
import SignUp from "./screens/SignUp.jsx";
import SignOut from "./screens/SignOut.jsx";
import Home from "./screens/Home.jsx";
import Profile from "./screens/Profile.jsx";
import AddPost from "./screens/AddPost.jsx";
import Settings from './screens/Settings';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      {user ? <Header img src={logo} className="App-logo" alt="logo" setUser={setUser}/> : <></>}
      <Routes>
        {user ? <Route path="/" element={<Home setUser={setUser} />} />
              : <Route path="/" element={<SignIn setUser={setUser} />} />}
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        <Route path="/profile" element={<Profile setUser={setUser} />} />
        <Route path="/addpost" element={<AddPost setUser={setUser} />} />
        <Route path="/settings" element={<Settings setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
