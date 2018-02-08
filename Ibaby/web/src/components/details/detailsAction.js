import * as ajaxConstants from '../../constants/ajaxConstants'
import * as detailsConstants from './detailsConstarts.js'


export function getGood(data){
    return {
        url: '/get_details',
        data: data
    }
}

export function addCart(color,size,count,goodsid,userid,username,price){
    return {
        types: [detailsConstants.ADDCART_RQUESTING, detailsConstants.ADDCART_RQUESTED, detailsConstants.ADDCART_RQUESTERROR],
        url: '/add_cart',
        method: 'post',
        data: {userid:userid,color: color,size:size,count:count,goodsid:goodsid.id,username:username,price:price}
    }
}

export function getCartcount(data){
    return {
        types: [detailsConstants.GETCARTCOUNT_RQUESTING, detailsConstants.GETCARTCOUNT_RQUESTED, detailsConstants.GETCARTCOUNT_RQUESTERROR],
        url: '/getcartlist',
        data: {uid:data}
    }
}