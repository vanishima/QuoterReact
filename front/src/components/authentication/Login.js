import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "contexts/AuthContext";

// API
import axios from "api/axios";

const LOGIN_URL = "/auth/login";

const Login = props => {
  const { setAuth, auth } = useAuth();

  const userRef = useRef();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  console.log("Login", auth);

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
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMessage(err.response.data.msg);
      }
    }
    setIsSubmitting(false);
  };

  // const handleSubmit = async evt => {
  //   evt.preventDefault();

  //   setIsSubmitting(true);

  //   const user = {
  //     name: name,
  //     password: password,
  //   };

  //   console.log("Attemp to login", user);
  //   // Attemp to login
  //   const result = await myAuth.login(user);

  //   if (!result.ok) {
  //     setErrorMessage(
  //       <p className="justify-content-right" style={{ color: "red" }}>
  //         *{result.msg}
  //       </p>
  //     );
  //   } else {
  //     alert("Login successful. Welcome back!");
  //     document.location.href = "/";
  //   }
  //   setIsSubmitting(false);
  // };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
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
              {/* <Link to="/" className="formFieldLink">
            Create an Account
          </Link> */}
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
