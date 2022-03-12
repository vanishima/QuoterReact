import { createSelector } from "reselect";
import _ from "lodash";
import { selectCurrentTags } from "reducers/tags/selectors";

export const pageSizeSelector = state => state.quotes.searchParams.pageSize;
export const pageSelector = state => state.quotes.searchParams.page;
export const newQuoteSelector = state => state.quotes.newQuote;
export const dateSelector = state => state.quotes.newQuote.date;
export const selectPrivacy = state => state.quotes.newQuote?.privacy_level;

export const selectQuotes = state => state.quotes.quotes;
export const selectSortedQuotes = createSelector(selectQuotes, quotes => {
  return quotes
    ? _.orderBy(Object.values(quotes), quote => new Date(quote.date), "desc")
    : [];
});

export const selectEditing = state => state.quotes.editing;
export const selectLoading = state => state.quotes.loading;

export const selectNewQuote = state => state.quotes.newQuote;
export const selectActiveQuoteId = state => state.quotes.activeQuoteId;
export const selectActiveQuote = createSelector(
  selectNewQuote,
  selectQuotes,
  selectActiveQuoteId,
  (newQuote, quotes, quoteId) => {
    if (quoteId) {
      return quotes[quoteId];
    }
    return newQuote;
  }
);
export const selectActiveQuoteText = createSelector(
  selectActiveQuote,
  quote => quote.text
);

export const selectTagsSelected = createSelector(
  selectActiveQuote,
  selectNewQuote,
  (activeQuote, newQuote) => {
    if (activeQuote) return activeQuote.tags;
    return newQuote.tags;
  }
);

export const selectQuoteById = createSelector(
  selectQuotes,
  (state, quoteId) => quoteId,
  (quotes, quoteId) => {
    if (quoteId) {
      return quotes[quoteId];
    }
  }
);
