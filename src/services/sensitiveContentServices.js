// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
import http from "./httpService";
// import { apiLocal as Url, oDataLocal as oDataUrl } from "../config.json";

// const url = `${endpoint}/SensitiveContent`;
const endpoint = `/SensitiveContent`;

export function getSensitiveContents() {
  return http.get(`${endpoint}/SensitiveContents`);
}

export function getSensitiveContent(id) {
  console.log("TCL: getSensitiveContent -> id", id);
  return http.get(`${endpoint}/ById?Id=${id}`);
}

export function deleteSensitiveContent(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveSensitiveContent(SensitiveContent) {
  return http.post(`${endpoint}/Create`, SensitiveContent);
}

export function filterSensitiveContent() {
  let filterUrl = "";

  const filterPrefix = "?$filter=";

  if (filterUrl !== "") filterUrl = filterPrefix + filterUrl;

  // console.log(oDataUrl + filterUrl);
  return http.get(`odata/DUTasks${filterUrl}`);
}
