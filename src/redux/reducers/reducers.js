import {combineReducers} from "redux";
import {characters} from "./characters";
import {locations} from "./locations";


export const reducer = combineReducers({
    characters,
    locations
})
