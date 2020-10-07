import http from "./httpService";
import { localURL as Url } from "../config.json";

const imageUrl = `${Url}/Image`;

export function getImages() {
  return http.get(`${imageUrl}/Images`);
}

export function getImage(id) {
  return http.get(`${imageUrl}/byId?Id=${id}`);
}

export function deleteImage(id) {
  return http.get(`${imageUrl}/Delete?Id=${id}`);
}

export function saveImage(form) {
  return http.post(`${imageUrl}/File`, form, {
    headers: {
      "content-type": "multipart/form-data"
    }
  });
}
