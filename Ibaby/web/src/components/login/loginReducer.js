import * as loginConstants from './loginConstants.js';
export default function(state = {},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case loginConstants.LOGIN_REQUESTING:
            newState.status = 0;
            break;
        case loginConstants.LOGIN_REQUESTED:
            newState.status = 1;
            // console.log(action.result);
            newState.result = action.result.data;
            break;
        case loginConstants.LOGIN_REQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
}