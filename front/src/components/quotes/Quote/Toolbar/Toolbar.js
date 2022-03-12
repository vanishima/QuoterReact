import React from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
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

  // const toolbarRef = useClickInside(() => {
  //   if (!isEditing && quoteId) {
  //     console.log("not editing", quoteId);
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

      {(!quoteId || isEditing) && (
        <button className="btn quote-option-button" onClick={handleSubmit}>
          Save
        </button>
      )}
      {quoteId && (
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
