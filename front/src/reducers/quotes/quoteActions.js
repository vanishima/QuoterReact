export const ACTIONS = {
  SET_EDITING_QUOTE: "SET_EDITING_QUOTE",
};

export const setEditingQuote = quoteId => {
  const quote = {};
  return { type: ACTIONS.SET_EDITING_QUOTE, payload: { quote } };
};
