import React from "react";
import LabelButton from "./LabelButton";
import MemoButton from "./MemoButton";

import "./styles/Toolbar.css";

const Toolbar = () => {
  return (
    <div className="option-bar">
      <div className="quote-options">
        <LabelButton />
        <MemoButton />
      </div>
      <button className="btn create-button">Save</button>
    </div>
  );
};

export default Toolbar;
