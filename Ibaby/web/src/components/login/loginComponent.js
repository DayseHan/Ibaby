import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './loginAction'
import BackComponent from '../back/backComponent'
import './login.scss'

class LoginComponent extends Component{
    check_phone(event){
        this.props.check_phone(event.target.value);
    }
    
    render(){
        return (
            <div>
                <BackComponent></BackComponent>
                <input type="text" className="phone" placeholder="手机号" onBlur={this.check_phone.bind(this)}/>
                <h1></h1>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        test:state.login.result || []
    }
}

export default connect(mapStateToProps,actions)(LoginComponent);