export const quotesMapper = quotes => {
  return quotes.reduce((acc, quote) => {
    return { ...acc, [quote._id]: quote };
  }, {});
};
