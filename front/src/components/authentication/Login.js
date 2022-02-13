import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

// API
import axios from "api/axios";

const LOGIN_URL = "/auth/login";

const Login = props => {
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("Login", auth, from);

  // put focus on userRef
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // clear error message when user changes input
  useEffect(() => {
    setErrorMessage("");
  }, [name, password]);

  const handleSubmit = async evt => {
    evt.preventDefault();

    setIsSubmitting(true);

    const user = {
      name: name,
      password: password,
    };

    console.log("Attemp to login", user);

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.token;
      // const roles = response?.data?.roles;

      setAuth({ user: response.data.user, token: accessToken });
      setName("");
      setPassword("");
      console.log("login successful");

      // navigate(from, { replace: true });
      navigate("/");
    } catch (err) {
      setIsSubmitting(false);
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMessage(err.response.data.msg);
      }
    }
  };

  return (
    <section className="formCenter">
      {errorMessage && (
        <p className="justify-content-right" style={{ color: "red" }}>
          *{errorMessage}
        </p>
      )}
      <form className="formFields" onSubmit={handleSubmit}>
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
            onChange={e => {
              setName(e.target.value);
            }}
            ref={userRef}
            required
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
            onChange={e => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>

        <div className="formField">
          <button className="formFieldButton" disabled={isSubmitting}>
            Sign in
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
