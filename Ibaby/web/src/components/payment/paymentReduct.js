import * as ajaxConstants from '../../constants/ajaxConstants';

export default function payment(state = {},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case ajaxConstants.AJAX_REQUESTING:
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            console.log(action.result);
            newState.result = action.result.data.results;
            break;
        case ajaxConstants.AJAX_REQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
}