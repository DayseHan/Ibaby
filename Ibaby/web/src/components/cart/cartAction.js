import * as cartConstants from './cartConstants.js'

export function getCartList(){
    return {
        url: '/getcartlist',
        data: {uid: 14}
    }
}

export function genOrder(cartids, goodsids){
    return {
        types: [cartConstants.CAR_RQUESTING, cartConstants.CAR_RQUESTED, cartConstants.CAR_RQUESTERROR],
        url: '/genorder',
        method: 'post',
        data: {uid: 14, cartids, goodsids}
    }
}