import * as ajaxConstants from '../../constants/ajaxConstants'
import * as detailsConstants from './detailsConstarts.js'


export function getGood(data){
    return {
        url: '/get_details',
        data: data
    }
}

export function addCart(color,size,count,goodsid,userid){
    return {
        types: [detailsConstants.ADDCART_RQUESTING, detailsConstants.ADDCART_RQUESTED, detailsConstants.ADDCART_RQUESTERROR],
        url: '/add_cart',
        method: 'post',
        data: {userid:userid,color: color,size:size,count:count,goodsid:goodsid.id}
    }
}