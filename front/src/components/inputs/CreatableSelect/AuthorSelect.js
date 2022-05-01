// import React from "react";
// import { connect, useDispatch } from "react-redux";
// import AsyncCreatableSelect from "react-select/async-creatable";
// import { processItem } from "./util";

// import { createAuthor } from "reducers/authors/actions";
// import { setQuoteAuthor } from "reducers/quotes/quoteActions";

// import "./styles/AuthorSelect.css";
// import { getPinyin } from "api/utilsAPI";
// import {
//   selectAuthors,
//   selectAuthorsLoading,
//   selectCurrentAuthor,
// } from "reducers/authors/selectors";
// import { selectLoading } from "reducers/quotes/selectors";

// const AuthorSelect = ({
//   submitting,
//   authors,
//   author,
//   currentAuthor,
//   quoteId,
// }) => {
//   const dispatch = useDispatch();
//   // console.log("currentAuthor", currentAuthor);
//   // console.group("AuthorSelect");
//   // console.log("default", submitting, isFetching, currentAuthor);
//   console.log("authors", authors);
//   // console.groupEnd();

//   const getAuthorLabel = author => author.name;
//   const getAuthorValue = author => getPinyin(author.name);

//   const handleCreate = authorName => {
//     console.log("handleCreate", authorName);
//     // console.log("createAuthor", authorName);
//     // const newAuthor = { name: authorName };
//     // dispatch(createAuthor(newAuthor));
//     // by now current Author should be updated
//     // dispatch(setQuoteAuthor(processItem(currentAuthor, "name"), quoteId));
//   };

//   const handleChange = author => {
//     // console.log("handleChange", author);
//     dispatch(setQuoteAuthor(author, quoteId));
//   };

//   const handleClear = () => {
//     console.log("handleClear in AuthorSelect");
//     dispatch(setQuoteAuthor(undefined, quoteId));
//   };

//   return (
//     <AsyncCreatableSelect
//       className="author-select"
//       placeholder="Select Author..."
//       options={authors}
//       // value={author}
//       getOptionLabel={getAuthorLabel}
//       getOptionValue={getAuthorValue}
//       onChange={handleChange}
//       isDisabled={submitting}
//       isClearable
//       onCreateOption={handleCreate}
//     />
//   );
// };

// const mapStateToProps = (state, ownProps) => ({
//   submitting: selectLoading(state),
//   isFetching: selectAuthorsLoading(state),
//   authors: selectAuthors(state),
//   currentAuthor: selectCurrentAuthor(state),
//   ...ownProps,
// });

// export default connect(mapStateToProps)(AuthorSelect);

import React from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { processItem } from "./util";

import { createAuthor } from "reducers/authors/actions";
import { setQuoteAuthor } from "reducers/quotes/quoteActions";

import "./styles/AuthorSelect.css";

const AuthorSelect = ({
  submitting,
  authors,
  author,
  currentAuthor,
  quoteId,
}) => {
  const dispatch = useDispatch();
  // console.log("currentAuthor", currentAuthor);
  // console.group("AuthorSelect");
  // console.log("default", submitting, isFetching, currentAuthor);
  // console.log("authors", authors);
  // console.groupEnd();

  const handleCreate = authorName => {
    // console.log("createAuthor", authorName);
    const newAuthor = { name: authorName };
    dispatch(createAuthor(newAuthor));
    // by now current Author should be updated
    dispatch(setQuoteAuthor(processItem(currentAuthor, "name"), quoteId));
  };

  const handleChange = author => {
    // console.log("handleChange", author);
    dispatch(setQuoteAuthor(author, quoteId));
  };

  const handleClear = () => {
    console.log("handleClear in AuthorSelect");
    dispatch(setQuoteAuthor(undefined, quoteId));
  };

  return (
    <CreatableSelect
      className="author-select"
      placeholder="Select Author..."
      options={authors}
      value={processItem(author, "name")}
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
