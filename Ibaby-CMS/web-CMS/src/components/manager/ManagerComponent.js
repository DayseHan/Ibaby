import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ManagerAction from './ManagerAction.js';
import SpinnerComponent from '../spinner/spinner';
import { Table, Input, Icon, Button, Popconfirm, Modal } from 'antd';

import './Manager.scss'

class ManagerComponent extends Component {
  componentDidMount(){
    this.props.Init();
  }
  componentWillReceiveProps(nextProps){
    this.setState({data:nextProps.dataset.data});
  }
  constructor(props){
    super(props);
  }
  save = event=>{
    if(event.target.tagName.toLowerCase() == 'a'){
      let obj = {};
      obj.id=event.target.parentNode.parentNode.children[0].innerText;
      obj.name = event.target.parentNode.parentNode.children[1].innerText;
      obj.status = event.target.parentNode.parentNode.children[2].innerText;
      obj.password = event.target.parentNode.parentNode.children[3].innerText;
      this.props.Edit(obj).then(res=>{
        if(res.status == '1'){
          this.props.Init();
        }
      });
    }
  }
  delete = event=>{
    if(event.target.tagName.toLowerCase() == 'a'){
      let id=event.target.parentNode.parentNode.children[0].innerText;
      let ele = event.target.parentNode.parentNode
      // ele.parentNode.removeChild(ele);
      if(id !=''){
        this.props.Delete(id).then(res=>{
          if(res.status == '1'){
            console.log(444)
            this.props.Init();
          }
        });
      }
      
    }
  }
  render() {
    return (
      <div className='tb'>
         <SpinnerComponent show={this.props.loading}/>
         <table>
            <thead>
              <tr key={'th-tr'}>
                <th key={'th1'}>ID</th>
                <th key={'th2'}>用户名</th>
                <th key={'th3'}>权限</th>
                <th key={'th4'}>密码</th>
                <th key={'thd'}>操作</th>
              </tr>
            </thead>
            <tbody>
              {
                  (this.props.dataset.data || []) .map(function(obj, idx){
                      return (
                          <tr key={'tr' + idx}>
                              {
                                Object.keys(obj).map(function(key, i){
                                  return <td contentEditable={i>0} key={'td' + i}>{obj[key]}</td>;
                                })
                              }
                              <td key={'con'+idx}><a className= 'a_edit' onClick={this.save}></a><a className='a_del' onClick={this.delete}>删除</a></td>
                          </tr>
                      )
                  }.bind(this))
              }
            </tbody>
         </table>
      </div>
    );
  }
}


const mapStateToProps = function(state){
    return {
      loading: state.manager.loading,
      dataset: state.manager.dataset || [],
      res: state.manager.res || []
    }
}

export default connect(mapStateToProps, ManagerAction)(ManagerComponent);

