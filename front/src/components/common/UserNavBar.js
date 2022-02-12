import React, { useEffect } from "react";
import authAPI from "api/authAPI";

const UserNavBar = () => {
  useEffect(() => {
    authAPI.verifyAuth();
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  const logoutClick = () => {
    authAPI.logout();
    document.location.href = "/";
  };

  const url = new URL(window.location);
  const currPage = url.pathname;
  // console.log("currPage", currPage);

  return (
    <div className="flex-column">
      <nav className="flex-column nav user-navbar">
        <a
          href="/"
          className={`nav-link ${currPage === "/my-quotes" ? "active" : ""}`}
        >
          <div
            className={`nav-item ${currPage === "/my-quotes" ? "active" : ""}`}
          >
            Home
          </div>
        </a>
        <a href="/authors" className="nav-link">
          <div
            className={`nav-item ${currPage === "/authors" ? "active" : ""}`}
          >
            Authors
          </div>
        </a>
        <a href="/books" className="nav-link">
          <div className={`nav-item ${currPage === "/books" ? "active" : ""}`}>
            Books
          </div>
        </a>
        <a href="/comments" className="nav-link">
          <div
            className={`nav-item ${currPage === "/comments" ? "active" : ""}`}
          >
            Comments
          </div>
        </a>
      </nav>
      {user && (
        <div className="user-dashboard">
          <div>{user.name}</div>
          <button
            className="me-2 btn btn-outline-primary"
            onClick={logoutClick}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserNavBar;
