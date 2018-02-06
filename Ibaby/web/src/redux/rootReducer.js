import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import details from '../components/details/detailsReducer'
import login from '../components/login/loginReducer'
import menulist from '../components/classify/classifyReducer'
import home from '../components/home/homeReducer'


export default combineReducers({
    prolist,
    login,
    menulist,
    details,
    home
})