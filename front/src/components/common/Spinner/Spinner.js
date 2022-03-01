import React from "react";
import { Spinner } from "react-bootstrap";
import "./styles/Spinner.css";

const MySpinner = () => {
  return (
    <Spinner className="spinner" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default MySpinner;
