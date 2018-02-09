import * as ajaxConstants from '../../constants/ajaxConstants'
import * as cartConstants from './cartConstants.js'
export default function cartReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (cartConstants.CARLIST_RQUESTING || cartConstants.CAR_RQUESTING):
            newState.status = 0;
            break;
<<<<<<< HEAD
        case cartConstants.CARLIST_RQUESTED: 
            newState.status = 1;
            newState.cart_result = action.result.data.results;
            break;       
        case (cartConstants.CARLIST_RQUESTERROR || cartConstants.CAR_RQUESTERROR):
=======
        case ajaxConstants.AJAX_REQUESTED:
            try{
                newState.status = 1;
                newState.result = action.result.data.results;
            }catch(error){}
            break;
        
        case (ajaxConstants.AJAX_REQUESTERROR || cartConstants.CAR_RQUESTERROR):
>>>>>>> c470e37b6ed7eb5f31e4436a44ac04b65854f1e9
            newState.status = -1;
            break;
        case cartConstants.CAR_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}