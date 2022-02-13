import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "api/axios";
import { useAuth } from "contexts/AuthContext";

const REGISTER_URL = "/auth/register";

const Signup = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("Signup", auth);

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

    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.token;
      // const roles = response?.data?.roles;

      setAuth({ user: response.data.user, token: accessToken });

      setName("");
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMessage(err.response.data.msg);
      }
    }
    setIsSubmitting(false);
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
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
