import React from "react";
import { useState } from "react";
import AuthorSelect from "./AuthorSelect";
import BookSelect from "./BookSelect";

import "./styles/NewQuote.css";

const NEW_QUOTE = "Write a new quote...";
const TITLE = "Title";

const NewQuote = () => {
  const [editing, setEditing] = useState(false);

  const toggleEdit = e => {
    e.preventDefault();
    console.log("toggled");
    if (!editing) {
      setEditing(!editing);
    }
  };

  const renderAuthorBook = () => {
    if (editing) {
      return (
        <div className="author-book-bar">
          <AuthorSelect className="half" />
          <BookSelect className="half" />
        </div>
      );
    }
  };

  return (
    <div className="new-quote">
      {editing && (
        <input className="inline-edit" type="text" placeholder={TITLE} />
      )}
      <input
        className="inline-edit"
        type="text"
        placeholder={NEW_QUOTE}
        onClick={toggleEdit}
      />
      {renderAuthorBook()}
    </div>
  );
};

export default NewQuote;
