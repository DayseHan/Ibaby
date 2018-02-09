import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import {ajaxMiddleware} from './ajaxMiddleware'

export default function configStore(){
    let middleware = applyMiddleware(ajaxMiddleware)
    const store = createStore(rootReducer, middleware);
    return store;
}