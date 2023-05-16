import { useState } from "react";
// import signup from '../services'

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h3>Welcome! Create Account 😃</h3>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="sign-up">
            <label>Email</label>
            <input
              required
              type="text"
              name="email"
              value={form.email}
              placeholder="Enter Email"
              onChange={handleChange}
            />

            <label>Username</label>
            <input
              required
              type="text"
              name="username"
              value={form.username}
              placeholder="Enter Username"
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              required
              type="text"
              name="password"
              value={form.password}
              placeholder="Enter password"
              onChange={handleChange}
            />

            <label>Confirm Password</label>
            <input
              required
              type="text"
              name="confirnPassword"
              value={form.confirmPassword}
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
