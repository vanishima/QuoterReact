import axios from "axios";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : "";

const DEFAULT_OPTIONS = {
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
};

const myAxios = async (url, options) => {
  console.log("fetchData", url, options);
  let response, error;
  const optionsCombined = { url: FRONTEND + url, ...options };
  console.log("optionsCombined", optionsCombined);
  try {
    response = await axios(optionsCombined);
  } catch (err) {
    const data = err.response ? err.response.data : "Server Error";
    error = data;
  }

  return { response, error };
};

export default myAxios;
