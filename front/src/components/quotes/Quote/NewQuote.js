import React from "react";
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
  selectActiveQuote,
  selectEditing,
  selectLoading,
} from "reducers/quotes/selectors";
import useClickOutside from "hooks/useClickOutside";

import Textarea from "components/inputs/Textarea";
import AuthorSelect from "../../inputs/CreatableSelect/AuthorSelect";
import BookSelect from "../../inputs/CreatableSelect/BookSelect";
import ChapterSelect from "components/inputs/CreatableSelect/ChapterSelect";
import Toolbar from "./Toolbar/Toolbar";
import Tags from "components/quotes/Quote/Tags/Tags";
import Memos from "components/quotes/Quote/Memos/Memos";

import "./styles/NewQuote.css";
import { isoDateWithoutTimezone } from "api/utilsAPI";
import { moveAuthorToFront } from "reducers/authors/actions";
import { moveBookToFront } from "reducers/books/actions";
import { updateQuote } from "reducers/quotes/quoteActions";

const NEW_QUOTE = "Write a new quote...";
const TITLE = "Title";
const user = JSON.parse(localStorage.getItem("currentUser"));

const NewQuote = ({ editing, quote }) => {
  const dispatch = useDispatch();
  const newQuoteRef = useClickOutside(() => {
    console.log("clicked outside");
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
      _.isEmpty(quote.book) ||
      _.isEmpty(quote.author) ||
      quote.text.length === 0
    ) {
      alert("Please fill out all required inputs");
    } else {
      const newQuote = {
        ...quote,
        date: quote.date ? quote.date : isoDateWithoutTimezone(new Date()),
        author: { _id: quote.author._id, name: quote.author.name },
        book: { _id: quote.book._id, title: quote.book.title },
        user: { _id: user.id, name: user.name },
      };
      console.log("newQuote", newQuote);
      if (newQuote._id) {
        dispatch(updateQuote(newQuote));
      } else {
        dispatch(createQuote(newQuote));
      }
      dispatch(moveAuthorToFront(quote.author));
      dispatch(moveBookToFront(quote.book));
    }
  };

  // click outside to close or save
  if (editing || quote?._id) {
    return (
      <div className="new-quote" ref={newQuoteRef}>
        <input
          name="title"
          className="inline-edit"
          type="text"
          placeholder={TITLE}
          onChange={handleInputChange}
        />
        <ChapterSelect book={quote.book} chapter={quote.chapter} />
        <Textarea
          name="text"
          className="inline-edit quote-text"
          placeholder={NEW_QUOTE}
          onChange={handleInputChange}
          required={true}
          dependency={quote}
          value={quote.text}
        />
        <Tags tags={quote.tags} quoteId={quote._id} />
        <div className="author-book-bar mb-2">
          <AuthorSelect quoteId={quote._id} author={quote.author} />
          <BookSelect
            quoteId={quote._id}
            book={quote.book}
            author={quote.author}
          />
        </div>
        <Memos memos={quote.memos} quoteId={quote._id} />
        <Toolbar handleSubmit={handleSubmit} />
      </div>
    );
  } else {
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
  }
};

const mapStateToProps = (state, ownProps) => ({
  loading: selectLoading(state),
  editing: selectEditing(state),
  quote: selectActiveQuote(state),
  ...ownProps,
});

export default connect(mapStateToProps)(NewQuote);
