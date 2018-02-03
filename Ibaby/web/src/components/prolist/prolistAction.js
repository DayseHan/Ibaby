import * as ajaxConstants from '../../constants/ajaxConstants'
import * as prolistConstants from './prolistConstants'

export function getGoods(){
    return {
        url: '/get_product',
        data: {page: 1}
    }
}

export function addCart(gid){
    return {
        types: [prolistConstants.ADDCART_RQUESTING, prolistConstants.ADDCART_RQUESTED, prolistConstants.ADDCART_RQUESTERROR],
        url: '/add_cart',
        method: 'post',
        data: {user_id: 123,goods_name: goodsId}
    }
}