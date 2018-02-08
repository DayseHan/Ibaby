import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, hashHistory} from 'react-router'

import './message.scss'

class MessageComponent extends Component{
    _back(){
        hashHistory.go(-1);
    }

    render(){
        return(
         <div>
             <div className="messageheader">
                <i className="iconfont icon-shangyiye1" onClick={this._back.bind(this)}></i>
                <h1>消息中心</h1>
             </div>
             <div className="messagenav">
                <Link to="/notice">
                    <i className="iconfont icon-icon3"></i>
                    <p>交易物流</p>
                </Link>
                <Link to="/notice">
                    <i className="iconfont icon-pinglun"></i>
                    <p>互动</p>
                </Link>
                <Link to="/notice">
                    <i className="iconfont icon-hongbao"></i>
                    <p>优惠</p>
                </Link>
            </div>
            <div className="messagecont">
                <div>
                    <i className="iconfont icon-xin"></i>
                    <p>贝贝活动</p>
                    <p>1分钱开通VIP，尊享购物95折</p>
                    <i className="iconfont icon-xiayiye1"></i>
                </div>
                <div>
                    <i className="iconfont icon-wallet_icon"></i>
                    <p>我的资产</p>
                    <p>暂无资产动态</p>
                    <i className="iconfont icon-xiayiye1"></i>
                </div>
                <div>
                    <i className="iconfont icon-daipingjia"></i>
                    <p>育儿小报</p>
                    <p>叮叮！信息播报！你有一份玩具忘记领取</p>
                    <i className="iconfont icon-xiayiye1"></i>
                </div>
            </div>
         </div> 
        )
    }
}

export default MessageComponent;