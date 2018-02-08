import * as searchpageConstants from './searchpageConstants.js'

export function searchproduct(_data){
    return {
        types:[searchpageConstants.SEARCH_RQUESTING, searchpageConstants.SEARCH_RQUESTED, searchpageConstants.SEARCH_RQUESTERROR],
        url: '/searchproduct',
        data:{data:_data},
    }
}