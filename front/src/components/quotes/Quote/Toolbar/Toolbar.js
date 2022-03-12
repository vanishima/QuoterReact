import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import {
  setEditingQuote,
  cancelEditingQuote,
  initializeQuote,
} from "reducers/quotes/actions";

import DateButton from "./DateButton";
import MemoButton from "./MemoButton";
import PrivacyButton from "./PrivacyButton";
import TagButton from "./TagButton";

import "./styles/Toolbar.css";
import { selectActiveQuote, selectQuoteById } from "reducers/quotes/selectors";

const Toolbar = ({
  handleSubmit,
  handleDelete,
  showText,
  quoteId,
  isEditing,
}) => {
  const dispatch = useDispatch();
  const quote = useSelector(state => selectQuoteById(state, quoteId));

  const handleEdit = () => {
    console.log("handleEdit");
    dispatch(setEditingQuote(quoteId));
  };

  const handleCancel = () => {
    console.log("cancel");
    dispatch(cancelEditingQuote());
  };

  const handleClear = () => {
    dispatch(initializeQuote());
  };

  return (
    <div className="option-bar">
      <div className="quote-options">
        <TagButton
          showText={showText}
          quoteId={quoteId}
          handleEdit={handleEdit}
        />
        <MemoButton
          showText={showText}
          quoteId={quoteId}
          handleEdit={handleEdit}
        />
        <DateButton
          showText={showText}
          quoteId={quoteId}
          handleEdit={handleEdit}
          date={quote?.date}
        />
        <PrivacyButton quoteId={quoteId} handleEdit={handleEdit} />
      </div>

      {isEditing && (
        <button className="btn quote-option-button" onClick={handleSubmit}>
          Save
        </button>
      )}
      {!quoteId && (
        <button className="btn quote-option-button" onClick={handleClear}>
          Clear
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
