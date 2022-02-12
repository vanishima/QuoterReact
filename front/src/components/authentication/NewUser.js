import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./styles/newUser.css";

// https://codesandbox.io/u/gabrielaEmendez

const NewUser = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const pageSwitcher = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="newUser">
      <div className="appAside" />
      <div className="appForm">
        <div className="pageSwitcher">
          <button
            className={`pageSwitcherItem ${
              showSignUp ? "" : "pageSwitcherItem-active"
            }`}
            onClick={pageSwitcher}
          >
            Sign In
          </button>
          <button
            className={`pageSwitcherItem ${
              showSignUp ? "pageSwitcherItem-active" : ""
            }`}
            onClick={pageSwitcher}
          >
            Sign Up
          </button>
        </div>

        <div className="formTitle">
          <button
            className={`formTitleLink ${
              showSignUp ? "" : "formTitleLink-active"
            }`}
            onClick={pageSwitcher}
          >
            Sign In
          </button>{" "}
          or{" "}
          <button
            className={`formTitleLink ${
              showSignUp ? "formTitleLink-active" : ""
            }`}
            onClick={pageSwitcher}
          >
            Sign Up
          </button>
        </div>
        {showSignUp ? <Signup /> : <Login />}
      </div>
    </div>
  );
};

export default NewUser;
