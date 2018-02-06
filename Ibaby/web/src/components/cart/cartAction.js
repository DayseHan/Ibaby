export function getCartList(){
    return {
        url: 'getcartlist',
        data: {uid: 1}
    }
}

export function genOrder(cartids, goodsids){
    return {
        url: 'genorder',
        method: 'post',
        data: {uid: 1, cartids, goodsids}
    }
}