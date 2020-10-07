// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import http from "./httpService";

const endpoint = `/MealBox`;

export function getMealBoxes() {
  return http.get(`${endpoint}/MealBoxs`);
}

export function getMealBox(id) {
  if (id === null || id == "0") {
    return null;
  }
  return http.get(`${endpoint}/ById?Id=${id}`);
}

export function deleteMealBox(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveMealBox(MealBox) {
  return http.post(`${endpoint}/Create`, MealBox);
}

export function filterMealBox(mealboxtitle, description, mealboxprice, totalcalories, iskidmeal) {
  let filterUrl = "";

  if (mealboxtitle !== "" && mealboxtitle !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `startswith(name, '${mealboxtitle}')`;
  }

  if (description !== "" && description !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `startswith(name, '${description}')`;
  }

  if (mealboxprice !== "" && mealboxprice !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `MealBoxPrice eq ${mealboxprice}`;
  }

  if (totalcalories !== "" && totalcalories !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `TotalCalories eq ${totalcalories}`;
  }

  if (iskidmeal !== "" && iskidmeal !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += "";
  }

  const filterPrefix = "?$filter=";

  if (filterUrl !== "") filterUrl = filterPrefix + filterUrl;

  console.log(`mmmmm${filterUrl}`);

  return http.get(`odata/DUTasks${filterUrl}`);
}
