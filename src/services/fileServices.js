import http from "./httpService";
import { base64ToArrayBuffer } from "../utils/modifiers";

const endpoint = `/File`;

export function getFiles() {
  return http.get(`${endpoint}/Files`);
}

export function getFile(id) {
  return http.get(`${endpoint}/Download?Id=${id}`);
}

export function deleteFile(id) {
  return http.get(`${endpoint}/Delete?Id=${id}`);
}

export function saveFile(form) {
  return http.post(`${endpoint}/Upload`, form, {
    headers: {
      "content-type": "multipart/form-data"
    }
  });
}

export function savaDataToFile(reportName, data) {
  // eslint-disable-next-line no-underscore-dangle
  const byte = base64ToArrayBuffer(data.FileStream._buffer);
  const blob = new Blob([byte], { type: "image/jpg" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  const fileName = reportName;
  link.download = fileName;
  link.click();
}
