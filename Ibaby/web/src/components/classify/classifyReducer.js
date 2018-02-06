import * as ajaxConstants from '../../constants/ajaxConstants'
import * as classifyConstants from './classifyConstants'

export default (state = {},action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case (ajaxConstants.AJAX_REQUESTING || classifyConstants.CLASSIFY_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.menulist = action.result.data.results;//返回结果
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || classifyConstants.CLASSIFY_RQUESTERROR):
            newState.status = -1;
            break;
        case classifyConstants.CLASSIFY_RQUESTING:
            newState.status = 1;
            newState.brandList = action.result.data.results;//返回结果
            console.log(action.result)
            break;
    }
    return newState;
} 