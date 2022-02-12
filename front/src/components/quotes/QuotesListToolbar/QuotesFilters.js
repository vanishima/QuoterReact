import React, { useReducer, useEffect } from "react";

const initialState = {
  bookTags: [],
  selectedBookTags: [],
  quoteTags: [],
  selectedQuoteTags: [],
};

const ACTIONS = {
  START: "START",
  CHANGE_FILTER: "CHANGE_FILTER",
};

const FILTER_LIST = {
  BOOK: "selectedBookTags",
  QUOTE: "selectedQuoteTags",
};

function reducer(state, action) {
  let updatedTags, isTagSelected, filterType;
  switch (action.type) {
    // fetch bookTags
    case ACTIONS.START:
      return state;
    case ACTIONS.CHANGE_FILTER:
      console.log(action);
      filterType = action.payload.filterType;
      updatedTags = state[filterType];
      isTagSelected =
        updatedTags.filter(tag => tag === action.payload.tag).length > 0;
      if (isTagSelected) {
        updatedTags = updatedTags.filter(tag => tag !== action.payload.tag);
        console.log("removed tag:", updatedTags);
      } else {
        updatedTags.push(action.payload.tag);
      }
      // do something to filter quotes
      return { ...state, [filterType]: updatedTags };
    default:
      return state;
  }
}

const QuotesFilters = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { bookTags, selectedBookTags, quoteTags, selectedQuoteTags } = state;
  // console.log("bookTags", bookTags);
  // console.log("selected bookTags", selectedBookTags);
  // console.log("quoteTags", quoteTags);
  // console.log("selected quoteTags", selectedQuoteTags);

  useEffect(() => {
    dispatch({ type: ACTIONS.START });
  }, []);

  const renderBookTagButton = tag => {
    const isTagSelected =
      selectedBookTags.length > 0 &&
      selectedBookTags.filter(t => t === tag).length > 0;
    return (
      <button
        className={`btn btn-outline-secondary me-2${
          isTagSelected ? " active" : ""
        }`}
        onClick={() => {
          dispatch({
            type: ACTIONS.CHANGE_FILTER,
            payload: { tag, filterType: FILTER_LIST.BOOK },
          });
        }}
      >
        {tag}
      </button>
    );
  };

  return (
    <div className="button-group mb-2 ">
      BookTags{renderBookTagButton("fiction")}
    </div>
  );
};

export default QuotesFilters;
