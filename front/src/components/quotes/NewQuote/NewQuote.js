import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import _ from "lodash";
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
import Labels from "components/quotes/Labels/Labels";
import Tags from "components/quotes/Tags/Tags";
import Memos from "components/quotes/Memos/Memos";

import "./styles/NewQuote.css";
import { isoDateWithoutTimezone } from "api/utilsAPI";

const NEW_QUOTE = "Write a new quote...";
const TITLE = "Title";
const user = JSON.parse(localStorage.getItem("currentUser"));

const NewQuote = ({
  editing,
  quote,
  currentLabels,
  currentAuthor,
  currentBook,
  currentTags,
  currentChapter,
}) => {
  const dispatch = useDispatch();

  const toggleEdit = e => {
    e.preventDefault();
    if (!editing) {
      dispatch(initializeQuote());
    }
  };

  const handleInputChange = e => {
    dispatch(updateInput(e.target.name, e.target.value));
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
    if (
      _.isEmpty(currentAuthor) ||
      _.isEmpty(currentBook) ||
      quote.text.length === 0
    ) {
      alert("Please fill out all required inputs");
    } else {
      const newQuote = {
        ...quote,
        date: isoDateWithoutTimezone(new Date()),
        labels: getLabelArray(currentLabels),
        tags: getLabelArray(currentTags),
        author: { _id: currentAuthor._id, name: currentAuthor.name },
        book: { _id: currentBook._id, title: currentBook.title },
        user: { _id: user.id, name: user.name },
        chapter: currentChapter,
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
          required
        />
        <Tags tags={currentTags} />
        <Labels labels={currentLabels} />
        <div className="author-book-bar mb-2">
          <AuthorSelect className="half" />
          <BookSelect className="half" />
        </div>
        <Memos memos={quote.memos} />
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
  currentLabels: state.labels.currentLabels,
  currentAuthor: state.authors.currentAuthor,
  currentBook: state.books.currentBook,
  currentChapter: state.books.currentChapter,
  currentTags: state.tags.currentTags,
  ...ownProps,
});

export default connect(mapStateToProps)(NewQuote);
