import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent.js'
import ProlistComponent from '../components/prolist/prolistComponent.js'

const routes = (
    <Route path="/" component={HomeComponent}>
        <Route path="prolist" component={ProlistComponent}/>
    </Route>
)

export default routes;