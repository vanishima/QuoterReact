import React from "react";
import Textarea from "components/inputs/Textarea";

import "./styles/EditMemo.css";

const NEW_MEMO = "Write a memo...";

const EditMemo = ({ text, onChange, handleSave }) => {
  return (
    <div className="edit-memo">
      <Textarea
        name="text"
        className="inline-edit quote-text"
        placeholder={NEW_MEMO}
        onChange={onChange}
        required={true}
        dependency={text}
        value={text}
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
