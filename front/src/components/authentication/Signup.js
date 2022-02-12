import React, { useState } from "react";
import { Link } from "react-router-dom";

// API
import myAuth from "../../api/authAPI";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async evt => {
    evt.preventDefault();

    setIsSubmitting(true);

    const user = {
      email: email,
      name: name,
      password: password,
    };
    console.log("Attemp to register", user);

    const result = await myAuth.register(user);

    if (!result.ok) {
      setMessage(
        <p className="justify-content-right" style={{ color: "red" }}>
          *{result.msg}
        </p>
      );
    } else {
      alert("Register successful. Welcome to Quoter!");
      document.location.href = "/";
    }
    setIsSubmitting(false);
  };

  return (
    <div className="formCenter">
      <form onSubmit={handleSubmit} className="formFields">
        {message}
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInput"
            placeholder="Enter your username"
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton" disabled={isSubmitting}>
            Sign Up
          </button>{" "}
          <Link to="/sign-in" className="formFieldLink">
            I'm already member
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
