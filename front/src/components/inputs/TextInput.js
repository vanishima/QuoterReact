import React from "react";

const TextInput = ({
  name = "",
  id,
  value = "",
  setValue,
  setEdited,
  className = "",
  placeholder = "",
  onChange = event => {
    if (setValue) setValue(event.target.value);
    if (setEdited) setEdited(true);
  },
}) => {
  const classNames = className + "form-control inline-edit";
  const thePlaceholder = placeholder + "";

  return (
    <input
      name={name}
      id={id}
      className={classNames}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={thePlaceholder}
    />
  );
};

export default TextInput;
