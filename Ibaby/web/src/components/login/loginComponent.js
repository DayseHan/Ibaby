import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './loginAction'
import BackComponent from '../back/backComponent'
import LoadingComponent from '../loading/loadingComponent'
import {Route,Link,hashHistory} from 'react-router'
import './login.scss'
import {Toast} from 'antd-mobile';

const phone_reg=/^[1][3,4,5,7,8][0-9]{9}$/;
const pwd=/^[0-9a-zA-Z]{6,16}$/;


class LoginComponent extends Component{
    state = {
        _login1:'block',
        _login2:'none',
        title:'密码登陆',
        code:'',
        phone:'',
        user_id:'',


    }
    successToast(message) {
        Toast.success(message, 2);
    }
    offline(message) {
        Toast.offline(message,2);
    }
    
    login(){
        // this.refs.loading.show();
        if(this.state.phone == ''){
            this.offline('请先获取验证码！');
            // return;
        }
        else if(!phone_reg.test(this.state.phone)){  
            this.offline('手机号码有误！');
        }else if(this.state.code == this.refs.yzm.value){
            localStorage.setItem('username', JSON.stringify(this.state.phone));
            localStorage.setItem('user_id', JSON.stringify(this.state.user_id));
            setTimeout(()=>{
                // this.refs.loading.hide();
                this.successToast('登录成功。')
            }, 1100)
            setTimeout(()=>{
                hashHistory.push("/user");
                
            }, 2400)
             
        }else{
            this.offline('验证码错误！');
        }
        // this.refs.loading.hide();
    }
    login2(){
        // this.refs.loading.show();
        if(this.state.phone == ''){
            return;
        }
        else if(!phone_reg.test(this.state.phone)){  
            this.offline('手机号码有误！');
            return;
        }else if(!pwd.test(this.refs.pwd2.value)){
            this.offline('密码格式不对，必须是6-16位数字或字母')
            return;
        }
        else{
            this.props.login(this.refs.phone2.value,this.refs.pwd2.value).then(res=>{
                console.log(res);
                if(res.data.results.length>0){
                    localStorage.setItem('username', JSON.stringify(res.data.results[0].phone));
                    localStorage.setItem('user_id', JSON.stringify(res.data.results[0].user_id));
                    setTimeout(()=>{
                        // this.refs.loading.hide();
                        this.successToast('登录成功。')
                    }, 1200)
                    setTimeout(()=>{
                        hashHistory.push("/user");
                    }, 2400)
                }
            })
             
        }
    }
    getCode(){
        console.log('getCode')
        var _code = parseInt(Math.random()*900000 + 100000);
        console.log(this.refs.phone.value,_code);
        // this.refs.loading.show();
        setTimeout(()=>{
            // this.refs.loading.hide();
            this.successToast('验证码已发至您的手机请注意查收！')
        }, 1000)
        this.setState({code: _code},()=>{
            this.props.getCode(this.state.phone,this.state.code).then(res=>{
                if(res){
                    this.successToast('验证码已发至您的手机请注意查收！')
                }
                console.log(res)
                
            });
        });
    }
    check_phone(_blean){
        console.log('check')
        // var phone = document.querySelector('.phone').value
        // console.log(this.state.phone,this.refs.phone.value)
        var _phone = this.refs.phone.value || this.refs.phone2.value
        if(_phone== ''){
            return;
        }
        else if(!phone_reg.test(_phone)){  
            this.offline('手机号码有误！');
        } 
        else {  
            // this.refs.loading.show();
            this.setState({phone: _phone},()=>{
                this.props.check_phone(this.state.phone).then(res=>{
                    if(res.data.results.length<1){
                        this.refs.phone.value='';
                        this.refs.phone2.value='';
                        this.offline('该手机号码未注册，请先注册！');

                        // this.refs.loading.hide();
                    }else{
                        this.setState({user_id:res.data.results[0].user_id});
                        if(_blean){
                            // this.refs.loading.hide();
                            return
                        }
                        this.getCode();
                    }
                    // this.refs.loading.hide();
                });
            });

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
                <LoadingComponent ref="loading" change={this.props.ajaxStatus}></LoadingComponent>
                <div className="login1" style={{display:this.state._login1}}>
                    <BackComponent></BackComponent>
                    <div className="main">

                        <span className="ipt">
                            <i className="iconfont icon-shoujihao"></i>
                            <input type="text" className="phone" placeholder="请输入11位手机号码" ref="phone"/>
                        </span>
                        <span className="ipt">
                            <i className="iconfont icon-dunpai1"></i>
                            <input type="text" className="yzm" placeholder="请输入验证码" ref="yzm"/>
                            <span className="yym_btn" onClick={this.check_phone.bind(this)} ref="yym_btn">获取验证码</span>
                        </span>
                        
                        <input type="button" value="立即登录" onClick={this.login.bind(this)}/>
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
                            <input type="text" className="phone" placeholder="请输入手机号码" onBlur={this.check_phone.bind(this,true)} ref="phone2"/>
                        </span>
                        <span className="ipt">
                            <i className="iconfont icon-suo"></i>
                            <input type="text" className="yzm" placeholder="请输入6-16位密码" ref="pwd2"/>
                        </span>
                            
                        <input type="button" value="立即登录" onClick={this.login2.bind(this)}/><br/>
                        <a>忘记密码？</a>
                    </div>
                </div>
            </div>
            
        )
    }
}


let mapStateToProps = (state) =>{
    return {
        ajaxResult:state.login.result,
        ajaxStatus: state.login.status,
    }
}

export default connect(mapStateToProps,actions)(LoginComponent);