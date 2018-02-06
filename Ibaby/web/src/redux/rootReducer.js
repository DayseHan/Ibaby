import {combineReducers} from 'redux'

import prolist from '../components/prolist/prolistReducer'
import details from '../components/details/detailsReducer'
import login from '../components/login/loginReducer'
<<<<<<< HEAD
import menulist from '../components/classify/classifyReducer'
import home from '../components/home/homeReducer'


=======
import home from '../components/home/homeReducer.js'
import cart from '../components/cart/cartReducer.js'
import settlement from '../components/settlement/settlementReducer.js'
>>>>>>> d24d2326c80e26f72e5b3205b1deb20bbfb2257c
export default combineReducers({
    prolist,
    login,
    menulist,
    details,
    home,
    cart,
    settlement
})