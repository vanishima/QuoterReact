import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import _ from "lodash";
import {
  updateQuoteInput,
  initializeQuote,
  createQuote,
  toggleEditing,
} from "reducers/quotes/actions";
import {
  selectNewQuote,
  selectEditing,
  selectLoading,
} from "reducers/quotes/selectors";
import {
  selectCurrentBook,
  selectCurrentChapter,
} from "reducers/books/selectors";
import { selectCurrentAuthor } from "reducers/authors/selectors";
import { selectCurrentTags } from "reducers/tags/selectors";
import { selectCurrentLabels } from "reducers/labels/selectors";
import useClickOutside from "hooks/useClickOutside";

import Textarea from "components/inputs/Textarea";
import AuthorSelect from "../../inputs/CreatableSelect/AuthorSelect";
import BookSelect from "../../inputs/CreatableSelect/BookSelect";
import ChapterSelect from "components/inputs/CreatableSelect/ChapterSelect";
import Toolbar from "./Toolbar/Toolbar";
import Labels from "components/quotes/Quote/Labels/Labels";
import Tags from "components/quotes/Quote/Tags/Tags";
import Memos from "components/quotes/Quote/Memos/Memos";

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
  const newQuoteRef = useClickOutside(() => {
    dispatch(toggleEditing());
  });

  const toggleEdit = () => {
    dispatch(initializeQuote());
  };

  const handleInputChange = e => {
    dispatch(updateQuoteInput(e.target.name, e.target.value));
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
      const activeQuote = {
        ...quote,
        date: isoDateWithoutTimezone(new Date()),
        labels: currentLabels.map(label => label.label),
        tags: currentTags.map(tag => tag.label),
        author: { _id: currentAuthor._id, name: currentAuthor.name },
        book: { _id: currentBook._id, title: currentBook.title },
        user: { _id: user.id, name: user.name },
        chapter: currentChapter,
      };
      console.log("activeQuote", activeQuote);
      dispatch(createQuote(activeQuote));
    }
  };

  // click outside to close or save
  return (
    <div className="new-quote" ref={newQuoteRef}>
      {editing ? (
        <>
          <input
            name="title"
            className="inline-edit"
            type="text"
            placeholder={TITLE}
            onChange={handleInputChange}
          />
          <ChapterSelect />
          <Textarea
            name="text"
            className="inline-edit quote-text"
            placeholder={NEW_QUOTE}
            onChange={handleInputChange}
            required={true}
            dependency={quote}
            value={quote.text}
          />
          <Tags tags={currentTags} />
          <Labels labels={currentLabels} />
          <div className="author-book-bar mb-2">
            <AuthorSelect className="half" />
            <BookSelect className="half" />
          </div>
          <Memos memos={quote.memos} />
          <Toolbar handleSubmit={handleSubmit} />
        </>
      ) : (
        <input
          className="inline-edit text"
          type="text"
          placeholder={NEW_QUOTE}
          onClick={toggleEdit}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  loading: selectLoading(state),
  editing: selectEditing(state),
  quote: selectNewQuote(state),
  currentAuthor: selectCurrentAuthor(state),
  currentBook: selectCurrentBook(state),
  currentChapter: selectCurrentChapter(state),
  currentTags: selectCurrentTags(state),
  currentLabels: selectCurrentLabels(state),
  ...ownProps,
});

export default connect(mapStateToProps)(NewQuote);
