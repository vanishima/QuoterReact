import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  updateQuoteInput,
  updateQuote,
  deleteQuote,
  cancelEditingQuote,
} from "reducers/quotes/actions";
import { selectActiveQuote } from "reducers/quotes/selectors";
import {
  selectBookById,
  selectCurrentBook,
  selectCurrentChapter,
} from "reducers/books/selectors";
import { selectCurrentAuthor } from "reducers/authors/selectors";
import { selectCurrentTags } from "reducers/tags/selectors";
import { selectCurrentLabels } from "reducers/labels/selectors";

import useClickOutside from "hooks/useClickOutside";
import { setAuthor } from "reducers/authors/actions";
import { setBook } from "reducers/books/actions";
import { setChapter } from "reducers/books/actions";

import AuthorSelect from "../../inputs/CreatableSelect/AuthorSelect";
import BookSelect from "../../inputs/CreatableSelect/BookSelect";
import ChapterSelect from "components/inputs/CreatableSelect/ChapterSelect";
import Toolbar from "../NewQuote/Toolbar/Toolbar";
import Labels from "components/quotes/Labels/Labels";
import Tags from "components/quotes/Tags/Tags";
import Memos from "components/quotes/Memos/Memos";

import "components/quotes/NewQuote/styles/NewQuote.css";
import { isoDateWithoutTimezone } from "api/utilsAPI";
import { setTags } from "reducers/tags/actions";

const NEW_QUOTE = "Write a new quote...";
const TITLE = "Title";
const user = JSON.parse(localStorage.getItem("currentUser"));

const QuoteEditing = ({
  quote,
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

  useEffect(() => {
    dispatch(setAuthor(quote.author));
    dispatch(setBook(initialBook));
    dispatch(setChapter(quote.chapter));
    dispatch(setTags(quote.tags));
  }, []);

  console.log("activeQuote", quote);

  const handleInputChange = e => {
    dispatch(updateQuoteInput(e.target.name, e.target.value));
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
        labels: currentLabels.map(label => label.label),
        tags: currentTags.map(tag => tag.label),
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
    <div className="new-quote" ref={editingQuoteRef}>
      <input
        name="title"
        className="inline-edit"
        type="text"
        placeholder={TITLE}
        onChange={handleInputChange}
        value={quote.title}
      />
      <ChapterSelect value={currentChapter} />
      <textarea
        name="text"
        className="inline-edit text"
        type="text"
        placeholder={NEW_QUOTE}
        onChange={handleInputChange}
        required
        value={quote.text}
      />
      <Tags tags={currentTags} />
      <Labels labels={quote.labels} />
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
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  quote: selectActiveQuote(state),
  currentAuthor: selectCurrentAuthor(state),
  currentBook: selectCurrentBook(state),
  currentChapter: selectCurrentChapter(state),
  currentTags: selectCurrentTags(state),
  currentLabels: selectCurrentLabels(state),
  ...ownProps,
});

export default connect(mapStateToProps)(QuoteEditing);
