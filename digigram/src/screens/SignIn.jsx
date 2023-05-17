import { useState } from "react";
import { signIn } from '../services/user.js'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function SignIn(props) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
      console.log(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        password: '',
      })
      setIsError(true);
      setErrorMsg('Incorrect username and/or password. Try again.')
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

  const { username, password } = form

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
