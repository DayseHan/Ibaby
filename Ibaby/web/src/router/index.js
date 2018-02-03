import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent.js'
import ProlistComponent from '../components/prolist/prolistComponent.js'
import LoginComponent from '../components/login/LoginComponent'

const routes = (
    <Route>
        <Route path="/" component={HomeComponent}/>
        <Route path="prolist" component={ProlistComponent}/>
        <Route path="login" component={LoginComponent}/>
        
    </Route>
)

export default routes;