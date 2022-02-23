import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateInput,
  initializeQuote,
  createQuote,
} from "reducers/quotes/actions";
import { getLabelArray } from "./util";

import AuthorSelect from "../../inputs/CreatableSelect/AuthorSelect";
import BookSelect from "../../inputs/CreatableSelect/BookSelect";
import ChapterSelect from "components/inputs/CreatableSelect/ChapterSelect";
import Toolbar from "./Toolbar/Toolbar";
import Label from "./Label";
import Tag from "./Tag";
import Memo from "./Memo";

import "./styles/NewQuote.css";

const NEW_QUOTE = "Write a new quote...";
const TITLE = "Title";
const user = JSON.parse(localStorage.getItem("currentUser"));

const NewQuote = ({
  editing,
  quote,
  memos,
  currentLabels,
  currentAuthor,
  currentBook,
  currentTags,
}) => {
  const dispatch = useDispatch();

  const toggleEdit = e => {
    e.preventDefault();
    if (!editing) {
      dispatch(initializeQuote());
    }
  };

  const renderTags = () => {
    if (currentTags)
      return (
        <div className="tags mb-2">
          {currentTags.map((tag, i) => (
            <div key={i}>
              <Tag tag={tag} />
            </div>
          ))}
        </div>
      );
  };

  const renderLabels = () => {
    if (currentLabels)
      return (
        <div className="labels mb-2">
          {currentLabels.map((label, i) => (
            <div key={i}>
              <Label label={label} />
            </div>
          ))}
        </div>
      );
  };

  const renderAuthorBook = () => {
    if (editing) {
      return (
        <div className="author-book-bar mb-2">
          <AuthorSelect className="half" />
          <BookSelect className="half" />
        </div>
      );
    }
  };

  const renderMemos = () => {
    if (memos) {
      return (
        <div className="memos">
          {memos.map((memo, i) => (
            <div key={memo._id}>
              <Memo memo={memo} />
            </div>
          ))}
        </div>
      );
    }
  };

  const handleInputChange = e => {
    dispatch(updateInput(e.target.name, e.target.value));
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
    if (!currentAuthor || !currentBook || quote.text.length === 0) {
      alert("Please fill out all required inputs");
    } else {
      const newQuote = {
        ...quote,
        labels: getLabelArray(currentLabels),
        tags: getLabelArray(currentTags),
        author: { _id: currentAuthor._id, name: currentAuthor.name },
        book: { _id: currentBook._id, title: currentBook.title },
        user: { _id: user.id, name: user.name },
      };
      console.log("newQuote", newQuote);
      dispatch(createQuote(newQuote));
    }
  };

  if (editing) {
    return (
      <div className="new-quote">
        <input
          name="title"
          className="inline-edit"
          type="text"
          placeholder={TITLE}
          onChange={handleInputChange}
        />
        <ChapterSelect />
        <textarea
          name="text"
          className="inline-edit text"
          type="text"
          placeholder={NEW_QUOTE}
          onClick={toggleEdit}
          onChange={handleInputChange}
        />
        {renderTags()}
        {renderLabels()}
        {renderAuthorBook()}
        {renderMemos()}
        <Toolbar handleSubmit={handleSubmit} />
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
  editing: state.quotes.editing,
  quote: state.quotes.newQuote,
  memos: state.quotes.newQuote.memos,
  currentLabels: state.labels.currentLabels,
  currentAuthor: state.authors.currentAuthor,
  currentBook: state.books.currentBook,
  currentTags: state.tags.currentTags,
  ...ownProps,
});

export default connect(mapStateToProps)(NewQuote);
