import React, { useState } from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

const UploadImageForm = (props) => {
  const { setEdited, url, setUrl } = props;

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/jpeg", "image/png", "image/jpg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    // if file exists
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setEdited(true);
      setError("");
    } else {
      setFile(null);
      setError("please select an image file (png or jpeg");
    }
  };

  return (
    <form>
      <div className="form-floating">
        <input
          id="image-url-input"
          className="form-control inline-edit"
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setEdited(true);
          }}
        />
        <label htmlFor="image-url-input">Enter image url</label>
      </div>

      <input type="file" className="form-control" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar setUrl={setUrl} file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

UploadImageForm.propTypes = {
  props: PropTypes.shape({
    setUrl: PropTypes.func.isRequired,
  }),
};

export default UploadImageForm;
