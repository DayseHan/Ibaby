import * as ajaxConstants from '../../constants/ajaxConstants'
import * as detailsConstants from './detailsConstarts.js'


export function getGood(data){
    return {
        url: '/get_details',
        data: data
    }
}

export function getGoodImgurl(data){
    return {
        types: [detailsConstants.GETIMGURL_RQUESTING, detailsConstants.GETIMGURL_RQUESTED, detailsConstants.GETIMGURL_RQUESTERROR],
        url: '/get_details',
        data: data
    }
}

export function getGoodColor(data){
    return {
        types: [detailsConstants.GETCOLOR_RQUESTING, detailsConstants.GETCOLOR_RQUESTED, detailsConstants.GETCOLOR_RQUESTERROR],
        url: '/get_details',
        data: data
    }
}

export function getGoodSize(data){
    return {
        types: [detailsConstants.GETSIZE_RQUESTING, detailsConstants.GETSIZE_RQUESTED, detailsConstants.GETSIZE_RQUESTERROR],
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

export function add_Collect(goodsid,userid){
    return {
        types: [detailsConstants.ADDCOLLECT_RQUESTING, detailsConstants.ADDCOLLECT_RQUESTED, detailsConstants.ADDCOLLECT_RQUESTERROR],
        url: '/add_collect',
        method: 'post',
        data: {goodsid:goodsid.id,userid:userid}
    }
}

export function get_Collect(userid){
    return {
        types: [detailsConstants.GETCOLLECT_RQUESTING, detailsConstants.GETCOLLECT_RQUESTED, detailsConstants.GETCOLLECT_RQUESTERROR],
        url: '/get_collect',
        data: {userid:userid}
    }
}

export function cancal_Collect(goodsid,userid){
    return {
        types: [detailsConstants.CANCELCOLLECT_RQUESTING, detailsConstants.CANCELCOLLECT_RQUESTED, detailsConstants.CANCELCOLLECT_RQUESTERROR],
        url: '/cancel_collect',
        method: 'post',
        data: {goodsid:goodsid,userid:userid}
    }
}