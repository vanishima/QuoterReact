import { ACTIONS } from "actions/quoteDisplayActions";

export const initialState = {
  showDate: true,
  showTag: true,
  showMemo: false,
  showTitle: false,
  showTiles: true,
};

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SHOW_DATE:
      return { ...state, showDate: !state.showDate };
    case ACTIONS.SHOW_TAG:
      return { ...state, showTag: !state.showTag };
    case ACTIONS.SHOW_MEMO:
      return { ...state, showMemo: !state.showMemo };
    case ACTIONS.SHOW_TITLE:
      return { ...state, showTitle: !state.showTitle };
    case ACTIONS.SHOW_TILES:
      return { ...state, showTiles: !state.showTiles };
    default:
      return state;
  }
}
