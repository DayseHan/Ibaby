
import React from 'react';
import {hashHistory} from 'react-router'
import { Form, Input, Button, notification, Icon } from 'antd';


import './login.scss'

const FormItem = Form.Item;



class LoginPage extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        if (n!=''&&p!='') {
            let url = 'http://localhost:777/login.php';
            let formData = new FormData();
            formData.username= n;
            formData.password= p;
            fetch(url,{
                method: 'post',
                body: JSON.stringify(formData)
            }).then(function (res) {
                return res.json()
            }).then(function (data){
                if(data.res == true){
                    document.cookie = 'manager='+data.user+';path=/';
                    hashHistory.push('/home') 
                }else if(data.res == false){
                    alert('登录失败！！！')
                }
            })
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <p>欢迎来到萌宝后台管理系统</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input key='name' placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input key='pwd' type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;
