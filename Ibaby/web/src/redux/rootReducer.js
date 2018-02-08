import {combineReducers} from 'redux'


import prolist from '../components/prolist/prolistReducer'
import details from '../components/details/detailsReducer'

import login from '../components/login/loginReducer'
import register from '../components/register/registerReducer'
import {classify} from '../components/classify/classifyReducer'
import home from '../components/home/homeReducer'
import { getlist } from "../components/list/listReducer"

import cart from '../components/cart/cartReducer.js'
import payment from '../components/payment/paymentReduct.js'
import settlement from '../components/settlement/settlementReducer.js'

import searchpage from '../components/searchpage/searchReducer.js'

import bring from '../components/bring_up/bring_upReducer.js'
export default combineReducers({
    login,
    register,
    classify,
    details,
    home,
    getlist,
    cart,
    settlement,
    searchpage,
    payment,
    bring
})