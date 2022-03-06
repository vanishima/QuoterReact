import { isoDateWithoutTimezone } from "api/utilsAPI";
const user = JSON.parse(localStorage.getItem("currentUser"));

export const quotesMapper = quotes => {
  return quotes.reduce((acc, quote) => {
    return { ...acc, [quote._id]: quote };
  }, {});
};

export const quoteMapper = quote => {
  return {
    ...quote,
    date: quote.date ? quote.date : isoDateWithoutTimezone(new Date()),
    tags: quote.tags.map(tag => tag.label),
    author: { _id: quote.author._id, name: quote.author.name },
    book: { _id: quote.book._id, title: quote.book.title },
    user: { _id: user.id, name: user.name },
  };
};

export const updatedQuoteMapper = quote => {
  return {
    ...quote,
    author: { _id: quote.author._id, name: quote.author.name },
    book: { _id: quote.book._id, title: quote.book.title },
    user: { _id: user.id, name: user.name },
  };
};
