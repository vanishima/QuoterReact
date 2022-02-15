import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { signup } from "reducers/user/actions";
import { useEffect } from "react";

const Signup = ({ token, error, loading }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async evt => {
    evt.preventDefault();

    const user = {
      email: email,
      name: name,
      password: password,
    };
    console.log("Attemp to register", user);
    dispatch(signup(user));
  };

  useEffect(() => {
    if (token) {
      console.log("got token??", token);
      navigate("/quotes");
    }
  }, [token, navigate]);

  return (
    <div className="formCenter">
      Redux
      <form onSubmit={handleSubmit} className="formFields">
        {error && (
          <p className="justify-content-right" style={{ color: "red" }}>
            *{error}
          </p>
        )}
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
          <button className="formFieldButton" disabled={loading}>
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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  token: state.user.token,
  loading: state.user.loading,
  error: state.user.error,
});

export default connect(mapStateToProps)(Signup);
