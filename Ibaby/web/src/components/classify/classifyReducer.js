import * as classifyConstants from './classifyConstants'

export function classify(state = {},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case classifyConstants.CLASSIFY_RQUESTING:
            newState.status = 0;
            break;
        case classifyConstants.CLASSIFY_RQUESTED:
            newState.status = 1;
            newState.menulist = action.result.data.results;
            break;
        case classifyConstants.CLASSIFY_RQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
} 
