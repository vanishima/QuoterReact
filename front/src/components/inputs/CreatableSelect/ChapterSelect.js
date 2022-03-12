import React from "react";
import { connect, useDispatch } from "react-redux";
import CreatableSelect from "components/inputs/CreatableSelect/CreatableSelect";
import { processItem } from "./util";

import { createChapter } from "reducers/books/actions";
import { selectLoading } from "reducers/quotes/selectors";
import { selectCurrentChapter } from "reducers/books/selectors";
import { setQuoteChapter } from "reducers/quotes/quoteActions";

const ChapterSelect = ({
  quoteId,
  chapter,
  book,
  submitting,
  currentChapter,
}) => {
  const dispatch = useDispatch();
  //   console.group("ChapterSelect");
  // console.log("default", currentChapter, chapters);
  // console.groupEnd();
  // console.log("currentChapter", currentChapter);

  // console.log("chapters", book?.chapters);

  const handleCreate = chapterTitle => {
    const newChapter = { title: chapterTitle, order: 0 };
    dispatch(createChapter(newChapter, book, quoteId));
  };

  // set book to selected and choose author based on _id
  const handleChange = chapter => {
    dispatch(setQuoteChapter(chapter, quoteId));
  };

  const handleClear = () => {
    dispatch(setQuoteChapter(undefined, quoteId));
  };

  return (
    <CreatableSelect
      className="chapter-select"
      placeholder="Select chapter..."
      isClearable={true}
      options={book?.chapters}
      value={processItem(chapter, "label")}
      createOption={handleCreate}
      changeOption={handleChange}
      clearOption={handleClear}
      isDisabled={submitting || !book}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  submitting: selectLoading(state),
  currentChapter: selectCurrentChapter(state),
  ...ownProps,
});

export default connect(mapStateToProps)(ChapterSelect);
