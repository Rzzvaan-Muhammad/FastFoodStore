import { combineReducers } from "redux";
import bugReducer from "./Cart";
import projectReducer from "./projects";
import userReducer from "./users";
import errorsReducer from "./addErrors";

export default combineReducers({
  bugs: bugReducer,
  projects: projectReducer,
  users: userReducer,
  errors: errorsReducer
});
