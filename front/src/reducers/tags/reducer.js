import { ACTIONS } from "./actions";

export const initialState = {
  tags: [],
  loading: false,
  currentTags: [],
};

export default function tagsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.FETCH_TAG_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.FETCH_TAGS_SUCCESS:
      const { tags } = payload;
      return {
        ...state,
        loading: false,
        tags: tags,
      };
    case ACTIONS.ADD_TAG:
      const { tag } = payload;
      return { ...state, currentTags: [...state.currentTags, tag] };
    case ACTIONS.REMOVE_TAG: {
      const { tag } = payload;
      return {
        ...state,
        currentTags: state.currentTags.filter(t => t.label !== tag.label),
      };
    }
    case ACTIONS.CREATE_TAG_SUCCESS: {
      console.log("CREATE_TAG_SUCCESS", payload);
      const { tag } = payload;
      return {
        ...state,
        tags: [tag, ...state.tags],
        currentTags: [...state.currentTags, tag],
        loading: false,
      };
    }
    case ACTIONS.FETCH_TAGS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
