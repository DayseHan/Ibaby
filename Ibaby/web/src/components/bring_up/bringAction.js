import * as ajaxConstants from '../../constants/ajaxConstants'
import * as bringConstants from './bringConstarts.js'

export function getComments(data){
    return {
        types:[bringConstants.BRING_REQUESTING,bringConstants.BRING_REQUESTED,bringConstants.BRING_REQUESTERROR],
        url: '/get_comments',
    }
}