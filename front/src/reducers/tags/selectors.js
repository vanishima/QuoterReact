import { createSelector } from "reselect";

export const selectTags = state => state.tags.tags;
export const selectCurrentTags = state => state.tags.currentTags;

export const selectTagsOptions = createSelector(
  selectTags,
  (state, rawTags) => rawTags,
  (tags, rawTags) => {
    console.log("ready to selectTagsOptions", rawTags);
    const tagOptions = tags.filter(tag => rawTags.includes(tag.label));
    console.log("tagOptions", tagOptions);
    return tagOptions;
  }
);
