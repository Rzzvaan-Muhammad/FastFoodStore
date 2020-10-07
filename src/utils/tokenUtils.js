import cacheUtil from "./cacheUtils";

const tokenKey = "__token__";

function setToken(jwt) {
  cacheUtil.setCache(tokenKey, jwt);
}

function getToken() {
  return cacheUtil.getCache(tokenKey);
}

function removeToken() {
  cacheUtil.removeCache(tokenKey);
}

export default {
  setToken,
  getToken,
  removeToken
};
