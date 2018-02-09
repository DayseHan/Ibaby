import React, {Component} from 'react'
import {Icon, Grid } from 'antd-mobile';
import './loading.scss'

export default class LoadingComponent extends Component{
    state = {
        _change:'block',
    }

    componentWillReceiveProps(nextProps){
        console.log(this.props.change);
        console.log(nextProps);
        if(this.props.change == 0){
            this.setState({_change: 'block'});
        }else if(this.props.change == 1){
            setTimeout(()=>{
                this.setState({_change: 'none'});
            }, 1350)
            
        }

    }
    show(){
        this.setState({_change: 'block'});
    }
    hide(){
        this.setState({_change: 'none'});
    }
    render(){
        return (
            <div className="loading" style={{display:this.state._change}}>
                <Icon type="loading" />
                <span>{this.props.text}</span>
            </div>
        )
    }
}