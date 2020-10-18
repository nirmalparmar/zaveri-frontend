import { baseUrl, postCall } from '../../service/api';
import { SET_CURRENT_USER } from '../ActionTypes';

export function setCurrentUser(user:any){
    return {
        type:SET_CURRENT_USER,
        user
    }
}

export function authUser(type:any, userData:any){
    return (dispatch:any) => {
        return new Promise((resolve, reject) =>{
            return postCall(`${baseUrl}/auth/${type}`, userData).then((res:any) => {
                localStorage.setItem("jwtToken", res.token);
                dispatch(setCurrentUser(res.email))
                resolve();
            })
        });
    }
}