import { postCall } from '../../service/api';
import { SET_CURRENT_USER } from '../ActionTypes';

export function setCurrentUser(user:any){
    return {
        type:SET_CURRENT_USER,
        user
    }
}

// export function authUser(type:any, userData:any){
//     return (dispatch:any) => {
//         return new Promise((resolve, reject) =>{
//             return postCall(`/api/auth/${type}`, userData).then(({token, ...user}) => {
//                 localStorage.setItem("jwtToken", token);
//                 dispatch(setCurrentUser(user))
//             })
//         })
//     }
// }