import { useEffect, useState } from "react";
import axios from "axios";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : "";

const useFetch = url => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  console.log("useFetch started");

  const doFetch = (options = {}) => {
    console.log("do fetch");
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    // don't make call when isLoading is changed when component starts
    if (!isLoading) {
      return;
    }
    const fetchData = async () => {
      console.log("fetchData", url, options);
      try {
        const res = await axios(FRONTEND + url, options);
        setResponse(res.data);
      } catch (err) {
        const data = err.response ? err.response.data : "Server Error";
        setError(data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, options, url]);

  return [{ response, error, isLoading }, doFetch];
};

export default useFetch;
