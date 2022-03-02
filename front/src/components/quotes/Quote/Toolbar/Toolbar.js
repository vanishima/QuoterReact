import React from "react";
import { useDispatch } from "react-redux";
import useClickInside from "hooks/useClickInside";
import { setEditingQuote, cancelEditingQuote } from "reducers/quotes/actions";

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

  const handleCancel = () => {
    console.log("cancel");
    dispatch(cancelEditingQuote());
  };

  return (
    <div className="option-bar" ref={toolbarRef}>
      <div className="quote-options">
        <TagButton showText={showText} quoteId={quoteId} />
        {/* <LabelButton showText={showText} quoteId={quoteId} /> */}
        <MemoButton showText={showText} quoteId={quoteId} />
        <DateButton showText={showText} quoteId={quoteId} />
        <PrivacyButton quoteId={quoteId} />
      </div>
      {(isEditing || !quoteId) && (
        <>
          <button className="btn quote-option-button" onClick={handleSubmit}>
            Save
          </button>

          <button className="btn quote-option-button" onClick={handleCancel}>
            Cancel
          </button>
        </>
      )}
      {isEditing && (
        <button className="btn quote-option-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Toolbar;
