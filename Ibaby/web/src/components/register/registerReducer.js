import * as registerConstants from './registerConstants.js';
export default function(state = {},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case registerConstants.REGISTER_REQUESTING:
            newState.status = 0;
            break;
        case registerConstants.REGISTER_REQUESTED:
            newState.status = 1;
            // console.log(action.result);
            newState.result = action.result.data;
            break;
        case registerConstants.REGISTER_REQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
}