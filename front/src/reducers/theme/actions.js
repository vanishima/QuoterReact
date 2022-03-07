// create redux action types
export const ACTIONS = {
  TOGGLE_SHOW_DATE: "TOGGLE_SHOW_DATE",
  TOGGLE_SHOW_TAG: "TOGGLE_SHOW_TAG",
  TOGGLE_SHOW_MEMO: "TOGGLE_SHOW_MEMO",
  TOGGLE_SHOW_TITLE: "TOGGLE_SHOW_TITLE",
  TOGGLE_SHOW_TILES: "TOGGLE_SHOW_TILES",
};

// create redux action creators that return an action
export const toggleShowDate = () => ({
  type: ACTIONS.TOGGLE_SHOW_DATE,
});

export const toggleShowTag = () => ({
  type: ACTIONS.TOGGLE_SHOW_TAG,
});
export const toggleShowMemo = () => ({
  type: ACTIONS.TOGGLE_SHOW_MEMO,
});

export const toggleShowTitle = () => ({
  type: ACTIONS.TOGGLE_SHOW_TITLE,
});
export const toggleShowTiles = () => ({
  type: ACTIONS.TOGGLE_SHOW_TILES,
});
