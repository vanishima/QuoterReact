import { ACTIONS } from "./actions";

export const initialState = {
  labels: [],
  loading: false,
  currentLabels: [],
};

export default function labelsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true };
    case ACTIONS.FETCH_LABELS_SUCCESS:
      console.log("FETCH_LABELS_SUCCESS", payload);
      return {
        ...state,
        loading: false,
        labels: payload.labels,
      };
    case ACTIONS.ADD_LABEL:
      return { ...state, currentLabels: [...state.currentLabels, payload] };

    case ACTIONS.REMOVE_LABEL:
      return {
        ...state,
        currentLabels: state.currentLabels.filter(
          label => label.label !== payload.label
        ),
      };
    case ACTIONS.CREATE_LABEL_SUCCESS:
      console.log("CREATE_LABEL_SUCCESS", payload);
      return {
        ...state,
        labels: [payload.label, ...state.labels],
        currentLabels: [...state.currentLabels, payload.label],
        loading: false,
      };
    case ACTIONS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
