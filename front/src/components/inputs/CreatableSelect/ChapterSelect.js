import React from "react";
import _ from "lodash";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { processItem } from "./util";

import {
  createChapter,
  setChapter,
  resetChapter,
} from "reducers/books/actions";

const ChapterSelect = ({
  className,
  submitting,
  chapters = [],
  currentBook,
  currentChapter,
}) => {
  const dispatch = useDispatch();
  //   console.group("ChapterSelect");
  // console.log("default", currentChapter, chapters);
  console.log("chapters", chapters);
  // console.groupEnd();

  const handleCreate = chapterTitle => {
    const newChapter = { title: chapterTitle, order: 0 };
    // console.log("createChapter", newChapter);
    dispatch(createChapter(newChapter, currentBook));
  };

  // set book to selected and choose author based on _id
  const handleChange = chapter => {
    dispatch(setChapter(chapter));
  };

  const handleClear = () => {
    dispatch(resetChapter());
  };

  return (
    <CreatableSelect
      className={`${className}`}
      placeholder="Select chapter..."
      isClearable={true}
      options={chapters}
      value={currentChapter && processItem(currentChapter, "label")}
      createOption={handleCreate}
      changeOption={handleChange}
      clearOption={handleClear}
      isDisabled={submitting || _.isEmpty(currentBook)}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: state.quotes.loading,
  isFetching: state.books.loading,
  currentBook: state.books.currentBook,
  chapters: state.books.currentBook?.chapters,
  currentChapter: state.books.currentChapter,
  ...ownProps,
});

export default connect(mapStateToProps)(ChapterSelect);
