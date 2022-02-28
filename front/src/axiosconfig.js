import axios from "axios";

const FRONTEND =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_FRONTEND_PREFIX
    : ".";

let headers = { mode: "cors" };

if (localStorage.getItem("token")) {
  headers["x-auth-token"] = localStorage.getItem("token");
}

const axiosInstance = axios.create({
  baseURL: FRONTEND,
  headers,
});

export default axiosInstance;
