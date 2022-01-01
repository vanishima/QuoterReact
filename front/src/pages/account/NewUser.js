import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import "../../styles/newUser.css";

// https://codesandbox.io/u/gabrielaEmendez

const NewUser = () => {
  const [showSignUp, setShowSignUp] = useState(true);
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
        {showSignUp ? <SignUpForm /> : <SignInForm />}
      </div>
    </div>
  );
};

export default NewUser;
