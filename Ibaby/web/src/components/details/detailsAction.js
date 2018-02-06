import * as ajaxConstants from '../../constants/ajaxConstants'
import * as detailsConstants from './detailsConstarts.js'


export function getGood(data){
    return {
        url: '/get_details',
        data: data
    }
}

export function addCart(gid){
    return {
        types: [detailsConstants.ADDCART_RQUESTING, detailsConstants.ADDCART_RQUESTED, detailsConstants.ADDCART_RQUESTERROR],
        url: '/add_cart',
        method: 'post',
        data: {user_id: 123,goods_name: goodsId}
    }
}