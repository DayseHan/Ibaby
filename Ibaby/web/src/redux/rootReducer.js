import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import login from '../components/login/loginReducer'
import menulist from '../components/classify/classifyReducer'


export default combineReducers({
    prolist,
    login,
    menulist
})