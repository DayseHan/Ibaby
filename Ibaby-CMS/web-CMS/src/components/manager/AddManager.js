import {
  Form, Select,  Button, Upload, Icon,Input, Modal
} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
import React from 'react';
import * as ManagerAction from './ManagerAction.js';
import { connect } from 'react-redux';


class addManager extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.Add(values).then(res=>{
          if(res.status == '1'){
            alert('添加成功！！');
            this.props.form.resetFields();
          }
        });
      }
    });
  }
  doCancel = () => {
    this.props.form.resetFields()
  }
  check = () => {
    this.props.Select(this.props.form.getFieldValue('manager_name')).then(res=>{
      if(res.data.length==0){
      }else {
        this.props.form.resetFields();
        alert('用户名已存在！！！')
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = { 
      labelCol: { span: 6 },
      wrapperCol: { span: 10 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
        label="用户名"
        {...formItemLayout}
        >
        {getFieldDecorator('manager_name', {
          rules: [
            { required: true, message: '请输入用户名' },
          ],
        })(
          <Input placeholder="输入用户名" onBlur={this.check}/>
        )}
          
        </FormItem>

        <FormItem
            label="密码"
            {...formItemLayout}
        >
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: '请输入密码' },
          ],
        })(
          <Input type='password' placeholder="输入密码" />
        )}
        </FormItem>

          <FormItem
            {...formItemLayout}
            label="权限"
            hasFeedback
          >
            {getFieldDecorator('status', {
              rules: [
                { required: true, message: '请选择权限' },
              ],
            })(
              <Select placeholder="选择权限">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
            )}
          </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >     
        <div className="buttons">  
           <Button onClick={this.doCancel} style={{marginRight:'15px'}}>取消</Button>
           <Button type="primary" htmlType="submit">确定</Button>
        </div>
        </FormItem>
      </Form>
    );
  }
}

const WrappedaddManager = Form.create()(addManager);

const mapStateToProps = function(state){
    return {
      loading: state.manager.loading,
      res: state.manager.res || []
    }
}
export default connect(mapStateToProps, ManagerAction)(WrappedaddManager);