import axios from "axios";
import { toast } from "react-toastify";
import { localURL } from "../config.json";

axios.defaults.baseURL = localURL;

axios.interceptors.response.use(null, error => {
  const ExpectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!ExpectedError) {
    console.error("Error:", error.message);
    toast.error(error.message || "Network Error");
  }

  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export default {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
