import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import login from '../components/login/loginReducer'
export default combineReducers({
    prolist,
    login

})