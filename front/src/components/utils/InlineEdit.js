import { useEffect, useState } from "react";

export const InlineEditText = ({
  name = "",
  id,
  value = "",
  setValue,
  setEdited,
  className = "",
  placeholder = "",
  onChange = (event) => {
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

export const InlineLabelEditText = ({
  name = "",
  className = "",
  label,
  value = "",
  setValue,
  setEdited,
  onChange = (event) => {
    if (setValue) setValue(event.target.value);
    if (setEdited) setEdited(true);
  },
}) => {
  const input_id = label + "-input";
  const classNames = "form-floating mb-2" + className;

  return (
    <div className={classNames}>
      <InlineEditText
        name={name}
        id={input_id}
        value={value}
        setValue={setValue}
        onChange={onChange}
      />
      <label htmlFor={input_id}>{label}</label>
    </div>
  );
};

export const InlineLabelEditDate = ({
  name = "date",
  className = "",
  label,
  value = new Date(),
  setValue,
  setEdited,
  onChange = (event) => {
    if (setValue) setValue(event.target.value);
    if (setEdited) setEdited(true);
  },
}) => {
  const input_id = label + "-input";
  const classNames = "form-floating mb-2" + className;

  return (
    <div className={classNames}>
      <input
        className="form-control inline-edit"
        type="datetime-local"
        id="date-input"
        name={name}
        value={value}
        min="1990-01-01T00:00"
        max="2099-12-31T23:55"
        onChange={onChange}
      ></input>
      <label htmlFor={input_id}>{label}</label>
    </div>
  );
};

export const InlineLabelEditTextarea = ({
  name = "",
  className = "",
  label,
  value = "",
  setValue,
  setEdited,
  height,
  fontSize = 16,
  onChange = (event) => {
    if (setValue) setValue(event.target.value);
    if (setEdited) setEdited(true);
  },
}) => {
  const [fitHeight, setFitHeight] = useState(80);

  useEffect(() => {
    if (value.length > 0 && !height) {
      const maxHeight = Math.max(
        80,
        (value.toString().split("\n").length + 1) * 75
      );
      // const maxHeight = (value.length / 50) * 50 + 60;
      setFitHeight(maxHeight);
    }
  }, [value, fitHeight, height, fontSize]);

  const input_id = label + "-input";
  const classNames = "form-floating mb-2" + className;

  return (
    <div className={classNames}>
      <textarea
        name={name}
        className="form-control inline-edit"
        type="text"
        id={input_id}
        value={value}
        onChange={onChange}
        style={{ height: fitHeight + "px", fontSize: fontSize + "px" }}
      />
      <label htmlFor={input_id}>{label}</label>
    </div>
  );
};

export const InlineEditTextarea = ({
  name = "",
  value = "",
  setValue,
  height,
  fontSize = 18,
  setEdited,
  onChange = (event) => {
    if (setValue) setValue(event.target.value);
    if (setEdited) setEdited(true);
  },
}) => {
  const [fitHeight, setFitHeight] = useState(50);

  useEffect(() => {
    if (value.length > 0 && !height) {
      // const maxHeight = Math.max(
      //   value.split("\n").length * 30 + 3,
      //   (value.length / 60) * 35 + 3
      // );
      const maxHeight = (value.length / 60) * 35 + 10;
      setFitHeight(maxHeight);
      console.log("fitHeight", fitHeight);
    }
  }, [value, fitHeight, height, fontSize]);

  return (
    <textarea
      name={name}
      className="form-control inline-edit"
      type="text"
      aria-label="Field name"
      value={value}
      onChange={onChange}
      style={{ height: fitHeight + "px", fontSize: fontSize + "px" }}
    />
  );
};
