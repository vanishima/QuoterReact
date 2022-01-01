import { formatDistance, subDays, format } from "date-fns";
import pinyin from "chinese-to-pinyin";

export function getTimeDistance(date) {
  return formatDistance(subDays(new Date(date), 0), new Date(), {
    addSuffix: true,
  });
}

export function getRelativeTime(date) {
  // return formatRelative(new Date(date), new Date());
  return format(new Date(date), "yyyy年MM月dd日 HH:mm");
}

export function getTagsArray(tags) {
  if (tags) {
    let arr = tags.split(" ");
    return arr.filter((i) => i !== "");
  } else {
    return [];
  }
}

/* Return ISO String in local time */
export function isoDateWithoutTimezone(rawDate) {
  if (rawDate == null) return rawDate;
  const date = new Date(rawDate);
  let timestamp = date.getTime() - date.getTimezoneOffset() * 60000;
  let correctDate = new Date(timestamp);
  return correctDate.toISOString().slice(0, -8);
}

export function getPinyin(value) {
  return pinyin(value, { removeTone: true, removeSpace: true, keepRest: true });
}
