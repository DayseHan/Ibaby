import * as ajaxConstants from '../../constants/ajaxConstants'
import * as settlementConstants from './settlementConstants.js'
export function getdate(uid){
    return {
        types: [settlementConstants.ORDERLIST_RQUESTING, settlementConstants.ORDERLIST_RQUESTED, settlementConstants.ORDERLIST_RQUESTERROR],
        url: 'getdate',
        data: {uid}
    }
}

