import axios from "axios";
// import { toast } from "react-toastify";
import { serverURL, localURL } from "../config.json";
import tokenUtil from "../utils/tokenUtils";

const apiURL = process.env.NODE_ENV !== "production" ? localURL : serverURL;
console.log("TCL: apiURL", apiURL);
const http = axios.create({
  baseURL: apiURL
  // timeout: 10000
});

http.interceptors.request.use(
  req => {
    console.log(tokenUtil.getToken());
    req.headers.Authorization = `Bearer ${tokenUtil.getToken()}`;
    return req;
  },
  err => {
    // console.error("TCL: http -> err", err);
  }
);

http.interceptors.response.use(null, error => {
  const ExpectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!ExpectedError) {
    // console.error("Error:", error.message || "NetworkError");
    // toast.error(error.message || "Network Error");
  }

  return Promise.reject(error);
});

export function setJwt(jwt) {
  http.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export default http;
