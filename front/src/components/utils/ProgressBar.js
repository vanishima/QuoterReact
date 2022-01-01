import {useEffect} from "react";
import PropTypes from "prop-types";
import useStorage from "../../hooks/useStorage";

const ProgressBar = (props) => {
  const { file, setFile, setUrl } = props;

  const { url, progress } = useStorage(file);
  // console.log(progress, url);

  useEffect(() => {
    if (url){
      setUrl(url);
      setFile(null);
    }
  },[url, setFile, setUrl]);

  return <div className="progress-bar" style={{width: progress + "%"}}></div>;
};

ProgressBar.propTypes = {
  props: PropTypes.shape({
    file: PropTypes.object.isRequired,
    setFile: PropTypes.func.isRequired
  })
};

export default ProgressBar;
