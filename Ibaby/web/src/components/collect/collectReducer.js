import *as collectConstants from './collectConstants.js'

export default function(state = {},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case collectConstants.COLLECT_REQUESTING || collectConstants.SAVE_RQUESTING:
            newState.collect_status = 0;
            break;
        case collectConstants.COLLECT_REQUESTED:
            newState.collect_status = 1;
            newState.collect_result = action.result.data.results;
            break;
        case collectConstants.COLLECT_REQUESTERROR || collectConstants.SAVE_RQUESTERROR:
            newState.collect_status = -1;
            break;
        case collectConstants.SAVE_RQUESTED:
            newState.collect_status = 1;
    }
    // console.log(newState.collect_status);
    return newState;
}