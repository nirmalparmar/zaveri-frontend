import {ADD_ERROR, REMOVE_ERROR} from '../ActionTypes';

export default (state = {message: null}, action:any) => {
    switch(action.type){
        case ADD_ERROR:
            return {...state, message:action.message};
        case REMOVE_ERROR:
            return {...state, message:null};
        default:
            return state;   
    }
}