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
        currentTags: state.currentTags.filter(t => t !== tag),
      };
    }
    case ACTIONS.RESET_TAGS:
      return {
        ...state,
        currentTags: [],
      };
    case ACTIONS.CREATE_TAG_SUCCESS: {
      console.log("CREATE_TAG_SUCCESS", payload);
      const { tagOption } = payload;
      return {
        ...state,
        tags: [tagOption, ...state.tags],
        currentTags: [...state.currentTags, tagOption.label],
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
