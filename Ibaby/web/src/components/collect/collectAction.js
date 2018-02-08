import * as collectConstants from './collectConstants.js'

export function collect(user_id){
    return {
        types: [collectConstants.COLLECT_REQUESTING, collectConstants.COLLECT_REQUESTED, collectConstants.COLLECT_REQUESTERROR],
        url:'collects',
        method:'get',
        data:{
            user_id:user_id
        }
    }
}

export function _save(arr_str,user_id){
    return {
        types: [collectConstants.SAVE_RQUESTING, collectConstants.SAVE_RQUESTED, collectConstants.SAVE_RQUESTERROR],
        url:'save',
        method:'post',
        data:{
            arr_str:arr_str,
            user_id:user_id
        }
    }
}