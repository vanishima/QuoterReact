import React from "react";
import DateButton from "./DateButton";
import LabelButton from "./LabelButton";
import MemoButton from "./MemoButton";
import PrivacyButton from "./PrivacyButton";

import "./styles/Toolbar.css";

const Toolbar = ({ handleSubmit }) => {
  return (
    <div className="option-bar">
      <div className="quote-options">
        <LabelButton />
        <MemoButton />
        <DateButton />
        <PrivacyButton />
      </div>
      <button className="btn save-button" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default Toolbar;
