import * as ajaxConstants from '../../constants/ajaxConstants'
import * as settlementConstants from './settlementConstants.js'
export function getdate(uid){
    return {
        url: 'getdate',
        data: {uid}
    }
}

export function getpay(orderid,uid){
    return {
        types:[settlementConstants.ORDER_RQUESTING, settlementConstants.ORDER_RQUESTED, settlementConstants.ORDER_RQUESTERROR],
        url: 'getpay',
        data: {uid,orderid}
    }
}
