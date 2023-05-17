import { useState } from "react";
import { signIn } from '../services/user.js'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function SignIn(props) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  
  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    console.log(form)
    try {
      const user = await signIn(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Incorrect username and/or password. Try again.',
        username: '',
        password: '',
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

  const { username, password} = form

  return (
    <>
      <h1>Digigram</h1>

      <form onSubmit={onSignIn}>
        <div className="sign-in">
          <h3>Sign In</h3>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter username"
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleChange}
          />
          {renderError()}
        </div>
      </form>
      <Link to="/sign-up" >
          Sign Up
        </Link>    </>
  );
}
