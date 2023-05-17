import { useState } from "react";
import { signUp } from '../services/user.js'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: "",
    re_password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  
  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: "",
        password: "",
        re_password: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      })
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { username, password, re_password } = form

  return (
    <>
      <h3>Welcome! Create Account 😃</h3>
      <form onSubmit={onSignUp}>
        <div className="container">
          <div className="sign-up">
            {/* <label>Email</label>
            <input
              required
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange}
            /> */}

            <label>Username</label>
            <input
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleChange}
            />

            <label>Confirm Password</label>
            <input
              required
              type="password"
              name="re_password"
              value={re_password}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            {renderError()}
          </div>
        </div>
      </form>
    </>
  );
}
