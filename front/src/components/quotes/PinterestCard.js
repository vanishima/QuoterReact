import React from "react";

function PinterestCard({ quote, size }) {
  return (
    <div style={{ ...styles.card, ...styles[size] }}>{quote && quote.text}</div>
  );
}

const styles = {
  card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "white",
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

export default PinterestCard;
