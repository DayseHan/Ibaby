import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import store from './redux/configStore'
import routes from './router'



import 'antd-mobile/dist/antd-mobile.css';

import './assets/css/base.scss'
import './assets/font/iconfont.css'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
)