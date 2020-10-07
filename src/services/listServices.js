// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:18
import http from "./httpService";
import { localURL as Url } from "../config.json";

export function YesNoWordList() {
  return [
    { Id: 0, Name: "No" },
    { Id: 1, Name: "Yes" },
  ];
}
export function LavelsList() {
  return [
    { Id: 1, Name: "Low" },
    { Id: 2, Name: "Normal" },
    { Id: 3, Name: "High" },
    { Id: 4, Name: "Very High" },
  ];
}

function setIntoCache(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
  return obj;
}

function getFromCache(key) {
  // TODO, please add some logic so that cache is expired after half an hour or so
  // so that if new values are added at the backend cache should refresh after expiry and
  // get new values in, if we dont expire or refresh cache then new values added to table
  // after the first call will never show up
  const item = localStorage.getItem(key);
  return JSON.parse(item);
}

const mealboxEndpoint = `${Url}/MealBox`;
const mealboxKey = "____mealboxes____";
function mapMealBoxesToView(list) {
  localStorage.removeItem(list);
  return list.map((x) => ({ Id: x.Id, Name: x.MealBoxTitle }));
}
export function getMealBoxesName(id) {
  if (!id) return "";
  const MealBoxes = getFromCache(mealboxKey);
  const MealBoxe = MealBoxes.find((x) => x.Id == id);
  if (!MealBoxe) return id;
  return MealBoxe.Name;
}
export async function getMealBoxes() {
  const temp = getFromCache(mealboxKey);
  if (temp && temp.length) return temp;
  const response = await http.get(`${mealboxEndpoint}/MealBoxs`);
  console.log("TCL: getMealBoxes -> response.data.Result", response.data.Result);
  const cacheList = mapMealBoxesToView(response.data.Result);

  return setIntoCache(mealboxKey, cacheList);
}
const mealitemEndpoint = `${Url}/MealItem`;
const mealitemKey = "____mealitems____";
function mapMealItemsToView(list) {
  localStorage.removeItem(list);
  return list.map((x) => ({ Id: x.Id, Name: x.ItemName }));
}
export function getMealItemsName(id) {
  if (!id) return "";
  const MealItems = getFromCache(mealitemKey);
  const MealItem = MealItems.find((x) => x.Id == id);
  if (!MealItem) return id;
  return MealItem.Name;
}
export async function getMealItems() {
  const temp = getFromCache(mealitemKey);
  if (temp && temp.length) return temp;
  const response = await http.get(`${mealitemEndpoint}/MealItems`);
  const cacheList = mapMealItemsToView(response.data.Result);

  console.log("TCL: getMealItems -> response.data.Result", response.data.Result);
  return setIntoCache(mealitemKey, cacheList);
}
const spicelevelEndpoint = `${Url}/SpiceLevel`;
const spicelevelKey = "____spicelevels____";
export async function getSpiceLevels() {
  const temp = getFromCache(spicelevelKey);
  if (temp && temp.length) return temp;
  const response = await http.get(`${spicelevelEndpoint}/SpiceLevels`);
  return setIntoCache(spicelevelKey, response.data.Result);
}
const itemcategoryEndpoint = `${Url}/ItemCategory`;

const itemcategoryKey = "____itemcategories____";
// export function getExpenseProjectName(id) {
//   if (!id) return "";
//   const categorys = Cache.getCache(itemcategoryKey);
//   // const category = _.find(categorys, { Id: id });
//   // eslint-disable-next-line eqeqeq
//   const category = categorys.find(x => x.Id == id);
//   if (!category) return id;
//   return category.ProjectName;
// }
function mapCategoriesListToView(list) {
  localStorage.removeItem(list);
  return list.map((x) => ({ Id: x.Id, Name: x.CategoryTitle }));
}
export async function getItemCategories() {
  const temp = getFromCache(itemcategoryKey);
  if (temp && temp.length) return temp;
  const response = await http.get(`${itemcategoryEndpoint}/ItemCategorys`);
  console.log("TCL: getItemCategories -> response", response);
  const cacheList = mapCategoriesListToView(response.data.Result);

  return setIntoCache(itemcategoryKey, cacheList);
}
const sensitivecontentEndpoint = `${Url}/SensitiveContent`;
const sensitivecontentKey = "____sensitivecontents____";
function mapSensitiveContentsToView(list) {
  localStorage.removeItem(list);
  return list.map((x) => ({ Id: x.Id, Name: x.SensitiveItem }));
}
export function getSensitiveContentsName(id) {
  if (!id) return "";
  const SensitiveContents = getFromCache(sensitivecontentKey);
  // const category = _.find(categorys, { Id: id });
  // eslint-disable-next-line eqeqeq
  const SensitiveContent = SensitiveContents.find((x) => x.Id == id);
  if (!SensitiveContent) return id;
  return SensitiveContent.Name;
}
export async function getSensitiveContents() {
  const temp = getFromCache(sensitivecontentKey);
  if (temp && temp.length) return temp;
  const response = await http.get(`${sensitivecontentEndpoint}/SensitiveContents`);
  const cacheList = mapSensitiveContentsToView(response.data.Result);

  return setIntoCache(sensitivecontentKey, cacheList);
}
// [PFB_CreateForeignKeyApiCall]
