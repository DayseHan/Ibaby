import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent.js'
import ProlistComponent from '../components/prolist/prolistComponent.js'
import detailsComponent from '../components/details/detailsComponent.js'
import LoginComponent from '../components/login/LoginComponent'
import RegisterComponent from '../components/register/registerComponent'
import UserComponent from '../components/user/userComponent'
import ClassifyComponent from '../components/classify/classifyComponent'
import MessageComponent from '../components/message/messageComponent.js'
import SearchpageComponent from '../components/searchpage/searchpageComponent.js'
import bringComponent from '../components/bring_up/bringComponent.js'
import settlementComponent from '../components/settlement/settlementComponent.js'
import ListComponent from '../components/list/listComponent'
import cartComponent from '../components/cart/cartComponent.js'

const routes = (
    <Route>
        <Route path="/" component={HomeComponent}/>
        <Route path="details" component={detailsComponent}/>
        <Route path="login" component={LoginComponent}/>
        <Route path="register" component={RegisterComponent} />
        <Route path="user" component={UserComponent} /> 
        <Route path="classify" component={ClassifyComponent} /> 
        <Route path='list/:id' component={ListComponent}/>
        <Route path="message" component={MessageComponent} />
        <Route path="searchpage" component={SearchpageComponent}/>
        <Route path="bring" component={bringComponent}/>
        <Route path="cart" component={cartComponent}/>
        <Route path="settlement" component={settlementComponent}/>
    </Route>
)

export default routes;