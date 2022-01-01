import React, { useState } from "react";
import { Link } from "react-router-dom";
// API
import myAuth from "../../api/authAPI";

const SignInForm = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const user = {
      name: name,
      password: password,
    };

    console.log("Attemp to login", user);
    // Attemp to login
    const result = await myAuth.login(user);

    if (!result.ok) {
      setMessage(
        <p className="justify-content-right" style={{ color: "red" }}>
          *{result.msg}
        </p>
      );
    } else {
      alert("Login successful. Welcome back!");
      document.location.href = "/my-quotes";
    }
  };

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={handleSubmit}>
        {message}
        <div className="formField">
          <label htmlFor="name" className="formFieldLabel">
            Username
            <br />
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInput"
            placeholder="Enter your username"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="formField">
          <label htmlFor="password" className="formFieldLabel">
            Password
            <br />
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton">Sign in</button>
          <Link to="/" className="formFieldLink">
            Create an Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
