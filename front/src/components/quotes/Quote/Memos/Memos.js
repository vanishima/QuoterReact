import React from "react";
import Memo from "./Memo";

const Memos = ({ memos, quoteId }) => {
  return (
    <div className="memos">
      {memos.map(memo => (
        <div key={memo._id}>
          <Memo memo={memo} quoteId={quoteId} />
        </div>
      ))}
    </div>
  );
};

export default Memos;
