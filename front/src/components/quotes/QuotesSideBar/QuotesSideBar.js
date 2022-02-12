import React from "react";
import BookList from "./BookList";
import TagList from "./TagList";

import "./styles/quotesSideBar.css";

// https://www.youtube.com/watch?v=EalgZXjDR2Q

const QuotesSideBar = () => {
  return (
    <div>
      <div className="nav">
        <input className="dropdown" type="checkbox" id="menu" />
        <label htmlFor="menu" id="nav-icon">
          &#9776;
        </label>

        <div className="multi-level">
          <BookList />
          <TagList />
        </div>
      </div>
    </div>
  );
};

export default QuotesSideBar;
