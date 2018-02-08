import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './unpaidAction'
import BackComponent from '../back/backComponent'
import LoadingComponent from '../loading/loadingComponent'
import {Route,Link,hashHistory} from 'react-router'

import './unpaid.scss'

class UnpaidComponent extends Component{
    state = {

    }

    componentWillMount(){

    }

    render(){
        return (
            <div className="unpaid">
                UnpaidComponent

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        ajaxStatus:state.unpaid.unpaid_status,
        ajaxResult:state.unpaid.unpaid_result||[],
    }
}

export default connect(mapStateToProps,actions)(UnpaidComponent)