import {ADD_CHARACTERS} from "../action-type/actionTypes";

const initialState =  {
    charactersList: [],
}

export const characters = (state=initialState, action) =>{
    switch (action.type){
        case ADD_CHARACTERS:{
            return {...state, charactersList: action.payload}
        } default:{
            return state
        }
    }
}
