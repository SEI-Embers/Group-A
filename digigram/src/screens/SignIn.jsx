import { useState } from "react";

export default function SignIn() {
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
      <h1>Digigram</h1>

      <form onSubmit={SignIn}>
        <div className="sign-in">
          <h3>Sign In</h3>
          <input
            required
            name="username"
            value={form.username}
            placeholder="Enter username"
            onChange={handleChange}
          />
          <input
            required
            name="password"
            value={form.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
          {renderError()}
        </div>
      </form>
    </>
  );
}
