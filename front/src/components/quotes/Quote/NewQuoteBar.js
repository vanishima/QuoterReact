import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditing, initializeQuote } from "reducers/quotes/actions";
import useClickOutside from "hooks/useClickOutside";
import { selectEditing } from "reducers/quotes/selectors";
import NewQuote from "./NewQuote";

const NEW_QUOTE = "Write a new quote...";

const NewQuoteBar = () => {
  const dispatch = useDispatch();
  const editing = useSelector(selectEditing);

  const newQuoteRef = useClickOutside(() => {
    console.log("clicked outside");
    dispatch(toggleEditing());
  });

  const toggleEdit = () => {
    dispatch(initializeQuote());
  };

  if (editing) {
    return <NewQuote />;
  }

  return (
    <div className="new-quote" ref={newQuoteRef}>
      <input
        className="inline-edit text"
        type="text"
        placeholder={NEW_QUOTE}
        onClick={toggleEdit}
      />
    </div>
  );
};

export default NewQuoteBar;
