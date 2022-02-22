import { ACTIONS } from "./actions";

export const initialState = {
  tags: [],
  loading: false,
  currentTags: [],
};

export default function tagsReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log("tagsReducer", type, payload);
  switch (type) {
    case ACTIONS.FETCH_TAG_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.FETCH_TAGS_SUCCESS:
      console.log("FETCH_TAGS_SUCCESS", payload);
      return {
        ...state,
        loading: false,
        tags: payload.tags,
      };
    case ACTIONS.ADD_TAG:
      return { ...state, currentTags: [...state.currentTags, payload] };
    case ACTIONS.REMOVE_TAG:
      return {
        ...state,
        currentTags: state.currentTags.filter(
          tag => tag.label !== payload.label
        ),
      };
    case ACTIONS.CREATE_TAG_SUCCESS:
      console.log("CREATE_TAG_SUCCESS", payload);
      return {
        ...state,
        tags: [payload.tag, ...state.tags],
        currentTags: [...state.currentTags, payload.tag],
        loading: false,
      };
    case ACTIONS.FETCH_TAGS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
