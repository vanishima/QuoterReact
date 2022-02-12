import React from "react";
import PinterestCard from "components/quotes/PinterestCard";

function PinterestLayout({ quotes }) {
  const renderQuotes = () => {
    if (quotes && quotes.length > 0) {
      return quotes.map(quote => <PinterestCard quote={quote} size="small" />);
    } else {
      return <PinterestCard size="small" />;
    }
  };
  return <div style={styles.pin_container}>{renderQuotes()}</div>;
}

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "80vw",
    display: "min-content",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    // gridAutoRows: "min-content max-content auto",
    gridAutoRows: "5px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    // backgroundColor: "black",
  },
};

export default PinterestLayout;
