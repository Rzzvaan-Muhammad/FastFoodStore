// this class will be added to templete and copied as it is to new application
import http from "./httpService";

const ApiEndpoint = "http://86.14.11.234/TranslationManagementWAPI/wapi";
const localeKey = "__locales__";
let CurrentLocaleId = "en-uk";

function getLocalesFromAPI() {
  return http.get(`${ApiEndpoint}/locale/locales`);
}

function getLocalesFromCache() {
  const item = localStorage.getItem(localeKey);
  return JSON.parse(item);
}

function setLocalesIntoCache(obj) {
  localStorage.setItem(localeKey, JSON.stringify(obj));
  return obj;
}
function setCurrentLocale(currentlocaleId) {
  CurrentLocaleId = currentlocaleId;
}

function getCurrentLocale() {
  return CurrentLocaleId;
}
// TOPFB
async function getTranslationForResource(resourceId, defaultText) {
  const translationFromCache = getResourceFromCache(resourceId);
  if (!translationFromCache) {
    const { data: translations } = await getResourceTranslationsFromAPI(defaultText, resourceId, CurrentLocaleId);

    setResourcesTranslationsIntoCache(translations.Result);
  }
  const translation = getResourceFromCache(resourceId);
  return translation && translation.Translated ? translation.TranslatedText : defaultText;
}

async function getLocales() {
  let locales = getLocalesFromCache();
  if (!locales) {
    const { data } = await getLocalesFromAPI();
    locales = setLocalesIntoCache(data.Result);
  }
  return locales;
}

function getResourceTranslationsFromAPI(defaultText, resourceId, localeId) {
  const resourceEndpoint = `${ApiEndpoint}/LocalResouce/TranslationsByLocale?systemName=defaultSystem&moduleName=defaultModule&localeId=${localeId}&englishText=${defaultText}&resourceId=${resourceId}`;
  return http.post(resourceEndpoint);
}

function getResourceFromCache(resourceId) {
  const item = localStorage.getItem(`${resourceId}_${CurrentLocaleId}`);
  return JSON.parse(item);
}

function setResourcesTranslationsIntoCache(translations) {
  if (!(translations && translations.length)) return;
  translations.forEach(translation => {
    localStorage.setItem(`${translation.ResourceId}_${translation.LocaleId}`, JSON.stringify(translation));
  });
}

export default {
  getLocales,
  getTranslationForResource,
  setCurrentLocale,
  getCurrentLocale
};
