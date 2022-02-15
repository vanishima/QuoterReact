import { ACTIONS } from "./quoteActions";
import { isoDateWithoutTimezone } from "api/utilsAPI";

export const initialState = {
  _id: null,
  user: {},
  book: {},
  author: {},
  title: "",
  text: "",
  tags: "",
  date: isoDateWithoutTimezone(new Date()),
  memo: [],
  privacy_level: 1,
};

export default function quoteReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
