// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import http from "./httpService";

const endpoint = `/Order`;

export function getOrderes() {
  return http.get(`${endpoint}/Orders`);
}

export function getOrder(id) {
  return http.get(`${endpoint}/ById?Id=${id}`);
}

export function deleteOrder(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveOrder(Order) {
  return http.post(`${endpoint}/Create`, Order);
}

export function filterOrder(
  Ordertitle,
  description,
  Orderprice,
  totalcalories,
  iskidmeal
) {
  let filterUrl = "";

  if (Ordertitle !== "" && Ordertitle !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `startswith(name, '${Ordertitle}')`;
  }

  if (description !== "" && description !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `startswith(Name, '${description}')`;
  }

  if (Orderprice !== "" && Orderprice !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `OrderPrice eq ${Orderprice}`;
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

  console.log(`${filterUrl}`);

  return http.get(`odata/DUTasks${filterUrl}`);
}
