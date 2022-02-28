import React from "react";
import { useDispatch } from "react-redux";
import useClickInside from "hooks/useClickInside";
import { setEditingQuote } from "reducers/quotes/actions";

import DateButton from "./DateButton";
// import LabelButton from "./LabelButton";
import MemoButton from "./MemoButton";
import PrivacyButton from "./PrivacyButton";
import TagButton from "./TagButton";

import "./styles/Toolbar.css";

const Toolbar = ({
  handleSubmit,
  handleDelete,
  showText,
  quoteId,
  isEditing,
}) => {
  const dispatch = useDispatch();

  const toolbarRef = useClickInside(() => {
    if (!isEditing && quoteId) {
      console.log("not editing", quoteId);
      dispatch(setEditingQuote(quoteId));
    }
  });

  return (
    <div className="option-bar" ref={toolbarRef}>
      <div className="quote-options">
        <TagButton showText={showText} quoteId={quoteId} />
        {/* <LabelButton showText={showText} quoteId={quoteId} /> */}
        <MemoButton showText={showText} quoteId={quoteId} />
        <DateButton showText={showText} quoteId={quoteId} />
        <PrivacyButton quoteId={quoteId} />
      </div>
      <button className="btn save-button" onClick={handleSubmit}>
        Save
      </button>
      {isEditing && (
        <button className="btn delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Toolbar;
