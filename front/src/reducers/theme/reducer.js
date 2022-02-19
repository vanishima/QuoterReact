import { ACTIONS } from "./actions";

export const initialState = {
  showDate: false,
  showTag: true,
  showMemo: false,
  showTitle: false,
  showTiles: true,
};

export default function themeReducer(state = initialState, action) {
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
