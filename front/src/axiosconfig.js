import axios from "axios";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";
// const FRONTEND = "https://quoter-react.herokuapp.com/";

let headers = {
  mode: "cors",
  "Referrer-Policy": origin,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, OPTIONS",
  "Access-Control-Allow-Headers": "Content/Type, x-auth-token",
};

if (localStorage.getItem("token")) {
  headers["x-auth-token"] = localStorage.getItem("token");
}

const axiosInstance = axios.create({
  baseURL: FRONTEND,
  headers,
});

export default axiosInstance;
