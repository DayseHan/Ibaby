import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavBar,Checkbox} from 'antd-mobile';
import './address.scss'
import {hashHistory} from 'react-router'
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import { district, provinceLite } from 'antd-mobile-demo-data'
var treeChildren =''
export default class CartComponent extends Component {
    state = {
        data: [],
        cols: 1,
        pickerValue: [],
        asyncValue: [],
        visible: false,
    }
    getSel() {
        const value = this.state.pickerValue;
        if (!value) {
          return '';
        }
        treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
        return treeChildren.map(v => v.label).join(',');
      }
    complete(){
      var address=treeChildren.map(v => v.label).join(',')
      var review =this.refs.review.value;
      var phone =this.refs.phone.value;
      var definite =this.refs.definite.value;
      var site=review+','+phone+','+address+','+definite
        console.log(site);
         localStorage.setItem('address',site);
         hashHistory.push("/settlement");
    }
    goBack(){
        hashHistory.go(-1); 
    }
    render(){

        return(
            <div className="address">
                <div className="head">
                    <NavBar mode="light"
                     leftContent={[
                        <i className="iconfont icon-shangyiye1"key="18" onClick={this.goBack.bind(this)}></i>
                    ]}
                    rightContent={[
                        <div className="complete" key="11"ref="complete" onClick={this.complete.bind(this)}>完成</div>
                    ]}
                    >新增收货地址
                    </NavBar>
                </div>
                <div className="form">
                    <li>
                        <label>收货人</label><input type="text"placeholder="请输入收货人姓名"ref="review"/>
                    </li>
                    <li>
                        <label>手机号码</label><input type="text"placeholder="请输入手机号码"ref="phone"/>
                    </li>
                    <Picker
                          visible={this.state.visible}
                          data={district}
                          value={this.state.pickerValue}
                          onChange={v => this.setState({ pickerValue: v })}
                          onOk={() => this.setState({ visible: false })}
                          onDismiss={() => this.setState({ visible: false })}
                        >
                          <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
                            省市选择
                          </List.Item>
                    </Picker>
                    <li id="last">
                        <label>详细地址</label><input type="text"placeholder="请输入详细地址"ref="definite"/>
                    </li>
                </div>
            </div>
            )
    }
}