import { useEffect, useState } from "react";

export const InlineEditText = ({
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
        name="date"
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

export const InlineEditImage = ({
  value = "",
  setFile,
  setFilename,
  setEdited,
}) => {
  const onChange = (event) => {
    setFile(event.target.files[0]);
    console.log("FILE:", event.target.files[0]);
    setFilename(event.target.files[0].name);
    if (setEdited) setEdited(true);
  };

  return (
    <div>
      <label htmlFor="/">
        <input
          type="file"
          className="form-control inline-edit"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export const InlineEditTextarea = ({
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
      className="form-control inline-edit"
      type="text"
      aria-label="Field name"
      value={value}
      onChange={onChange}
      style={{ height: fitHeight + "px", fontSize: fontSize + "px" }}
    />
  );
};
