import { combineReducers } from "redux";
import displayReducer from "reducers/quotes/display";
import quotesListReducer from "reducers/quotes/quotesList";

const rootReducer = combineReducers({
  quotes: quotesListReducer,
  display: displayReducer,
});

export default rootReducer;
