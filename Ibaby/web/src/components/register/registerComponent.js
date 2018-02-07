import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './registerAction'
import BackComponent from '../back/backComponent'
import LoadingComponent from '../loading/loadingComponent'
import {Route,Link,hashHistory} from 'react-router'
import './register.scss';
import { List, Checkbox, Flex, Toast} from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
const phone_reg=/^[1][3,4,5,7,8][0-9]{9}$/;
const pwd=/^[0-9a-zA-Z]{6,16}$/;


class RegisterComponent extends Component{
    state = {
        title:'密码注册',
        _code:'',
        user_id:'',
        username:'',
        phone:'',
        change2:'none'
    }
    offline(message) {
        Toast.offline(message,2);
    }
    successToast(message) {
        Toast.success(message, 2);
    }
    check_phone(){
        console.log('check_phone')
        if(this.refs.phone.value == ''){
            return;
        }
        else if(!phone_reg.test(this.refs.phone.value)){  
            this.offline('手机号码有误！');
        }else{
            this.setState({phone: this.refs.phone.value});
            this.props.check_phone(this.refs.phone.value).then(res=>{
                console.log('check_phone')
                console.log(res.data.results.length);
                // this.refs.loading.hide();
                if(res.data.results.length>0){
                    this.refs.phone.value='';
                    this.offline('该手机已注册，可直接登录！')
                }else{
                    this.getCode();
                }
            });
        }
            
    }

    reg(){
        if(!pwd.test(this.refs.pwd.value)){
            this.offline('密码格式不对，必须是6-16位数字或字母')
            return;
        }
        if(this.state._code == this.refs.yzm.value){
            this.props.reg(this.refs.phone.value,this.refs.pwd.value).then(res=>{
                console.log(res);
                if(res.state){
                    this.setState({user_id:res.data.results.insertId});
                    localStorage.setItem('username', JSON.stringify(this.state.phone));
                    localStorage.setItem('user_id', JSON.stringify(this.state.user_id));
                    
                    setTimeout(function(){
                        this.successToast('恭喜你！注册成功。')
                        hashHistory.push({pathname: '/user'})      
                    }, 2200)
                }
            });
        }else{
            this.offline('验证码有误，请重试！');
        }
    }
    getCode(){
        // console.log(this.refs.phone.value,parseInt(Math.random()*9000 + 1000));
        this.refs.loading.show();
        var code = parseInt(Math.random()*9000 + 1000);
        // console.log(this.state._code,code);
        setTimeout(()=>{
            this.refs.loading.hide();
            this.setState({_code: code});
            console.log(this.state._code,code);

            this.props.getCode(this.refs.phone.value,this.state._code).then(res=>{
                if(res){
                    this.successToast('验证码已发至您的手机请注意查收！')
                }
                console.log(res);
                console.log("发送成功");
                
            });

            this.successToast('验证码已发至您的手机请注意查收！')
        },1200)

    }
    getCode2(){
        this.refs.loading.show();
        var code = parseInt(Math.random()*9000 + 1000);
        setTimeout(()=>{
            this.setState({_code: code});
            this.refs.yzm_btn.innerText = code;
            this.refs.loading.hide();
            this.successToast('发送成功！')
        },1200)
    }
    

    render(){

        if(this.props.ajaxStatus == 0){
            var shown = true;
        }else if(this.props.ajaxStatus == 1){
            var shown = false;
        }

        return (
            <div className="register">
                    <LoadingComponent ref="loading" action={shown}></LoadingComponent>
                
                <div className="reg" style={{display:this.state._login2}}>
                    <BackComponent text={this.state.title}></BackComponent>
                    <div className="main">
                        <span className="ipt">
                            <i className="iconfont icon-shoujihao"></i>
                            <input type="text" className="phone" placeholder="请输入11位手机号码" ref="phone"/>
                        </span>


                        <span className="ipt">
                            <i className="iconfont icon-dunpai1"></i>
                            <input type="text" className="yzm" placeholder="请输入验证码"  ref="yzm"/>
                            <span className="yym_btn" onClick={this.check_phone.bind(this)} ref="yzm_btn">获取验证码</span>
                        </span>

                         <span className="ipt">
                            <i className="iconfont icon-suo"></i>
                            <input type="text" placeholder="请输入6-16位密码" ref="pwd"/>
                        </span>
                            
                        <input type="button" value="立即注册" onClick={this.reg.bind(this)}/><br/>
                    </div>

    <Flex className="agree">
        <Flex.Item>
          <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
            <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>
            <p id="xy">同意 <span>《爱贝多用户用户协议》</span> 和 <span>《社区使用条款》</span></p>
            </a>
          </AgreeItem>
        </Flex.Item>
    </Flex>

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

export default connect(mapStateToProps,actions)(RegisterComponent);