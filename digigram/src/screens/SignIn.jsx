import { useState } from "react";
import { signIn } from '../services/user.js'
import { useNavigate, Link } from 'react-router-dom';

export default function SignIn(props) {
  const navigate = useNavigate();

  // State to manage the form inputs and error handling
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Update form state when input values change
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  
  // Handle sign-in form submission
  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    console.log(form);

    try {
      const user = await signIn(form);
      setUser(user);
      console.log(user);
      navigate('/');
    } catch (error) {
      console.error(error);
      setForm({
        username: '',
        password: '',
      });
      setIsError(true);
      setErrorMsg('Incorrect username and/or password. Try again.');
    }
  };

  // Render a button or error message
  const renderError = () => {
    const toggleForm = isError ? "danger" : "";
    if (isError) {
      return (
        <button type="submit" className={toggleForm}>
          {errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { username, password } = form;

  return (
    <>
      {/* Heading */}
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
          {/* Render error button or message */}
          {renderError()}
        </div>
      </form>

      {/* Link to sign-up page */}
      <Link to="/sign-up">Sign Up</Link>
    </>
  );
}
