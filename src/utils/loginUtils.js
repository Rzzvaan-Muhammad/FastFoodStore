import cacheUtil from "./cacheUtils";

const loginKey = "__login__";

function setLoginResponse(jwt) {
  console.log("TCL: setLoginResponse -> jwt", jwt);
  cacheUtil.setCacheStringify(loginKey, jwt);
}

function getLoginResponse() {
  return cacheUtil.getCacheParsed(loginKey);
}

function removeLoginResponse() {
  cacheUtil.removeCache(loginKey);
}

export default {
  setLoginResponse,
  getLoginResponse,
  removeLoginResponse
};
