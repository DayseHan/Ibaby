import * as ajaxConstants from '../../constants/ajaxConstants'
import * as cartConstants from './cartConstants.js'
export default function cartReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || cartConstants.CAR_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.data.results;
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || cartConstants.CAR_RQUESTERROR):
            newState.status = -1;
            break;
        case cartConstants.CAR_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}