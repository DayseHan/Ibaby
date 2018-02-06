import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import details from '../components/details/detailsReducer.js'
import login from '../components/login/loginReducer'
import register from '../components/register/registerReducer'
import home from '../components/home/homeReducer.js'
export default combineReducers({
    prolist,
    login,
    register,
    details,
    home
})