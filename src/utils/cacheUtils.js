function removeCache(key) {
  localStorage.removeItem(key);
}

function setCache(key, obj) {
  const objStr = JSON.stringify(obj);
  localStorage.setItem(key, objStr);
}
function setCacheStringify(key, obj) {
  const objStr = JSON.stringify(obj);
  localStorage.setItem(key, objStr);
}

function getCache(key) {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
}
function getCacheParsed(key) {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
}

function clearAllCache() {
  localStorage.clear();
}

export default {
  setCache,
  getCache,
  removeCache,
  clearAllCache,
  setCacheStringify,
  getCacheParsed
};
