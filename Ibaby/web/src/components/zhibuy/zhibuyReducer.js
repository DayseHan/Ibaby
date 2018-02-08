import * as zhibuyConstants from './zhibuyConstants'

export function zhibuy(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case zhibuyConstants.ZHIBUY_REQUESTIMG:
            newState.status = 0;
            break;
        case zhibuyConstants.ZHIBUY_REQUESTED:
            newState.status = 1;
            newState.zhibuy = action.result.data.results;
            // console.log(action.result);
            break;
        case zhibuyConstants.ZHIBUY_REQUESTERROR:
            newState.status = -1;
            newState.zhibuy = '返回结果出错';
            break;
    }
    return newState;
}