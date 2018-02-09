import * as unpaidConstants from './unpaidConstants.js';

export default function(state = {},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case unpaidConstants.UNPAID_REQUESTING || unpaidConstants.UNPAID_REQUESTING1:
            newState.status = 0;
            break;
        case unpaidConstants.UNPAID_REQUESTED:
            newState.status = 1;
            newState.unpaid_result = action.result.data.results;
            break;
        case unpaidConstants.UNPAID_REQUESTERROR || unpaidConstants.UNPAID_REQUESTERROR1:
            newState.status = -1;
            break;
        case unpaidConstants.UNPAID_REQUESTED1:
            newState.status = 1;
            break;
    }
    return newState;
}