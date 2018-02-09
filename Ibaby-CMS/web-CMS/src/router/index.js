import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import DatagridComponent from '../components/datagrid/DatagridComponent'
import DataFormComponent from '../components/dataform/DataFormComponent'
import ManagerComponent from '../components/manager/ManagerComponent';
import HomeComponent from '../components/home/HomeComponent';
import FruitComponent from '../components/fruit/fruitComponent'
import AddFruitComponent from '../components/fruit/AddFruitComponent'
import Login from '../components/login/LoginComponent'
import AddManager from '../components/manager/AddManager'
import FruitPicComponent from '../components/fruit/FruitPicComponent'
import Client from '../components/user/ClientComponent'
export default (
	<Route>
		<Route path='/' component={Login}></Route>
	    <Route path="/home" components={HomeComponent}>
	    	<Route path="/goods_list" component={DatagridComponent}></Route>
	    	<Route path="/goods_list" component={DatagridComponent}></Route>
	    	<Route path="/goods" component={FruitComponent}></Route>
	    	<Route path="/addgoods" component={AddFruitComponent}></Route>
	    	<Route path="/manager" component={ManagerComponent}></Route>
	    	<Route path="/addmanager" component={AddManager}></Route>
	    	<Route path="/goodsPic" component={FruitPicComponent}></Route>
	    	<Route path="/user" component={Client}></Route>
	    </Route>
    </Route>
)