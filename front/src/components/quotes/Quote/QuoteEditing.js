import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  updateQuote,
  deleteQuote,
  cancelEditingQuote,
} from "reducers/quotes/actions";
import {
  updateQuoteInputById,
  updateQuoteInputListById,
} from "reducers/quotes/quoteActions";
import {
  selectActiveQuote,
  selectActiveQuoteId,
} from "reducers/quotes/selectors";
import {
  selectBookById,
  selectCurrentBook,
  selectCurrentChapter,
} from "reducers/books/selectors";
import { selectCurrentAuthor } from "reducers/authors/selectors";
import { selectCurrentTags, selectTagsOptions } from "reducers/tags/selectors";

import useClickOutside from "hooks/useClickOutside";
import { setAuthor } from "reducers/authors/actions";
import { setBook } from "reducers/books/actions";
import { setChapter } from "reducers/books/actions";

import Textarea from "components/inputs/Textarea";
import AuthorSelect from "../../inputs/CreatableSelect/AuthorSelect";
import BookSelect from "../../inputs/CreatableSelect/BookSelect";
import ChapterSelect from "components/inputs/CreatableSelect/ChapterSelect";
import Toolbar from "./Toolbar/Toolbar";
import Tags from "components/quotes/Quote/Tags/Tags";
import Memos from "components/quotes/Quote/Memos/Memos";

import "./styles/NewQuote.css";
import { isoDateWithoutTimezone } from "api/utilsAPI";

const NEW_QUOTE = "Write a new quote...";
const TITLE = "Title";
const user = JSON.parse(localStorage.getItem("currentUser"));

const QuoteEditing = ({
  quote,
  activeQuoteId,
  currentAuthor,
  currentBook,
  currentTags,
  currentLabels,
  currentChapter,
}) => {
  const dispatch = useDispatch();
  const editingQuoteRef = useClickOutside(() => {
    console.log("clicked outside", quote._id);
    dispatch(cancelEditingQuote());
  });
  const initialBook = useSelector(state =>
    selectBookById(state, quote.book._id)
  );
  const initialTags = useSelector(state =>
    selectTagsOptions(state, quote.tags)
  );

  useEffect(() => {
    dispatch(setAuthor(quote.author));
    dispatch(setBook(initialBook));
    dispatch(setChapter(quote.chapter));
    dispatch(updateQuoteInputById(activeQuoteId, "tags", initialTags));
  }, []);

  const handleInputChange = e => {
    console.log("handleInputChange", quote._id, e.target.name, e.target.value);
    dispatch(updateQuoteInputById(quote._id, e.target.name, e.target.value));
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
    if (
      _.isEmpty(quote.author) ||
      _.isEmpty(quote.book) ||
      quote.text.length === 0
    ) {
      alert("Please fill out all required inputs");
    } else {
      const newQuote = {
        ...quote,
        date: isoDateWithoutTimezone(new Date()),
        tags: quote.tags.map(tag => tag.label),
        author: { _id: currentAuthor._id, name: currentAuthor.name },
        book: { _id: currentBook._id, title: currentBook.title },
        user: { _id: user.id, name: user.name },
        chapter: currentChapter,
      };
      console.log("newQuote", newQuote);
      dispatch(updateQuote(newQuote));
    }
  };

  const handleDelete = () => {
    dispatch(deleteQuote(quote._id));
  };

  return (
    <div className="editing-quote" ref={editingQuoteRef}>
      <input
        name="title"
        className="inline-edit"
        type="text"
        placeholder={TITLE}
        onChange={handleInputChange}
        value={quote.title}
      />
      <ChapterSelect value={currentChapter} />
      <Textarea
        name="text"
        className="inline-edit quote-text"
        placeholder={NEW_QUOTE}
        onChange={handleInputChange}
        required={true}
        dependency={quote}
        value={quote.text}
      />
      <Tags tags={quote.tags} />
      <div className="author-book-bar mb-2">
        <AuthorSelect className="half" />
        <BookSelect className="half" />
      </div>
      <Memos memos={quote.memos} />
      <Toolbar
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        quoteId={quote._id}
        isEditing={true}
        showText={false}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  quote: selectActiveQuote(state),
  activeQuoteId: selectActiveQuoteId(state),
  currentAuthor: selectCurrentAuthor(state),
  currentBook: selectCurrentBook(state),
  currentChapter: selectCurrentChapter(state),
  currentTags: selectCurrentTags(state),
  ...ownProps,
});

export default connect(mapStateToProps)(QuoteEditing);
