import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavBar,Checkbox} from 'antd-mobile';
import './address.scss'

export default class CartComponent extends Component {
    complete(){

    }
    goBack(){

    }
    render(){
        return(
            <div className="address">
                <div className="head">
                    <NavBar mode="light"
                     leftContent={[
                        <i className="iconfont icon-shangyiye1"key="18" onClick={this.goBack.bind(this)}></i>
                    ]}
                    rightContent={[
                        <div className="complete" key="11"ref="complete" onClick={this.complete.bind(this)}>完成</div>
                    ]}
                    >新增收货地址
                    </NavBar>
                </div>
                <div className="form">
                    <li>
                        <label>收货人</label><input type="text"placeholder="请输入收货人姓名"/>
                    </li>
                    <li>
                        <label>手机号码</label><input type="text"placeholder="请输入手机号码"/>
                    </li>
                    <li>
                        <label>省市选择</label><input type="text"placeholder="点击选择"/>
                    </li>
                    <li id="last">
                        <label>详细地址</label><input type="text"placeholder="请输入详细地址"/>
                    </li>
                </div>
            </div>
            )
    }
}