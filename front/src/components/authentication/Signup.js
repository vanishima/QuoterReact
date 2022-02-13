import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";

const Signup = () => {
  const userRef = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  // put focus on userRef
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // clear error errorMessage when user changes input
  useEffect(() => {
    setErrorMessage("");
  }, [name, password]);

  const handleSubmit = async evt => {
    evt.preventDefault();

    setIsSubmitting(true);

    const user = {
      email: email,
      name: name,
      password: password,
    };
    console.log("Attemp to register", user);
    const message = await signup(user);
    setIsSubmitting(false);
    console.log("message", message);
    if (!message) {
      navigate("/");
    }
  };

  return (
    <section className="formCenter">
      {errorMessage && (
        <p className="justify-content-right" style={{ color: "red" }}>
          *{errorMessage}
        </p>
      )}
      <form onSubmit={handleSubmit} className="formFields">
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Username
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
            ref={userRef}
            required
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
            required
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
            required
          />
        </div>

        <div className="formField">
          <button className="formFieldButton" disabled={isSubmitting}>
            Sign Up
          </button>{" "}
          {/* <Link to="/sign-in" className="formFieldLink">
            I'm already member
          </Link> */}
        </div>
      </form>
    </section>
  );
};

export default Signup;
