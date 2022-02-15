import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "reducers/user/actions";

const Login = ({ token, error, loading }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async evt => {
    evt.preventDefault();

    const user = {
      name: name,
      password: password,
    };
    console.log("Attemp to login", user);
    dispatch(login(user));
  };

  useEffect(() => {
    if (token) {
      console.log("got token");
      navigate("/quotes");
    }
  }, [token, navigate]);

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={handleSubmit}>
        {error && (
          <p className="justify-content-right" style={{ color: "red" }}>
            *{error}
          </p>
        )}
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
          />
        </div>

        <div className="formField">
          <button className="formFieldButton" disabled={loading}>
            Sign in
          </button>
          <Link to="/" className="formFieldLink">
            Create an Account
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.user.token,
  loading: state.user.loading,
  error: state.user.error,
});

export default connect(mapStateToProps)(Login);
