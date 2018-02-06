import React, { Component } from 'react'
import { Link } from 'react-router'
import * as actions from './classifyAction'
import { connect } from 'react-redux'

class Brand extends Component{
    componentWillMount() {
        this.props.getBrand()
    }
    render(){
        return (
            <div>
            
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state);
    return {
        // ajaxStatus: state.menulist.status,
        // ajaxResult: state.menulist.menulist || [[], []]
    }
}

export default connect(mapStateToProps, actions)(Brand);