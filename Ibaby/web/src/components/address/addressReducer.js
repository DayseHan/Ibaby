import * as addressConstants from './addressConstants.js';

export default function(state = {},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case addressConstants.ADDRESS_REQUESTING:
            newState.unpaid_status = 0;
            break;
        case addressConstants.ADDRESS_REQUESTED:
            newState.unpaid_status = 1;
            newState.unpaid_result = action.result.data.results;
            break;
        case addressConstants.ADDRESS_REQUESTERROR:
            newState.unpaid_status = -1;
            break;
    }
    return newState;
}