import { ACTIONS } from "./actions";

export const initialState = {
  showDate: false,
  showTag: true,
  showMemo: true,
  showTitle: false,
  showTiles: true,
  isDarkMode: false,
};

export default function themeReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTIONS.TOGGLE_SHOW_DATE:
      return { ...state, showDate: !state.showDate };
    case ACTIONS.TOGGLE_SHOW_TAG:
      return { ...state, showTag: !state.showTag };
    case ACTIONS.TOGGLE_SHOW_MEMO:
      return { ...state, showMemo: !state.showMemo };
    case ACTIONS.TOGGLE_SHOW_TITLE:
      return { ...state, showTitle: !state.showTitle };
    case ACTIONS.TOGGLE_SHOW_TILES:
      return { ...state, showTiles: !state.showTiles };
    case ACTIONS.TOGGLE_DARKMODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}
