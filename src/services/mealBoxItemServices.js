// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import http from "./httpService";

const endpoint = `/MealBoxItem`;

export function getMealBoxItems() {
  return http.get(`${endpoint}/MealBoxItems`);
}

export function getMealBoxItem(id) {
  return http.get(`${endpoint}/ById?Id=${id}`);
}

export function deleteMealBoxItem(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveMealBoxItem(MealBoxItem) {
  return http.post(`${endpoint}/Create`, MealBoxItem);
}

export function filterMealBoxItem() {
  let filterUrl = "";

  const filterPrefix = "?$filter=";

  if (filterUrl !== "") filterUrl = filterPrefix + filterUrl;

  // console.log(oDataUrl + filterUrl);
  return http.get(`odata/DUTasks${filterUrl}`);
}
