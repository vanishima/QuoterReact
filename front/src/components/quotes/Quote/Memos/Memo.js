import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeMemoFromQuote,
  updateMemoInQuote,
} from "reducers/quotes/quoteActions";
import { Dropdown } from "react-bootstrap";
import EditMemo from "./EditMemo";
import { getRelativeTime } from "api/utilsAPI";

import "./styles/Memo.css";

const Memo = ({ memo, quoteId, handleChange }) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(memo && memo.text);
  const [truncate, setTruncate] = useState(true);

  const handleEdit = () => {
    console.log("editing");
    setEditing(true);
    handleChange();
  };

  const handleInputChange = e => {
    setText(e.target.value);
  };

  const handleDelete = () => {
    dispatch(removeMemoFromQuote(memo, quoteId));
    handleChange();
  };

  const handleSave = () => {
    const newMemo = { ...memo, text: text };
    dispatch(updateMemoInQuote(newMemo, quoteId));
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const toggleTruncate = () => {
    console.log("toggleTruncate", truncate);
    setTruncate(truncate => !truncate);
  };

  return (
    <div className="memo-container">
      {editing ? (
        <EditMemo
          text={text}
          onChange={handleInputChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      ) : (
        <div className="memo">
          <div className="memo-content">
            <div className={`memo-text ${truncate ? "text-truncate" : ""}`}>
              {memo.text}
              <span className="memo-date">
                {getRelativeTime(memo.date)}
              </span>{" "}
              {!truncate && (
                <span
                  role="button"
                  onClick={toggleTruncate}
                  className="show-less text-truncate"
                >
                  Show Less
                </span>
              )}
            </div>
            {truncate && (
              <span
                role="button"
                onClick={toggleTruncate}
                className="show-more"
              >
                Show More
              </span>
            )}
          </div>

          <Dropdown>
            <Dropdown.Toggle variant="light" className="memo-options-toggle">
              &#8942;
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="memo-options-item" onClick={handleEdit}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                className="memo-options-item delete-button"
                onClick={handleDelete}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default Memo;
