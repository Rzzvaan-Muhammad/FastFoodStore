// code generated @DevUp using PlatformBuilder, 01/01/2020 13:57:39
import http from "./httpService";

const endpoint = `/DUAttachment`;

export function getDUAttachments(DUAttachment) {
  const post = http.post(`${endpoint}/ByFilter`, DUAttachment);
  return post;
}

export function getDUAttachment(id) {
  return http.get(`${endpoint}/ById?Id=${id}`);
}

export function deleteDUAttachment(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveDUAttachment(DUAttachment) {
  return http.post(`${endpoint}/Create`, DUAttachment);
}

export function filterDUAttachment(name) {
  let filterUrl = "";

  if (name !== "" && name !== null) {
    if (filterUrl !== "") filterUrl += "and ";

    filterUrl += `startswith(name, '${name}')`;
  }

  const filterPrefix = "?$filter=";

  if (filterUrl !== "") filterUrl = filterPrefix + filterUrl;
  const path = http.get(`odata/DUAttachment${filterUrl}`);
  console.log("TCL: filterDUAttachment -> path", path);
  return path;
}
