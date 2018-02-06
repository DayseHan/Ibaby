import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import details from '../components/details/detailsReducer'
import login from '../components/login/loginReducer'
import register from '../components/register/registerReducer'
import menulist from '../components/classify/classifyReducer'
import home from '../components/home/homeReducer'


import cart from '../components/cart/cartReducer.js'
import settlement from '../components/settlement/settlementReducer.js'
export default combineReducers({
    prolist,
    login,
    register,
    menulist,
    details,
    home,
    cart,
    settlement
})