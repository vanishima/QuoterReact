import {
  processItem,
  processItems,
} from "components/inputs/CreatableSelect/util";

export const booksMapper = books => {
  books = processItems(books, "title");
  books.map(book => (book.lastUsedAt = new Date(book.lastUsedAt)));
  return books.sort((a, b) => b.lastUsedAt - a.lastUsedAt);
  // console.log("after mapper", books);
  // return books;
};

export const bookMapper = book => {
  return processItem(book, "title");
};
