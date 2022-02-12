import { combineReducers } from "redux";
// import quotes from "reducers/quotes/quotes";

// const rootReducer = combineReducers({
//   quotes: quotes,
// });

import displayReducer from "reducers/quotes/display";
import quotesListReducer from "reducers/quotes/quotesList";

const rootReducer = combineReducers({
  quotes: quotesListReducer,
  display: displayReducer,
});

export default rootReducer;
