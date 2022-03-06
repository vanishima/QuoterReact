import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeMemo, updateMemo } from "reducers/quotes/actions";
import {
  updateQuoteMemoById,
  removeMemoFromQuote,
} from "reducers/quotes/quoteActions";
import { Dropdown } from "react-bootstrap";
import EditMemo from "./EditMemo";

import "./styles/Memo.css";

const Memo = ({ memo, quoteId }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(memo && memo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    console.log("editing");
    setEditing(true);
    // if (quoteId) {
    //   console.log("setEditing quote");
    //   dispatch(setEditingQuote(quoteId));
    // }
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleDelete = () => {
    console.log("handleDelete");
    if (quoteId) {
      console.log("removeMemoFromQuote");
      dispatch(removeMemoFromQuote(quoteId, memo));
    } else {
      console.log("removeMemo");
      dispatch(removeMemo(memo._id));
    }
  };

  const handleSave = () => {
    console.log("Memo quoteId", quoteId);
    const newMemo = { ...memo, text: text };
    if (quoteId) {
      console.log("inside active quote", memo._id);
      dispatch(updateQuoteMemoById(quoteId, newMemo));
    } else {
      console.log("updating memo", text);
      console.log("newMemo", newMemo);
      dispatch(updateMemo(newMemo));
    }
    setEditing(false);
  };

  return (
    <div className="memo">
      {editing ? (
        <EditMemo text={text} onChange={handleChange} handleSave={handleSave} />
      ) : (
        <div className="text text-truncate">{memo.text}</div>
      )}

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
  );
};

export default Memo;
