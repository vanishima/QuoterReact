import React from "react";
import Memo from "./Memo";

const Memos = ({ memos }) => {
  return (
    <div className="memos">
      {memos.map(memo => (
        <div key={memo._id}>
          <Memo memo={memo} />
        </div>
      ))}
    </div>
  );
};

export default Memos;
