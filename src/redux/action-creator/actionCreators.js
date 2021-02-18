import {ADD_CHARACTERS, ADD_LOCATIONS} from "../action-type/actionTypes";

export const addCharacters = (characters) =>({
    type: ADD_CHARACTERS,
    payload: characters,
})

export const addLocations = (location) => ({
    type: ADD_LOCATIONS,
    payload: location,
})
