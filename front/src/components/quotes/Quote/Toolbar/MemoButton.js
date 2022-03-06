import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMemo } from "reducers/quotes/actions";
import { updateQuoteInputListById } from "reducers/quotes/quoteActions";
import { BsSticky } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Popover } from "react-bootstrap";

import EditMemo from "../Memos/EditMemo";

import "./styles/MemoButton.css";

const MemoButton = ({ showText = true, quoteId }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSave = () => {
    if (text.length === 0) return;

    const user = JSON.parse(localStorage.getItem("currentUser"));
    const newMemo = {
      _id: +new Date(),
      user: { _id: user.id, name: user.name },
      text: text,
      date: new Date(),
    };
    console.log("add memo to memo list", newMemo);

    if (quoteId) {
      console.log("quoteId", quoteId);
      dispatch(updateQuoteInputListById(quoteId, "memos", newMemo));
    } else {
      dispatch(addMemo(newMemo));
    }
    setText("");
    document.body.click();
  };

  const AddMemoPopover = (
    <Popover id="add-memo-popover" className="add-memo-popover">
      <div className="add-memo-title">Add memo</div>
      <EditMemo text={text} onChange={handleChange} handleSave={handleSave} />
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      rootClose
      placement="bottom-start"
      overlay={AddMemoPopover}
    >
      <button className="btn add-memo-button">
        <BsSticky size="1.2rem" />
        {showText && <span className="button-name">Memo</span>}
      </button>
    </OverlayTrigger>
  );
};

export default MemoButton;
