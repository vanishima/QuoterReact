import React from "react";
import { GrNotes } from "react-icons/gr";

import "./styles/MemoButton.css";

const MemoButton = () => {
  return (
    <button className="btn option-button">
      <GrNotes size="1.2rem" />
      <span className="button-name">Memo</span>
    </button>
  );
};

export default MemoButton;
