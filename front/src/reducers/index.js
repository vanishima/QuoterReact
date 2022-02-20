import { combineReducers } from "redux";
import themeReducer from "reducers/theme/reducer";
import quotesListReducer from "reducers/quotes/reducer";
import quoteReducer from "reducers/quotes/quote";
import userReducer from "reducers/user/reducer";
import authorsReducer from "reducers/authors/reducer";
import booksReducer from "reducers/books/reducer";
import labelsReducer from "reducers/labels/reducer";

const rootReducer = combineReducers({
  quotes: quotesListReducer,
  display: themeReducer,
  quote: quoteReducer,
  user: userReducer,
  authors: authorsReducer,
  books: booksReducer,
  labels: labelsReducer,
});

export default rootReducer;
