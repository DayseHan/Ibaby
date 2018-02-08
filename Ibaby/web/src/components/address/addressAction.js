import * as addressConstants from './addressConstants.js'

export function paid(user_id){
    return {
        types: [addressConstants.ADDRESS_REQUESTING, addressConstants.ADDRESS_REQUESTED, addressConstants.ADDRESS_REQUESTERROR],
        url:'paid',
        method:'post',
        data:{
            user_id:user_id
        }
    }
}