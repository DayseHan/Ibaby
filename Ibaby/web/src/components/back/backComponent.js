import React, {Component} from 'react'
import { Router, Route, hashHistory } from 'react-router';
import './back.scss'


export default class BackComponent extends Component{
    _back(){
        hashHistory.go(-1);
    }
    render(){
        return (
            <div className="back">
                <i className="iconfont icon-shangyiye1" onClick={this._back.bind(this)}></i>
                <p>{this.props.text}</p>
            </div>
        )
    }
}