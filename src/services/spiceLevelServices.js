// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:22
import http from "./httpService";
// import { apiLocal as Url, oDataLocal as oDataUrl } from "../config.json";

// const url = `${endpoint}/SpiceLevel`;
const endpoint = `/SpiceLevel`;

export function getSpiceLevels() {
  return http.get(`${endpoint}/SpiceLevels`);
}

export function getSpiceLevel(id) {
  return http.get(`${endpoint}/ById?Id=${id}`);
}

export function deleteSpiceLevel(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveSpiceLevel(SpiceLevel) {
  return http.post(`${endpoint}/Create`, SpiceLevel);
}

export function filterSpiceLevel() {
  let filterUrl = "";

  const filterPrefix = "?$filter=";

  if (filterUrl !== "") filterUrl = filterPrefix + filterUrl;

  // console.log(oDataUrl + filterUrl);
  return http.get(`odata/DUTasks${filterUrl}`);
}
