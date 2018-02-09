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
    // e.preventDefault();
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
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 10 },
    };
    return (
      <div>
        <SpinnerComponent show={this.props.loading}>添加成功</SpinnerComponent>
        <Form>
          <FormItem
          label="商品名称"
          {...formItemLayout}
          >
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: '请输入商品名称' },
            ],
          })(
            <Input placeholder="输入名称" />
          )}
            
          </FormItem>

          <FormItem
              label="商品标题"
              {...formItemLayout}
          >
          {getFieldDecorator('title', {
            rules: [
              { required: true, message: '请输入商品标题' },
            ],
          })(
            <Input placeholder="输入商品标题" />
          )}
          </FormItem>

          <FormItem
              label="价格"
              {...formItemLayout}
          >
          {getFieldDecorator('oldPrice', {
            rules: [
              { required: true, message: '请输入商品价格' },
            ],
          })(
              <Input placeholder="输入价格" />
          )}
          </FormItem>
          <FormItem
              label="折扣"
              {...formItemLayout}
          >
          {getFieldDecorator('zhekou', {
            rules: [
              { required: true, message: '请输入商品折扣' },
            ],
          })(
              <Input type='number' placeholder="输入商品折扣" />
          )}
          </FormItem>

          <FormItem
              label="购买的人数"
              {...formItemLayout}
          >
          {getFieldDecorator('buyNum', {
            rules: [
              { required: true, message: '请输入购买的人数' },
            ],
          })(
              <Input type='number' placeholder="输入购买的人数" />
          )}
          </FormItem>
            <FormItem
              {...formItemLayout}
              label="尺寸"
              hasFeedback
            >
              {getFieldDecorator('size', {
                rules: [
                  { required: true, message: '请选择商品尺寸' },
                ],
              })(
                <Select placeholder="请选择类型">
                  <Option value="S">S</Option>
                  <Option value="M">M</Option>
                  <Option value="L">L</Option>
                  <Option value="XL">XL</Option>
                  <Option value="XLL">XLL</Option>
                  <Option value="XLLL">XLLL</Option>
                  <Option value="LLL">LLL</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="商品颜色"
              hasFeedback
            >
              {getFieldDecorator('color', {
              rules: [
                { required: true, message: '请选择商品颜色' },
              ],
            })(
                <Select placeholder="请选择商品颜色">
                  <Option value="红色">红色</Option>
                  <Option value="白色">白色</Option>
                  <Option value="黑色">黑色</Option>
                  <Option value="蓝色">蓝色</Option>
                  <Option value="黄色">黄色</Option>
                  <Option value="紫色">紫色</Option>
                </Select>
            )}
            </FormItem>
            <FormItem
              label="listsId详情"
              {...formItemLayout}
            >
            {getFieldDecorator('listsId', {
              rules: [
                { required: true, message: '请输入商品listsId详情' },
              ],
            })(
               <TextArea placeholder="请输入listsId的id" />
            )}
            </FormItem>
            <FormItem
              label="brandId详情"
              {...formItemLayout}
            >
            {getFieldDecorator('brandId', {
              rules: [
                { required: true, message: '请输入商品brandId详情' },
              ],
            })(
               <TextArea placeholder="请输入brandId的id" />
            )}
            </FormItem>
            
            <FormItem
              label="imgurl图片路径"
              {...formItemLayout}
            >
            {getFieldDecorator('imgurl', {
              rules: [
                { required: true, message: '请输入商品图片路径' },
              ],
            })(
               <TextArea placeholder="请输入图片路径" />
            )}
            </FormItem>
            <FormItem
              label="groundImg图片路径"
              {...formItemLayout}
            >
            {getFieldDecorator('groundImg', {
              rules: [
                { required: true, message: '请输入groundImg图片路径' },
              ],
            })(
               <TextArea placeholder="请输入groundImg图片路径" />
            )}
            </FormItem>
            


          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <div className="buttons"> 
              <Button onClick={this.doCancel} style={{marginRight:'15px'}}>取消</Button>
              <Button type="primary" onClick={this.handleSubmit}>添加</Button>
            </div>
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