import pinyin from "chinese-to-pinyin";

export const getPinyin = value => {
  if (value) {
    return pinyin(value, {
      removeTone: true,
      removeSpace: true,
      keepRest: true,
    });
  } else {
    return "";
  }
};

export const createSelectItem = (item, key) => {
  if (!item) return {};
  return Object.assign(item, { label: item[key], value: getPinyin(item[key]) });
};

export const processItems = (items, key) => {
  return items
    .filter(item => typeof item[key] === "string")
    .map(item => {
      return createSelectItem(item, key);
    });
};

export const processItem = (item, key) => {
  if (typeof item[key] === "string") {
    return createSelectItem(item, key);
  }
};
