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
      const { labels } = payload;
      return {
        ...state,
        loading: false,
        labels: labels,
      };
    case ACTIONS.ADD_LABEL: {
      const { label } = payload;
      return { ...state, currentLabels: [...state.currentLabels, label] };
    }

    case ACTIONS.REMOVE_LABEL: {
      const { label } = payload;
      return {
        ...state,
        currentLabels: state.currentLabels.filter(l => l.label !== label.label),
      };
    }
    case ACTIONS.CREATE_LABEL_SUCCESS: {
      const { label } = payload;
      return {
        ...state,
        labels: [label, ...state.labels],
        currentLabels: [...state.currentLabels, label],
        loading: false,
      };
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
