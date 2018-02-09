import axios from 'axios'
import qs from 'qs'


axios.defaults.baseURL = 'http://10.3.136.12:88';

export default {
    // get
    get(url,params){
        return new Promise((resolve,reject)=>{
            axios.get(url,{
                params:params
            }).then((res)=>{
                resolve(res);
            }).catch((error)=>{
                reject(error);
            })
        })
    },
    // post
    post(url,data){
        return new Promise((resolve,reject)=>{
            axios.post(url,qs.stringify(data),{
                // 设置请求头
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((res)=>{
                resolve(res);
            }).catch((error)=>{
                reject(error);
            })
        })
    }
}