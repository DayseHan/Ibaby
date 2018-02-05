import * as ajaxConstants from '../../constants/ajaxConstants'
import * as detailsConstants from '../../components/details/detailsConstarts.js'

export default function detailsReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || detailsConstants.ADDCART_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.data.results;
            console.log(newState.result)
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || detailsConstants.ADDCART_RQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case detailsConstants.ADDCART_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}