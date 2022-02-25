import React from "react";

import "./styles/EditMemo.css";

const NEW_MEMO = "Write a memo...";

const EditMemo = ({ text, onChange, handleSave }) => {
  return (
    <div className="edit-memo">
      <textarea
        name="text"
        className="inline-edit text text-box"
        type="text"
        value={text}
        placeholder={NEW_MEMO}
        onChange={onChange}
      />
      <div className="actions">
        <button onClick={handleSave} className="btn save-memo-button">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditMemo;
