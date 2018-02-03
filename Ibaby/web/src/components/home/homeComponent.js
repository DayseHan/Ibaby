import React, {Component} from 'react'
import { Button } from 'antd-mobile';


export default class HomeComponent extends Component{
    render(){
        return(
            <div>
                <div className="header"></div>
                <div className="container">{this.props.children}</div>
                <ul className="navgation">
                    <li>首页</li>
                    <li>列表</li>
                    <li>购物车</li>
                </ul>
                <Button>Start</Button>
            </div>
        )
    }
}