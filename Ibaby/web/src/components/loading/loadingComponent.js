import React, {Component} from 'react'
import {Icon, Grid } from 'antd-mobile';
import './loading.scss'

export default class LoadingComponent extends Component{
    state = {
        change:'none',
    }
    show(){
        this.setState({change: 'block'});
    }
    hide(){
        this.setState({change: 'none'});
    }
    render(){
        // console.log(888888888888888888,this.props.action);
        // if(this.props.action == false){
        //     return false;
        // }
        return (
            <div className="loading" style={{display:this.state.change}}>
                <Icon type="loading" />
                <span>{this.props.text}</span>
            </div>
        )
    }
}