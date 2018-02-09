import {combineReducers} from 'redux';

import datagrid from '../components/datagrid/DatagridReducer'
import dataform from '../components/dataform/DataFormReducer'
import fruit from '../components/fruit/FruitReducer'
import manager from '../components/manager/ManagerReducer'
import client from '../components/user/ClientReducer'

export default combineReducers({
    datagrid,
    dataform,
    fruit,
    manager,
    client
})