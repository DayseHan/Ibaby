import * as ajaxConstants from '../../constants/ajaxConstants'
import * as detailsConstants from '../../components/details/detailsConstarts.js'

export default function detailsReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || detailsConstants.ADDCART_RQUESTING ):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.detailsresult = action.result.data.results[0];
            console.log(newState.detailsresult)
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || detailsConstants.ADDCART_RQUESTERROR || detailsConstants.GETCARTCOUNT_RQUESTERROR || detailsConstants.ADDCOLLECT_RQUESTERROR || detailsConstants.GETCOLOR_RQUESTERROR || detailsConstants.GETSIZE_RQUESTERROR || detailsConstants.GETIMGURL_RQUESTERROR):
            newState.status = -1;
            newState.detailsresult = action.result.data;
            break;
        case detailsConstants.ADDCART_RQUESTED:
            newState.status = 1;
            break;
        case detailsConstants.GETCARTCOUNT_RQUESTED:
            newState.status = 1;
            try{
                let cartCount = 0;
                var cartcountresult = action.result.data.results
                for(let i=0;i<cartcountresult.length;i++){
                    cartCount += cartcountresult[i].count*1
                }
                newState.getcartcountresult = cartCount;
                console.log(newState.getcartcountresult);
            }catch(error){}
            break; 
        case detailsConstants.ADDCOLLECT_RQUESTED:
            newState.status = 1;
            break;
        case detailsConstants.GETIMGURL_RQUESTED:
            newState.status = 1;
            newState.detailsImgurlresult = action.result.data.results[0].groundImg.split(',');
            break;
        case detailsConstants.GETCOLOR_RQUESTED:
            newState.status = 1;
            newState.detailsColorresult = action.result.data.results[0].color.split(',');
            break;
        case detailsConstants.GETSIZE_RQUESTED:
            newState.status = 1;
            newState.detailsSizeresult = action.result.data.results[0].size.split(',');
            break;

    }
    return newState;
}