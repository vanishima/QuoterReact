import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelEditingQuote, toggleEditing } from "reducers/quotes/actions";
import useClickOutside from "hooks/useClickOutside";
import { selectEditing } from "reducers/quotes/selectors";
import NewQuote from "./NewQuote";

import "./styles/NewQuoteBar.css";

const NEW_QUOTE = "Write a new quote...";

const NewQuoteBar = () => {
  const dispatch = useDispatch();
  const editing = useSelector(selectEditing);

  const newQuoteRef = useClickOutside(() => {
    if (editing) {
      dispatch(cancelEditingQuote());
    }
  });

  const toggleEdit = () => {
    dispatch(toggleEditing());
  };

  if (editing) {
    return (
      <div className="new-quote-container">
        <NewQuote />
      </div>
    );
  }

  return (
    <div className="new-quote-container">
      <div className="new-quote" ref={newQuoteRef}>
        <input
          className="inline-edit text"
          type="text"
          placeholder={NEW_QUOTE}
          onClick={toggleEdit}
        />
      </div>
    </div>
  );
};

export default NewQuoteBar;
