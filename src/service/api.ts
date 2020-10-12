import axios from "axios";

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
