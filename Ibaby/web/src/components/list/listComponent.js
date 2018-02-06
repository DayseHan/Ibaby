import React,{Component} from 'react'
import {Link} from 'react-router'
import './list.scss'
import PrevBack from '../back/backComponent'

export default class List extends Component{
    render(){
        return(
            <div className="listPage">
                <div className="list-header-top">
                    <PrevBack/>
                    <div className="list-header-search">
                        <span></span>   
                    </div>
                    <div className="list-header-swith">
                        <i className="iconfont icon-leimupinleifenleileibie"></i>
                    </div>    
                </div>
                <div className="list-main">
                    
                </div>
            </div>
        )
    }
}