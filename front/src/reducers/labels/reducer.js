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
        currentLabels: state.currentLabels.filter(l => l !== label),
      };
    }
    case ACTIONS.RESET_LABELS:
      return {
        ...state,
        currentLabels: [],
      };
    case ACTIONS.CREATE_LABEL_SUCCESS: {
      const { labelOption } = payload;
      return {
        ...state,
        labels: [labelOption, ...state.labels],
        currentLabels: [...state.currentLabels, labelOption.label],
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
