import { combineReducers } from "redux";
import themeReducer from "reducers/theme/reducer";
import quotesListReducer from "reducers/quotes/reducer";
import quoteReducer from "reducers/quotes/quote";
import userReducer from "reducers/user/reducer";

const rootReducer = combineReducers({
  quotes: quotesListReducer,
  display: themeReducer,
  quote: quoteReducer,
  user: userReducer,
});

export default rootReducer;
