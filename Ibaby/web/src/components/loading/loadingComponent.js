import React, {Component} from 'react'
import {Icon, Grid } from 'antd-mobile';
import './loading.scss'

export default class LoadingComponent extends Component{
    state = {
        change:'none',
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
        if(this.props.change == 0){
            this.setState({change: 'block'});
        }else if(this.props.change == 1){
            setTimeout(()=>{
                this.setState({change: 'none'});
            }, 1200)
            
        }
        
    }
    show(){
        this.setState({change: 'block'});
    }
    hide(){
        this.setState({change: 'none'});
    }
    render(){
        return (
            <div className="loading" style={{display:this.state.change}}>
                <Icon type="loading" />
                <span>{this.props.text}</span>
            </div>
        )
    }
}