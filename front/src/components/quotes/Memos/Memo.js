import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeMemo, updateMemo } from "reducers/quotes/actions";
import { Dropdown } from "react-bootstrap";
import EditMemo from "./EditMemo";

import "./styles/Memo.css";

const Memo = ({ memo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(memo && memo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    // console.log("editing");
    setEditing(true);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleDelete = () => {
    dispatch(removeMemo(memo._id));
  };

  const handleSave = () => {
    // console.log("updating memo", text);
    const newMemo = { ...memo, text: text };
    // console.log("newMemo", newMemo);
    dispatch(updateMemo(newMemo));
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
          <Dropdown.Item className="memo-options-item" onClick={handleDelete}>
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Memo;
