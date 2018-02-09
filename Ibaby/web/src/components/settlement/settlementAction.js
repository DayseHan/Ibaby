import * as ajaxConstants from '../../constants/ajaxConstants'
import * as settlementConstants from './settlementConstants.js'
export function getdate(uid){
    return {
        url: 'getdate',
        data: {uid}
    }
}

