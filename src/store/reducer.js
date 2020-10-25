import {combineReducers} from "redux";
import entitesReducer from "./entites"

export default combineReducers({
    entites:entitesReducer
})