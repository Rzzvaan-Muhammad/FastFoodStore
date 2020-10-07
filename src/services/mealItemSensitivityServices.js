// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
import http from "./httpService";

const endpoint = `/MealItemSensitivity`;

export function getMealItemSensitivities() {
  return http.get(`${endpoint}/MealItemSensitivitys`);
}

export function getMealItemSensitivity(id) {
  return http.get(`${endpoint}/ById?Id=${id}`);
}

export function deleteMealItemSensitivity(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveMealItemSensitivity(MealItemSensitivity) {
  return http.post(`${endpoint}/Create`, MealItemSensitivity);
}

export function filterMealItemSensitivity() {
  let filterUrl = "";

  const filterPrefix = "?$filter=";

  if (filterUrl !== "") filterUrl = filterPrefix + filterUrl;

  return http.get(`odata/DUTasks${filterUrl}`);
}
