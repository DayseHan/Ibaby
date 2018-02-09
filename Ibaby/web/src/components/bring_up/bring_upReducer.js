import * as ajaxConstants from '../../constants/ajaxConstants'
import * as bringConstants from '../../components/bring_up/bringConstarts.js'

export default function bringReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (bringConstants.BRING_REQUESTING || bringConstants.ADDCART_RQUESTING):
            newState.status = 0;
            break;
        case bringConstants.BRING_REQUESTED:
            newState.status = 1;
            newState.bringresult = action.result.data.results;
            console.log(newState.bringresult)
            break;
        case (bringConstants.BRING_REQUESTERROR || bringConstants.ADDCART_RQUESTERROR):
            newState.status = -1;
            newState.bringresult = action.result.data;
            break;
        case bringConstants.ADDCART_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}