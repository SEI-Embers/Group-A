import logo from './digi2.png';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { React, useState } from "react";
// import { verifyUser } from "./services/user.js";
import SignIn from "./screens/SignIn.jsx";
import SignUp from "./screens/SignUp.jsx";
import SignOut from "./screens/SignOut.jsx";
import Home from "./screens/Home.jsx";
import Profile from "./screens/Profile.jsx";
import AddPost from "./screens/AddPost.jsx";
import Settings from './screens/Settings';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await verifyUser();
  //     user ? setUser(user) : setUser(null);
  //   };
  //   fetchUser();
  // }, []);

  return (
    <div className="App">
      {user ? <Header img src={logo} className="App-logo" alt="logo" /> : <></>}
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
