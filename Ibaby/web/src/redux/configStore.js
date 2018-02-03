import React from 'react'
import {createStore, applyMiddleware} from 'redux'

import middleware from './middleware'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(middleware));

export default store;