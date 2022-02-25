import React from "react";
import Label from "./Label";

const Labels = ({ labels }) => {
  return (
    <div className="labels mb-2">
      {labels.map((label, i) => (
        <div key={i}>
          <Label label={label} />
        </div>
      ))}
    </div>
  );
};

export default Labels;
