// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
import http from "./httpService";
// import { apiLocal as Url, oDataLocal as oDataUrl } from "../config.json";

// const url = `${endpoint}/MealItem`;
const endpoint = `/MealItem`;

export function getMealItems() {
  return http.get(`${endpoint}/MealItems`);
}

export function getMealItem(id) {
  return http.get(`${endpoint}/ById?Id=${id}`);
}

export function deleteMealItem(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveMealItem(MealItem) {
  return http.post(`${endpoint}/Create`, MealItem);
}

export function filterMealItem(
  itemname,
  itemprice,
  caloriescount,
  isvegetarian,
  ishalal
) {
  let filterUrl = "";

  if (itemname !== "" && itemname !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `startswith(name, '${itemname}')`;
  }

  if (itemprice !== "" && itemprice !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `ItemPrice eq ${itemprice}`;
  }

  if (caloriescount !== "" && caloriescount !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `CaloriesCount eq ${caloriescount}`;
  }

  if (isvegetarian !== "" && isvegetarian !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += "";
  }

  if (ishalal !== "" && ishalal !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += "";
  }

  const filterPrefix = "?$filter=";

  if (filterUrl !== "") filterUrl = filterPrefix + filterUrl;

  // console.log(oDataUrl + filterUrl);
  return http.get(`odata/DUTasks${filterUrl}`);
}
