import * as ajaxConstants from '../../constants/ajaxConstants'
import * as tabsConstants from './homeConstants.js'

export function banner(){
    return {
        url: '/banner'
    }
}

export function tabs() {
    return {
        types:[tabsConstants.TABS_RQUESTING, tabsConstants.TABS_RQUESTED, tabsConstants.TABS_RQUESTERROR],
        url: '/tabs'
    }
}