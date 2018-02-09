import {
  Form, Select,  Button, Upload, Icon,Input
} from 'antd';
import * as FruitAction from './FruitAction.js';
import React from 'react';
import { connect } from 'react-redux';
import SpinnerComponent from '../spinner/spinner';
const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;


class Add extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.Add(values);
        this.props.form.resetFields();
      }
    });
  }
  componentWillReceiveProps(){
     location.reload();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 10 },
    };
    return (
      <div>
        <SpinnerComponent show={this.props.loading}>添加成功</SpinnerComponent>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
          label="水果名称"
          {...formItemLayout}
          >
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: '请输入水果名称' },
            ],
          })(
            <Input placeholder="输入名称" />
          )}
            
          </FormItem>

          <FormItem
              label="产地"
              {...formItemLayout}
          >
          {getFieldDecorator('from', {
            rules: [
              { required: true, message: '请输入水果产地' },
            ],
          })(
            <Input placeholder="输入产地" />
          )}
          </FormItem>

          <FormItem
              label="规格"
              {...formItemLayout}
          >
          {getFieldDecorator('standard', {
            rules: [
              { required: true, message: '请输入水果规格' },
            ],
          })(
              <Input placeholder="输入规格" />
          )}
          </FormItem>
          <FormItem
              label="原价"
              {...formItemLayout}
          >
          {getFieldDecorator('price', {
            rules: [
              { required: true, message: '请输入水果原价' },
            ],
          })(
              <Input placeholder="输入原价" />
          )}
          </FormItem>

          <FormItem
              label="售价"
              {...formItemLayout}
          >
          {getFieldDecorator('discount', {
            rules: [
              { required: true, message: '请输入水果售价' },
            ],
          })(
              <Input placeholder="输入售价" />
          )}
          </FormItem>
            <FormItem
              {...formItemLayout}
              label="类型"
              hasFeedback
            >
              {getFieldDecorator('type', {
                rules: [
                  { required: true, message: '请选择水果类型' },
                ],
              })(
                <Select placeholder="请选择类型">
                  <Option value="当季时令">当季时令</Option>
                  <Option value="热带水果">热带水果</Option>
                  <Option value="芒橙柑柚">芒橙柑柚</Option>
                  <Option value="苹果梨子">苹果梨子</Option>
                  <Option value="西瓜蜜瓜">西瓜蜜瓜</Option>
                  <Option value="桃李杏枣">桃李杏枣</Option>
                  <Option value="现切水果">桃李杏枣</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="等级"
              hasFeedback
            >
              {getFieldDecorator('class', {
              rules: [
                { required: true, message: '请选择水果等级' },
              ],
            })(
                <Select placeholder="请选择等级">
                  <Option value="A级">A级</Option>
                  <Option value="B级">B级</Option>
                </Select>
            )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="储存方式"
              hasFeedback
            >
              {getFieldDecorator('saving_mode', {
              rules: [
                { required: true, message: '请选择水果储存方式' },
              ],
            })(
                <Select placeholder="请选择方式">
                  <Option value="常温">常温</Option>
                  <Option value="冷藏">冷藏</Option>
                </Select>
            )}
            </FormItem>
            <FormItem
              label="详情"
              {...formItemLayout}
            >
            {getFieldDecorator('description', {
              rules: [
                { required: true, message: '请输入水果详情' },
              ],
            })(
               <TextArea placeholder="请输入详情" />
            )}
            </FormItem>
            <FormItem
              label="图片"
              {...formItemLayout}
          >
          {getFieldDecorator('imgurl', {
            rules: [
              { required: true, message: '请上传水果图片' },
            ],
          })(
              <Input placeholder="上传图片" />
          )}
          </FormItem>

          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit">添加</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const FA = Form.create()(Add);

const mapStateToProps = function(state){
    return {
        loading: state.fruit.loading,
        res: state.fruit.res || []
    }
}

export default connect(mapStateToProps, FruitAction)(FA);