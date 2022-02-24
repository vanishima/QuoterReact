import {
  processItem,
  processItems,
} from "components/inputs/CreatableSelect/util";

export const tagsMapper = tags => {
  tags = processItems(tags, "label");
  tags.map(tag => (tag.lastUsedAt = new Date(tag.lastUsedAt)));
  tags.sort((a, b) => b.lastUsedAt - a.lastUsedAt);
  return tags;
};

export const tagMapper = tag => {
  return processItem(tag, "label");
};
