import * as ajaxConstants from '../../constants/ajaxConstants'
import * as settlementConstants from './settlementConstants.js'


export default function(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case settlementConstants.ORDERLIST_RQUESTING ||settlementConstants.ORDER_RQUESTING:
            newState.status = 0;
            break;
        case settlementConstants.ORDERLIST_RQUESTED:
            newState.status = 1;
            newState.result = action.result.data.results;          
            break;
        
        case settlementConstants.ORDERLIST_RQUESTERROR || settlementConstants.ORDER_RQUESTERROR:
            newState.status = -1;
            break;
        case settlementConstants.ORDER_RQUESTED:
            newState.status = 1;
            newState.order_result = action.result.data.results ;
            break;  
    }
    return newState;
}