import React from "react";
import "./styles/Label.css";

const Label = ({ label }) => {
  return <div className="label">{label.label}</div>;
};

export default Label;
