// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:18
import http from "./httpService";
// import { apiLocal as Url, oDataLocal as oDataUrl } from "../config.json";

// const url = `${endpoint}/ItemCategory`;
const endpoint = `/ItemCategory`;

export function getItemCategorys() {
  return http.get(`${endpoint}/ItemCategorys`);
}

export function getItemCategory(id) {
  return http.get(`${endpoint}/ById?Id=${id}`);
}

export function deleteItemCategory(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveItemCategory(ItemCategory) {
  return http.post(`${endpoint}/Create`, ItemCategory);
}

export function filterItemCategory() {
  let filterUrl = "";

  const filterPrefix = "?$filter=";

  if (filterUrl !== "") filterUrl = filterPrefix + filterUrl;

  // console.log(oDataUrl + filterUrl);
  return http.get(`odata/DUTasks${filterUrl}`);
}
