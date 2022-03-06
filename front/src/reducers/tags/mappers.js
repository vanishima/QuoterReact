import {
  processItem,
  processItems,
} from "components/inputs/CreatableSelect/util";
import { getPinyin } from "api/utilsAPI";
import { isoDateWithoutTimezone } from "api/utilsAPI";
import _ from "lodash";

export const tagsMapper = tags => {
  tags = processItems(tags, "label");
  tags.map(tag => delete tag._id);
  tags.map(tag => (tag.lastUsedAt = new Date(tag.lastUsedAt)));
  tags.sort((a, b) => b.lastUsedAt - a.lastUsedAt);
  return tags;
};

export const tagMapper = tag => {
  toString.lastUsedAt = new Date(tag.lastUsedAt);
  return processItem(tag, "label");
};

export const tagStringToObjectMapper = tag => {
  return {
    label: tag,
    order: 0,
    value: getPinyin(tag),
    lastUsedAt: isoDateWithoutTimezone(new Date()),
  };
};

export const tagsStringToObjectMapper = tags => {
  console.log("tags", tags);
  if (!tags || _.isEmpty(tags)) return [];
  return tags.reduce((acc, tag) => {
    return [...acc, tagStringToObjectMapper(tag)];
  }, []);
};
