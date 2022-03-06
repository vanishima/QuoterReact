import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
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
  isCreating,
  isEditing,
}) => {
  const dispatch = useDispatch();
  const activeQuoteId = useSelector(state => selectActiveQuoteId(state));

  // const toolbarRef = useClickInside(() => {
  //   if (!isEditing && quoteId) {
  //     console.log("not editing", quoteId);
  //     dispatch(setEditingQuote(quoteId));
  //   }
  // });

  const handleEdit = () => {
    console.log("handleEdit");
    dispatch(setEditingQuote(quoteId));
  };

  const handleCancel = () => {
    console.log("cancel");
    dispatch(cancelEditingQuote());
  };

  //ref={toolbarRef}
  return (
    <div className="option-bar">
      <div className="quote-options">
        <TagButton showText={showText} quoteId={quoteId} />
        <MemoButton showText={showText} quoteId={quoteId} />
        <DateButton showText={showText} quoteId={quoteId} />
        <PrivacyButton quoteId={quoteId} />
      </div>

      {(isCreating || isEditing) && (
        <button className="btn quote-option-button" onClick={handleSubmit}>
          Save
        </button>
      )}
      {!isCreating && (
        <Dropdown>
          <Dropdown.Toggle variant="light" className="memo-options-toggle">
            &#8942;
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              className="btn quote-options-item"
              onClick={handleEdit}
            >
              Edit
            </Dropdown.Item>
            <Dropdown.Item
              className="btn quote-options-item"
              onClick={handleCancel}
            >
              Cancel
            </Dropdown.Item>
            <Dropdown.Item
              className="quote-options-item delete-button"
              onClick={handleDelete}
            >
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
};

export default Toolbar;
