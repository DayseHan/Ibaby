import * as unpaidConstants from './unpaidConstants.js'

export function get_unpaid(user_id){
    return {
        types: [unpaidConstants.UNPAID_REQUESTING, unpaidConstants.UNPAID_REQUESTED, unpaidConstants.UNPAID_REQUESTERROR],
        url:'get_unpaid',
        method:'get',
        data:{
            user_id:user_id,
            status:0
        }
    }
}

export function paid(order_id){
    return {
        types: [unpaidConstants.UNPAID_REQUESTING1, unpaidConstants.UNPAID_REQUESTED1, unpaidConstants.UNPAID_REQUESTERROR1],
        url:'paid',
        method:'post',
        data:{
            order_id:order_id,
        }
    }
}

export function unpaid(order_id){
    return {
        types: [unpaidConstants.UNPAID_REQUESTING1, unpaidConstants.UNPAID_REQUESTED1, unpaidConstants.UNPAID_REQUESTERROR1],
        url:'unpaid',
        method:'post',
        data:{
            order_id:order_id,
        }
    }
}