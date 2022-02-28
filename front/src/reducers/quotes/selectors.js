export const pageSizeSelector = state => state.quotes.searchParams.pageSize;
export const pageSelector = state => state.quotes.searchParams.page;
export const newQuoteSelector = state => state.quotes.newQuote;
export const dateSelector = state => state.quotes.newQuote.date;

export const selectEditing = state => state.quotes.editing;
export const selectLoading = state => state.quotes.loading;
export const selectActiveQuote = state => state.quotes.activeQuote;
