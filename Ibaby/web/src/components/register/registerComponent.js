import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './registerAction'
import BackComponent from '../back/backComponent'
import './register.scss';
import { List, Checkbox, Flex } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;


class RegisterComponent extends Component{
    state = {
        title:'密码注册'
    }

    check_phone(event){
        if(event.target.value){
            this.props.check_phone(event.target.value);
        }
    }

    render(){
        return (
            <div className="register">
                <div className="reg" style={{display:this.state._login2}}>
                    <BackComponent text={this.state.title}></BackComponent>
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

                         <span className="ipt">
                            <i className="iconfont icon-suo"></i>
                            <input type="text" placeholder="请输入6-16位密码"/>
                        </span>
                            
                        <input type="button" value="立即登录"/><br/>
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
        // test:state.login.result || []
    }
}

export default connect(mapStateToProps,actions)(RegisterComponent);