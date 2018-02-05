import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent.js'
import ProlistComponent from '../components/prolist/prolistComponent.js'
import LoginComponent from '../components/login/LoginComponent'
import RegisterComponent from '../components/register/registerComponent'
import UserComponent from '../components/user/userComponent'
import ClassifyComponent from '../components/classify/classifyComponent'

const routes = (
    <Route>
        <Route path="/" component={HomeComponent}/>
        <Route path="prolist" component={ProlistComponent}/>
        <Route path="login" component={LoginComponent}/>
        <Route path="register" component={RegisterComponent} />
        <Route path="user" component={UserComponent} /> 
        <Route path="classify" component={ClassifyComponent} /> 
    </Route>
)

export default routes;