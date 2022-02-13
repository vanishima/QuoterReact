import { combineReducers } from "redux";
import displayReducer from "reducers/quotes/display";
import quotesListReducer from "reducers/quotes/quotesList";
import quoteReducer from "reducers/quotes/quote";
import userReducer from "reducers/user/reducer";

const rootReducer = combineReducers({
  quotes: quotesListReducer,
  display: displayReducer,
  quote: quoteReducer,
  user: userReducer,
});

export default rootReducer;
