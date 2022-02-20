import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "reducers/quotes/actions";
import { newQuoteSelector } from "reducers/quotes/selectors";

import AuthorSelect from "../../inputs/CreatableSelect/AuthorSelect";
import BookSelect from "../../inputs/CreatableSelect/BookSelect";
import Toolbar from "./Toolbar/Toolbar";
import Label from "./Label";

import "./styles/NewQuote.css";

const NEW_QUOTE = "Write a new quote...";
const TITLE = "Title";

const NewQuote = ({ loading, currentLabel }) => {
  const [editing, setEditing] = useState(false);
  const newQuote = useSelector(state => newQuoteSelector(state));
  console.log("newQuote", newQuote);
  const dispatch = useDispatch();

  const toggleEdit = e => {
    e.preventDefault();
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

  const handleInputChange = e => {
    console.log("handleInputChange", e.target.name, e.target.value);
    dispatch(updateInput(e.target.name, e.target.value));
  };

  if (editing) {
    return (
      <div className="new-quote">
        {editing && (
          <input
            name="title"
            className="inline-edit"
            type="text"
            placeholder={TITLE}
            onChange={handleInputChange}
          />
        )}
        <textarea
          name="text"
          className="inline-edit text"
          type="text"
          placeholder={NEW_QUOTE}
          onClick={toggleEdit}
          onChange={handleInputChange}
        />
        {currentLabel && <Label label={currentLabel} />}
        {/* {renderAuthorBook()} */}
        {editing && <Toolbar />}
      </div>
    );
  } else {
    return (
      <div className="new-quote">
        <input
          className="inline-edit text"
          type="text"
          placeholder={NEW_QUOTE}
          onClick={toggleEdit}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.quotes.loading,
  currentLabel: state.labels.currentLabel,
  ...ownProps,
});

export default connect(mapStateToProps)(NewQuote);
