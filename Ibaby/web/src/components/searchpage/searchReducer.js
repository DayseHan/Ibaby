import * as searchpageConstants from './searchpageConstants.js'

export default function searchpageReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case searchpageConstants.SEARCH_RQUESTING:
            newState.status = 0;
            break;
        case searchpageConstants.SEARCH_RQUESTED:
            newState.status = 1;
            newState.search_result = action.result.data.results;
            // console.log(newState.search_result)
            break;
        case searchpageConstants.SEARCH_RQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
}