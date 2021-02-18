import {ADD_LOCATIONS} from "../action-type/actionTypes";

const initialState = {
    locationList: []
}

export const locations = (state=initialState, action) => {
    switch (action.type){
        case ADD_LOCATIONS:{
            return {...state, locationList: action.payload}
        } default:{
            return state
        }
    }
}
