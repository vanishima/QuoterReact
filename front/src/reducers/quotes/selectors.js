import { createSelector } from "reselect";
import _ from "lodash";
import { selectCurrentTags } from "reducers/tags/selectors";

export const pageSizeSelector = state => state.quotes.searchParams.pageSize;
export const pageSelector = state => state.quotes.searchParams.page;
export const newQuoteSelector = state => state.quotes.newQuote;
export const dateSelector = state => state.quotes.newQuote.date;

export const selectQuotes = state => state.quotes.quotes;
export const selectSortedQuotes = createSelector(selectQuotes, quotes => {
  return quotes
    ? _.orderBy(Object.values(quotes), quote => new Date(quote.date), "desc")
    : [];
});

export const selectEditing = state => state.quotes.editing;
export const selectLoading = state => state.quotes.loading;

export const selectNewQuote = state => state.quotes.activeQuote;
export const selectActiveQuoteId = state => state.quotes.activeQuoteId;
export const selectActiveQuote = createSelector(
  selectQuotes,
  selectActiveQuoteId,
  (quotes, quoteId) => {
    return quotes[quoteId];
  }
);
export const selectActiveQuoteText = createSelector(
  selectActiveQuote,
  quote => quote.text
);

export const selectTagsSelected = createSelector(
  selectCurrentTags,
  selectActiveQuote,
  (currentTags, activeQuote) => {
    if (activeQuote) return activeQuote.tags;
    return currentTags;
  }
);
