import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import _ from "lodash";

// Elements
import TextIndentation from "components/utils/TextIndentation";
import Toolbar from "./Toolbar/Toolbar";

// API
import Memos from "./Memos/Memos";
import Tags from "./Tags/Tags";

import { updateQuoteById, deleteQuote } from "reducers/quotes/quoteActions";
import { selectActiveQuoteId } from "reducers/quotes/selectors";

import "./styles/Quote.css";
import QuoteDate from "./QuoteDate/QuoteDate";
import QuoteHeader from "./QuoteHeader/QuoteHeader";
import QuoteFooter from "./QuoteFooter/QuoteFooter";
import { selectDisplay } from "reducers/theme/selectors";
import NewQuote from "./NewQuote";

const Quote = props => {
  const dispatch = useDispatch();

  const { quote, display, activeQuoteId } = props;
  const { showDate, showTag, showMemo } = display;
  const isEditing = activeQuoteId === quote?._id;
  const [isModified, setIsModified] = useState();

  const handleSubmit = () => {
    console.log("handleSubmit");
    if (
      _.isEmpty(quote.author) ||
      _.isEmpty(quote.book) ||
      quote.text.length === 0
    ) {
      alert("Please fill out all required inputs");
    } else {
      dispatch(updateQuoteById(quote._id));
    }
  };

  const handleDelete = () => {
    dispatch(deleteQuote(quote._id));
  };

  const handleChange = () => {
    setIsModified(true);
  };

  return (
    <div className={`quote card mb-3 ${isEditing ? "quote-editing" : ""}`}>
      {isEditing ? (
        <NewQuote quoteId={quote._id} />
      ) : (
        <>
          <QuoteHeader quoteId={quote._id} title={quote.title} />
          <div className="quote-card-body card-body">
            <div className="quoteDetails">
              <blockquote>
                <TextIndentation className="quote-text" rawText={quote.text} />
              </blockquote>
              <QuoteFooter author={quote.author} book={quote.book} />
            </div>
          </div>
          {(showDate || showTag || showMemo) && (
            <div className="card-footer">
              <QuoteDate date={quote.date} handleChange={handleChange} />
              <Tags
                tags={quote.tags}
                quoteId={quote._id}
                handleChange={handleChange}
              />
              <Memos
                memos={quote.memos}
                quoteId={quote._id}
                handleChange={handleChange}
              />
            </div>
          )}
          <Toolbar
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            showText={false}
            isEditing={isEditing}
            quoteId={quote._id}
            isModified={isModified}
            setIsModified={setIsModified}
          />
        </>
      )}
    </div>
  );
};

Quote.propTypes = {
  props: PropTypes.shape({
    quote: PropTypes.object.isRequired,
    activeQuoteId: PropTypes.string,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  display: selectDisplay(state),
  activeQuoteId: selectActiveQuoteId(state),
  ...ownProps,
});

export default connect(mapStateToProps)(Quote);
