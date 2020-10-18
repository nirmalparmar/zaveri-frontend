import axios from "axios";

export const baseUrl = "http://localhost:5000/api";

export function getCall(path:any, data:any){
    return new Promise((resolve, reject) => {
        return axios.get(path, data)
            .then((res:any) => {
                return resolve(res.data);
            })
            .catch((err:any) => {
                return reject(err.response.data.error);
            })
    })
}

export function postCall(path:any, data:any){
    return new Promise((resolve, reject) => {
        return axios.post(path, data)
            .then((res:any) => {
                return resolve(res.data);
            })
            .catch((err:any) => {
                return reject(err.response.data.error);
            })
    })
}
