import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './userAction';
import BackComponent from '../back/backComponent'
import LoadingComponent from '../loading/loadingComponent'
import FooterComponent from '../footer/footerComponent'
import {Route,Link,hashHistory} from 'react-router'


import './user.scss';

class UserComponent extends Component{
    state = {
        text:'设置',
        _login:'block',
        _quit:'none',
        _user1:'block',
        _user2:'none',
        user:'',
        phone:'',
        user_id:'',
        text:''
    }
    componentWillMount(){
        var phone = JSON.parse(localStorage.getItem('username'));
        var user_id = JSON.parse(localStorage.getItem('user_id'));
        if(phone&&user_id){
            this.setState({_login:'none',_quit:'block'});
        }else{
            this.setState({_login:'block',_quit:'none'});
        }
        this.setState({
            phone:phone,
            user_id:user_id
        },()=>{
            console.log("username："+this.state.phone,"user_id："+this.state.user_id)
        })
        
    }

    show_toggle2(l1,l2){
        this.refs.loading.show();
        this.setState({
            _login:l1,
            _quit:l2,
        },()=>{
            if(l1 == "none"){
                this.refs.loading.hide();
                hashHistory.push("/login");
            }else{
                localStorage.clear();
                setTimeout(()=>{
                    this.refs.loading.hide();
                }, 1050)
            }

        })
    }
    show_toggle1(l1,l2){
        this.setState({
            _user1:l1,
            _user2:l2,
        })
    }

    render(){
        return (
            <div className="user">
                <LoadingComponent ref="loading" text={this.state.text}></LoadingComponent>
                <div className="user1" style={{display:this.state._user1}}>
                    <div className="top">
                        <i className="iconfont icon-pinglun1"></i>
                        <p>{JSON.parse(localStorage.getItem('username'))}</p>
                        <i className="iconfont icon-shezhi" onClick={this.show_toggle1.bind(this,"none","block")}></i>
                    </div>
                    <div className="main1">
                        <div className="btn" style={{display:this.state._login}}>
                            <Link to="/login"><button>立即登录</button></Link>
                            <Link to="/register"><button>新人注册</button></Link>
                        </div>
                         <div className="btn quit" style={{display:this.state._quit}}>
                            <img src="./src/assets/images/user.jpg"/>
                            <span>宝宝年龄：备孕中</span>
                            <p><span>V0会员</span> <span>个人主页</span></p>
                        </div>
                        <ul>
                            <li><i className="iconfont icon-baby"></i>早教宝</li>
                            <li><Link to="/login"><i className="iconfont icon-shoucang"></i>收藏</Link></li>
                            <li><i className="iconfont icon-zuji"></i>足迹</li>
                        </ul>
                    </div>
                    <div className="main2">
                        <p> 
                            <span>我的订单</span> 
                            <span>查看全部订单
                                <i className="iconfont icon-xiayiye1"></i>
                            </span>
                        </p>
                        <div className="ul">

                            <ul>
                                <li>
                                    <i className="iconfont icon-wallet_icon"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-daichengtuan"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-icon3"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-xiaoxi"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-zhuanjia"></i>
                                </li>
                            </ul>

                            <ul>
                                <li>待付款</li>
                                <li>待成团</li>
                                <li>待收货</li>
                                <li>评价返现</li>
                                <li>我的售后</li>
                            </ul>
                        </div>
                    </div>
                    <div className="main3">
                        <p> 
                            <span>我的钱包</span> 
                            <span>签到领钱
                                <i className="iconfont icon-xiayiye1"></i>
                            </span>
                        </p>
                        <div className="ul">
                            <ul>
                                <li><span>0</span>张</li>
                                <li><span>0</span>个</li>
                                <li><span>0</span>元</li>
                                <li><span>0</span>元</li>
                            </ul>
                            <ul>
                                <li>现金券</li>
                                <li>贝壳</li>
                                <li>微信红包</li>
                                <li>余额</li>
                            </ul>
                        </div>
                    </div>
                    <div className="main4">
                        <div className="ul">

                            <ul>
                                <li>
                                    <i className="iconfont icon-huafei"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-56"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-wode"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-bhjaward"></i>
                                </li>
                                
                            </ul>

                            <ul>
                                <li>话费充值</li>
                                <li>0元购</li>
                                <li>免费领保险</li>
                                <li>1分领</li>
                            </ul>
                        </div>
                    </div>
                     <div className="main5">
                        <div className="ul">

                            <ul>
                                <li>
                                    <i className="iconfont icon-lie-b"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-045zhuanqulirun"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-icon"></i>
                                </li>
                                <li>
                                    <i className="iconfont icon-qian"></i>
                                </li>
                                
                            </ul>

                            <ul>
                                <li>话费充值</li>
                                <li>0元购</li>
                                <li>免费领保险</li>
                                <li>1分领</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="user2" style={{display:this.state._user2}}>
                    <div>
                        <BackComponent text={this.state.text}></BackComponent>
                        <span onClick={this.show_toggle1.bind(this,"block","none")}>
                        </span>
                    </div>
                    
                    <ul>
                        <li><i className="iconfont icon-moban"></i>个人资料<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-baby"></i>孕育状态<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-suo"></i>账户安全<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-dizhi"></i>收货地址<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-shimingrenzheng"></i>实名认证<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-zhengjian"></i>证件信息<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-iconrx"></i>Ibaby平台客服<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-daipingjia"></i>意见反馈<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-guanyuwomen"></i>关于Ibaby<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-icon_good"></i>赏个好评<i className="iconfont icon-xiayiye1"></i></li>
                        <li><i className="iconfont icon-qinglihuancun"></i>清除缓存<i className="iconfont icon-xiayiye1"></i></li>
                        <li style={{display:this.state._login}} onClick={this.show_toggle2.bind(this,"none","block")}><i></i>登陆Ibaby<i className="iconfont icon-xiayiye1"></i></li>
                        <li style={{display:this.state._quit}} onClick={this.show_toggle2.bind(this,"block","none")}><i></i>退出登录<i className="iconfont icon-xiayiye1"></i></li>
                    </ul>
                </div>
                <div style={{display:this.state._user1}}>
                    <FooterComponent></FooterComponent>
                </div>
                
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        ajaxStatus:state.register.status,
        ajaxResult:state.register.result || []
    }
}

export default connect(mapStateToProps,actions)(UserComponent)