import * as ajaxConstants from '../../constants/ajaxConstants'
import * as settlementConstants from './settlementConstants.js'
export function getdate(){
    return {
        url: 'getdate',
        data: {uid: 14}
    }
}

export function getpay(orderid){
    return {
        types:[settlementConstants.ORDER_RQUESTING, settlementConstants.ORDER_RQUESTED, settlementConstants.ORDER_RQUESTERROR],
        url: 'getpay',
        data: {uid: 14,orderid}
    }
}
