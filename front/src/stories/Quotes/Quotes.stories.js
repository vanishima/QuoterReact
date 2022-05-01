import React from "react";
import { storiesOf } from "@storybook/react";
import { host } from "storybook-host";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import AuthorSelect from "components/inputs/CreatableSelect/AuthorSelect";
import AuthorFilter from "components/quotes/QuotesSidebar/AuthorFilter/AuthorFilter";

const stories = storiesOf("Quotes", module).addDecorator(
  host({
    mobXDevTools: false,
    align: "center-top",
    cropMarks: false,
  })
);

const authors = [
  { name: "abc", _id: 123, label: "test", value: "test value" },
  { name: "abd", _id: 123 },
  { name: "aec", _id: 123 },
  { name: "bbc", _id: 123 },
  { name: "aabc", _id: 123 },
  { name: "123", _id: 124 },
];

const currentState = {
  authors: {
    authors: authors,
    loading: false,
  },
  quotes: {
    loading: false,
  },
};

const mockStore = configureStore()(currentState);

stories.add("AuthorSelect", () => {
  return (
    <Provider store={mockStore}>
      <AuthorSelect />
    </Provider>
  );
});

stories.add("AuthorFilter", () => {
  return (
    <Provider store={mockStore}>
      <AuthorFilter />
    </Provider>
  );
});
