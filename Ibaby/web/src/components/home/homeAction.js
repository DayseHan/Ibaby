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
        url: '/tabs',
        data:{homecate:'今日热卖'}
    }
}

export function onchangetabs(_data) {
    return {
        types:[tabsConstants.TABS_RQUESTING, tabsConstants.TABS_RQUESTED, tabsConstants.TABS_RQUESTERROR],
        url: '/tabs',
        data:{homecate:_data}
    }
}