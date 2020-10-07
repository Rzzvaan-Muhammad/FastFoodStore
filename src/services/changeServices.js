import http from "./httpService";
import { oDataLocal as oDataUrl } from "../config.json";

const endPoint = `/ChangeTracking/`;
export function getChanges(objectName, id) {
  const params = `ObjectName=${objectName}&Id=${id}`;
  return http.get(`ChangeTracking/GetObjectHistory?${params}`);
}

export function getChange(id) {
  return http.get(`${endPoint}/ById?Id=${id}`);
}

export function deleteChange(id) {
  return http.get(`${endPoint}/Delete?Id=${id}`);
}

export function saveChange(change) {
  return http.post(`${endPoint}/Create`, change);
}

export function filterChange(name, category) {
  let filterUrl = "";
  if (name !== "" && name !== null) {
    if (filterUrl === "") filterUrl = "?$filter=";
    filterUrl += `startswith(Name, '${name}')`;
  }
  if (category !== "" && category !== null) {
    if (filterUrl === "") filterUrl = "?$filter=";
    else filterUrl += "and ";
    filterUrl += `Category eq ${category}`;
  }
  return http.get(oDataUrl + filterUrl);
}
