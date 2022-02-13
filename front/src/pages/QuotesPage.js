import React, { useEffect } from "react";
// connects Redux store to a React component
import { connect } from "react-redux";
import Masonry from "react-masonry-css";

// Bring in the asynchronous fetchQuotes action
import { fetchQuotes } from "actions/quotesActions";

import "styles/quotesGrid.css";

const QuotesPage = ({ dispatch, quotes, loading, hasErrors }) => {
  console.log("quotes", quotes);
  console.log("loading", loading);

  useEffect(() => {
    console.log("### QuotesPage EFFECT");
    dispatch(fetchQuotes(7, 1));
  }, [dispatch]);

  console.log("quotes", quotes);

  // Show loading, error, or success state
  const renderQuotes = () => {
    if (loading) return <p>Loading quotes</p>;
    if (hasErrors) return <p>Unable to display quotes.</p>;
    console.log("renderQuotes quotes:", quotes);
    return (
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {quotes.map(quote => (
          <div key={quote.id} quote={quote}>
            {quote.text}
          </div>
        ))}
      </Masonry>
    );
  };

  return (
    <section>
      <h1>Quotes</h1>
      {renderQuotes()}
    </section>
  );
};

const mapStateToProps = state => ({
  quotes: state.quotes.quotes,
  loading: state.quotes.loading,
  hasErrors: state.quotes.hasErrors,
});

export default connect(mapStateToProps)(QuotesPage);
