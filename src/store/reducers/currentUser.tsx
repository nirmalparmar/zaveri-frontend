import { SET_CURRENT_USER } from '../ActionTypes';

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {}
};

export default (state = DEFAULT_STATE, action:any) => {
    switch(action.type){
        case SET_CURRENT_USER:
        return{
            isAuthenticated: Object.keys(action.user).length > 0,
            user: action.user
        }
        default:
            return state;
    }
}