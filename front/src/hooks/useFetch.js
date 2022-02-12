import { useState } from "react";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  console.log("useFetch started");

  const doFetch = () => {
    console.log("do something");
  };

  return [{ response, error, isLoading }, doFetch];
};

export default useFetch;
