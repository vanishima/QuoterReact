import React from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { processItem } from "./util";

import { setAuthor, createAuthor } from "reducers/authors/actions";
import { resetBook } from "reducers/books/actions";

const AuthorSelect = ({ className, submitting, authors, currentAuthor }) => {
  const dispatch = useDispatch();
  console.log("currentAuthor", currentAuthor);
  // console.group("AuthorSelect");
  // console.log("default", submitting, isFetching, currentAuthor);
  // console.log("authors", authors);
  // console.groupEnd();

  const handleCreate = authorName => {
    // console.log("createAuthor", authorName);
    dispatch(createAuthor({ name: authorName }));
  };

  const handleChange = author => {
    // console.log("handleChange", author);
    dispatch(setAuthor(author));
    dispatch(resetBook);
  };

  const handleClear = () => {
    console.log("handleClear in BookSelect");
    dispatch(setAuthor(undefined));
    dispatch(resetBook);
  };

  return (
    <CreatableSelect
      className={`${className}`}
      placeholder="Select Author..."
      options={authors}
      value={currentAuthor && processItem(currentAuthor, "name")}
      createOption={handleCreate}
      changeOption={handleChange}
      clearOption={handleClear}
      isDisabled={submitting}
      isClearable
      // isLoading={isFetching}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.authors.loading,
  authors: state.authors.authors,
  currentAuthor: state.authors.currentAuthor,
  ...ownProps,
});

export default connect(mapStateToProps)(AuthorSelect);
