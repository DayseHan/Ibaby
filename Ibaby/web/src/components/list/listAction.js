import * as listConstants from './listConstants'

export function getlist(ida,idx){
    return {
        types: [listConstants.LIST_REQUESTIMG, listConstants.LIST_REQUESTEND, listConstants.LIST_REQUESTERROR],
        url: "/getlist",
        data: { 
            "gId": ida,
             "idx": idx
        }
    }
}