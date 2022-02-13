import React, { useEffect } from "react";
// connects Redux store to a React component
import { connect } from "react-redux";
import Masonry from "react-masonry-css";

// Bring in the asynchronous fetchQuotes action
import { fetchQuotes } from "actions/quotesActions";

import PinterestLayout from "components/quotes/PinterestLayout";

import "styles/quotesGrid.css";

const QuotesPage = ({ dispatch, quotes, loading, hasErrors, user, token }) => {
  console.log("quotes", quotes);
  console.log("loading", loading);
  console.log("user token", user, token);

  useEffect(() => {
    console.log("### QuotesPage EFFECT");
    dispatch(fetchQuotes(token, 7, 1));
  }, [dispatch, token]);

  console.log("quotes", quotes);

  // Show loading, error, or success state
  const renderQuotes = () => {
    if (loading) return <p>Loading quotes</p>;
    if (hasErrors) return <p>Unable to display quotes.</p>;
    console.log("renderQuotes quotes:", quotes);
    // return <PinterestLayout quotes={quotes} />;
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
      <PinterestLayout />
    </section>
  );
};

const mapStateToProps = state => ({
  quotes: state.quotes.quotes,
  loading: state.quotes.loading,
  hasErrors: state.quotes.hasErrors,
  user: state.user.user,
  token: state.user.token,
});

export default connect(mapStateToProps)(QuotesPage);
