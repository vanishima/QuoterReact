import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useClickInside from "hooks/useClickInside";
import { setEditingQuote, cancelEditingQuote } from "reducers/quotes/actions";

import DateButton from "./DateButton";
// import LabelButton from "./LabelButton";
import MemoButton from "./MemoButton";
import PrivacyButton from "./PrivacyButton";
import TagButton from "./TagButton";

import "./styles/Toolbar.css";
import { selectActiveQuoteId } from "reducers/quotes/selectors";

const Toolbar = ({
  handleSubmit,
  handleDelete,
  showText,
  quoteId,
  isEditing,
}) => {
  const dispatch = useDispatch();
  const activeQuoteId = useSelector(state => selectActiveQuoteId(state));
  const editing = activeQuoteId === quoteId;

  // const toolbarRef = useClickInside(() => {
  //   if (!isEditing && quoteId) {
  //     console.log("not editing", quoteId);
  //     dispatch(setEditingQuote(quoteId));
  //   }
  // });

  const handleCancel = () => {
    console.log("cancel");
    dispatch(cancelEditingQuote());
  };

  const renderButtons = () => {
    if (isEditing) {
      return (
        <button className={`btn quote-option-button}`} onClick={handleSubmit}>
          Save
        </button>
      );
    } else {
      return (
        <>
          <button className={`btn quote-option-button}`} onClick={handleSubmit}>
            Save
          </button>
          <button className={`btn quote-option-button}`} onClick={handleCancel}>
            Cancel
          </button>
          <button className={`btn quote-option-button}`} onClick={handleDelete}>
            Delete
          </button>
        </>
      );
    }
  };
  //ref={toolbarRef}
  return (
    <div className="option-bar">
      <div className="quote-options">
        <TagButton showText={showText} quoteId={quoteId} />
        {/* <LabelButton showText={showText} quoteId={quoteId} /> */}
        <MemoButton showText={showText} quoteId={quoteId} />
        <DateButton showText={showText} quoteId={quoteId} />
        <PrivacyButton quoteId={quoteId} />
      </div>

      <div className="quote-options-button">{renderButtons()}</div>
    </div>
  );
};

export default Toolbar;
