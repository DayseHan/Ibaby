import * as ajaxConstants from '../../constants/ajaxConstants'
import * as tabsConstants from './homeConstants.js'

export default function homeReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || tabsConstants.TABS_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
           try{
                newState.status = 1;
                newState.result = action.result.data.results;
            }catch(error){}
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || tabsConstants.TABS_RQUESTERROR):
            newState.status = -1;
            break;
        case tabsConstants.TABS_RQUESTED:
            newState.status = 1;
            newState.tabs_result = action.result.data.results;
            // console.log(newState.tabs_result)
            break;
    }
    return newState;
}