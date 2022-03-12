import { ACTIONS } from "./actions";

export const initialState = {
  authors: [],
  loading: false,
  currentAuthor: undefined,
};

export default function authorsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true };
    case ACTIONS.FETCH_AUTHORS_SUCCESS: {
      const { authors } = payload;

      return {
        ...state,
        loading: false,
        authors: authors,
      };
    }
    case ACTIONS.SET_AUTHOR:
      const { author } = payload;
      return { ...state, currentAuthor: author };
    case ACTIONS.CREATE_AUTHOR_SUCCESS: {
      const { author } = payload;
      return {
        ...state,
        authors: [author, ...state.authors],
        currentAuthor: author,
        loading: false,
      };
    }
    case ACTIONS.MOVE_AUTHOR_TO_FRONT: {
      const { author } = payload;
      const updatedAuthors = state.authors.filter(a => a._id !== author._id);
      updatedAuthors.unshift(author);
      return { ...state, authors: updatedAuthors };
    }
    case ACTIONS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
