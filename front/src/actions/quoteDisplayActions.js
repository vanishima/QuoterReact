// create redux action types
export const ACTIONS = {
  SHOW_DATE: "SHOW_DATE",
  SHOW_TAG: "SHOW_TAG",
  SHOW_MEMO: "SHOW_MEMO",
  SHOW_TITLE: "SHOW_TITLE",
  SHOW_TILES: "SHOW_TILES",
};

// create redux action creators that return an action
export const changeShowDate = () => ({
  type: ACTIONS.SHOW_DATE,
});

export const changeShowTag = () => ({
  type: ACTIONS.SHOW_TAG,
});
export const changeShowMemo = () => ({
  type: ACTIONS.SHOW_MEMO,
});

export const changeShowTitle = () => ({
  type: ACTIONS.SHOW_TITLE,
});
export const changeShowTiles = () => ({
  type: ACTIONS.SHOW_TILES,
});
