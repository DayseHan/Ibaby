import * as navConstants from './classifyConstants'

export function getMenu(){
    return {
        types:[navConstants.CLASSIFY_RQUESTING,navConstants.CLASSIFY_RQUESTED,navConstants.CLASSIFY_RQUESTERROR],
        url:'/menulist'
    }
}

