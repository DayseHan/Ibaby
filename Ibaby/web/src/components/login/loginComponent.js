import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './loginAction'
import BackComponent from '../back/backComponent'
import {Route,Link} from 'react-router'
import './login.scss'

class LoginComponent extends Component{
    state = {
        _login1:'block',
        _login2:'none',
        title:'密码登陆',
    }
    check_phone(event){
        if(event.target.value){
            this.props.check_phone(event.target.value);
        }
    }
    show_toggle(l1,l2){
        this.setState({
            _login1:l1,
            _login2:l2,
        })
    }
    
    render(){
        return (
            <div className="login">
                <div className="login1" style={{display:this.state._login1}}>
                    <BackComponent></BackComponent>
                    <div className="main">
                        
                        <span className="ipt">
                            <i className="iconfont icon-shoujihao"></i>
                            <input type="text" className="phone" placeholder="请输入11位手机号码" onBlur={this.check_phone.bind(this)}/>
                        </span>
                        <span className="ipt">
                            <i className="iconfont icon-dunpai1"></i>
                            <input type="text" className="yzm" placeholder="请输入验证码" />
                            <span className="yym_btn">获取验证码</span>
                        </span>
                        
                        <input type="button" value="立即登录"/>
                        <div className="bottom">
                            <span>或试试以下方式</span>
                            <ul>
                                <li>
                                    <i className="iconfont icon-14" onClick={this.show_toggle.bind(this,"none","block")}></i><br/>
                                    <span onClick={this.show_toggle.bind(this)}>密码登陆</span>
                                </li>

                                <li>
                                    <i className="iconfont icon-QQ"></i><br/>
                                    <span>QQ登陆</span>
                                </li>

                                <li>
                                    <Link to="/register">
                                        <i className="iconfont icon-icon" ></i><br/>
                                        <span>新用户注册</span>
                                    </Link>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className="login2" style={{display:this.state._login2}}>
                    <BackComponent text={this.state.title}></BackComponent>
                    <span onClick={this.show_toggle.bind(this,"block","none")}></span>
                    <div className="main">
                        <span className="ipt">
                            <i className="iconfont icon-ziyuan"></i>
                            <input type="text" className="phone" placeholder="请输入手机号码" onBlur={this.check_phone.bind(this)}/>
                        </span>
                        <span className="ipt">
                            <i className="iconfont icon-suo"></i>
                            <input type="text" className="yzm" placeholder="请输入6-16位密码" />
                        </span>
                            
                        <input type="button" value="立即登录"/><br/>
                        <a>忘记密码？</a>
                    </div>
                </div>
            </div>
            
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        // test:state.login.result || []
    }
}

export default connect(mapStateToProps,actions)(LoginComponent);