import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import details from '../components/details/detailsReducer.js'
export default combineReducers({
    prolist,
    details
})