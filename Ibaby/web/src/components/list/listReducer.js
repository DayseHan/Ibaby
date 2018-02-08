import * as listComstants from './listConstants'

export function getlist(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    
    switch (action.type) {
        case listComstants.LIST_REQUESTIMG:
            newState.status = 0;
            break;
        case listComstants.LIST_REQUESTEND:
            newState.status = 1;
            newState.list = action.result.data.results;
            break;
        case listComstants.LIST_REQUESTERROR:
            newState.status = -1;
            newState.list = '返回结果出错';
            break;
    }
    return newState;
}