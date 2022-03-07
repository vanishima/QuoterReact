import React from "react";
import { useSelector } from "react-redux";
import { selectShowMemo } from "reducers/theme/selectors";
import Memo from "./Memo";

import "./styles/Memos.css";

const Memos = ({ memos, quoteId }) => {
  const showMemo = useSelector(selectShowMemo);
  if (!showMemo && quoteId) return null;

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
