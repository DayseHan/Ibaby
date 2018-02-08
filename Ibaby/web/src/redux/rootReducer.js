import {combineReducers} from 'redux'


import prolist from '../components/prolist/prolistReducer'
import details from '../components/details/detailsReducer'

import login from '../components/login/loginReducer'
import register from '../components/register/registerReducer'
import user from '../components/user/userReducer'
import collect from '../components/collect/collectReducer'
import unpaid from '../components/unpaid/unpaidReduxcer'

import {classify} from '../components/classify/classifyReducer'
import home from '../components/home/homeReducer'
import { getlist } from "../components/list/listReducer";

import cart from '../components/cart/cartReducer.js'
import settlement from '../components/settlement/settlementReducer.js'

import searchpage from '../components/searchpage/searchReducer.js'
export default combineReducers({
    login,
    register,
    user,
    collect,
    unpaid,
    classify,
    details,
    home,
    getlist,
    cart,
    settlement,
    searchpage,
})