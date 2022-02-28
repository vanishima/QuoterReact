export const QUOTE_ACTIONS = {
  SET_EDITING_QUOTE: "SET_EDITING_QUOTE",
  UPDATE_QUOTE_INPUT_BY_ID: "UPDATE_QUOTE_INPUT_BY_ID",
  UPDATE_QUOTE_INPUT_LIST_BY_ID: "UPDATE_QUOTE_INPUT_LIST_BY_ID",
  UPDATE_QUOTE_AUTHOR_BY_ID: "UPDATE_QUOTE_AUTHOR_BY_ID",
  UPDATE_QUOTE_BOOK_BY_ID: "UPDATE_QUOTE_BOOK_BY_ID",
};

export const setEditingQuote = quoteId => {
  const quote = {};
  return { type: QUOTE_ACTIONS.SET_EDITING_QUOTE, payload: { quote } };
};

export const updateQuoteInputById = (quoteId, key, value) => ({
  type: QUOTE_ACTIONS.UPDATE_QUOTE_INPUT_BY_ID,
  payload: { quoteId, key, value },
});

export const updateQuoteInputListById = (quoteId, key, value) => ({
  type: QUOTE_ACTIONS.UPDATE_QUOTE_INPUT_LIST_BY_ID,
  payload: { quoteId, key, value },
});

export const updateQuoteAuthorById = (quoteId, author) => ({
  type: QUOTE_ACTIONS.UPDATE_QUOTE_AUTHOR_BY_ID,
  payload: { quoteId, author },
});

export const updateQuoteBookById = (quoteId, author, book) => ({
  type: QUOTE_ACTIONS.UPDATE_QUOTE_BOOK_BY_ID,
  payload: { quoteId, author, book },
});
