import * as cartConstants from './cartConstants.js'

export function getCartList(uid){
    return {
        url: '/getcartlist',
        data: {uid}
    }
}

export function genOrder(cartids, goodsids, counts ,uid){
    return {
        types: [cartConstants.CAR_RQUESTING, cartConstants.CAR_RQUESTED, cartConstants.CAR_RQUESTERROR],
        url: '/genorder',
        method: 'post',
        data: {uid , cartids, goodsids, counts}
    }
}