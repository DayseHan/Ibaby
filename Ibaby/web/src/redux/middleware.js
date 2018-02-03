import http from '../utils/httptool.js'
import * as ajaxContants from '../constants/ajaxConstants'
import { AJAX_REQUESTERROR } from '../constants/ajaxConstants';

export default function middleware(api){
    return function(dispatch){
        return function(action){
            let {type, types, method = 'get', data = {}, url} = action;

            if(!url){
                return dispatch(action)
            }
            let defaultConstants = [ajaxContants.AJAX_REQUESTING, ajaxContants.AJAX_REQUESTED, AJAX_REQUESTERROR]
            let [requesting, requested, requesterror] = types ? types : defaultConstants;
            
            api.dispatch({type: requesting});
            if(url){
                return new Promise((resolve, reject) => {
                    http[method](url, data).then(res => {
                        api.dispatch({
                            type: requested,
                            result: res.data
                        })
                        resolve(res.data)
                    }).catch(error => {
                        api.dispatch({
                            type: requesterror,
                            result: error
                        })
                        reject(error)
                    })
                })

            }
        }
        
    }
}