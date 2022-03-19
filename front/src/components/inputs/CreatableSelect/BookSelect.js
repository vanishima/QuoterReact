import React from "react";
import _ from "lodash";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { processItem } from "./util";

import { createBook } from "reducers/books/actions";
import { setQuoteBookAuthor, setQuoteBook } from "reducers/quotes/quoteActions";

import "./styles/BookSelect.css";
import { selectCurrentBook } from "reducers/books/selectors";

const BookSelect = ({
  submitting,
  quoteId,
  book,
  books,
  currentBook,
  author,
  authors,
}) => {
  const dispatch = useDispatch();
  // console.group("BookSelect");
  // console.log("currentBook", currentBook);
  // console.log("books", books);
  // console.groupEnd();

  const handleCreate = bookTitle => {
    if (_.isEmpty(author)) {
      alert("Please select an author first");
    } else {
      const newBook = {
        title: bookTitle,
        author: { _id: author._id, name: author.name },
      };
      console.log("newBook", newBook);
      dispatch(createBook(newBook));
    }
  };

  // set book to selected and choose author based on _id
  const handleChange = book => {
    console.log("handleChange", book);
    dispatch(setQuoteBookAuthor(book, quoteId));
  };

  const handleClear = () => {
    // dispatch(resetBook);
    dispatch(setQuoteBook(undefined, quoteId));
  };

  return (
    <CreatableSelect
      className="book-select"
      placeholder="Select Book..."
      options={books}
      value={processItem(book, "title")}
      createOption={handleCreate}
      changeOption={handleChange}
      clearOption={handleClear}
      isDisabled={submitting}
      isClearable
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.books.loading,
  books: state.books.books,
  currentBook: selectCurrentBook(state),
  authors: state.authors.authors,
  ...ownProps,
});

export default connect(mapStateToProps)(BookSelect);
