import React from 'react';
import {connect} from 'react-redux';

import SpinnerComponent from '../spinner/spinner';
import * as DatagridAction from './DatagridAction';
import { Table, Input, Popconfirm } from 'antd';
import './Datagrid.scss'

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);
class DatagridComponent extends React.Component{
    componentDidMount(){
        // console.log(document.referrer)
        this.props.Init(this.props.api);
    }
    componentWillReceiveProps(nextProps){
        this.setState({data:nextProps.dataset});
    }
   
    constructor(props) {
        super(props);
        this.pagination = {
            total:30,
        }
        this.columns = [{
          title: 'Id',
          dataIndex: 'gId',
          width: '5%',
          render: (text, record) => this.renderColumns(text, record, 'gId'),
        }, {
          title: '中文名称',
          dataIndex: 'gNameZH',
          width: '12%',
          render: (text, record) => this.renderColumns(text, record, 'gNameZH'),
        }, {
          title: '英文名称',
          dataIndex: 'gNameEN',
          width: '12%',
          render: (text, record) => this.renderColumns(text, record, 'gNameEN'),
        },{
          title: '商品分类',
          dataIndex: 'gClass',
          width: '8%',
          render: (text, record) => this.renderColumns(text, record, 'gClass'),
        }, {
          title: '商品标签',
          dataIndex: 'gTag',
          width: '12%',
          render: (text, record) => this.renderColumns(text, record, 'gTag'),
        },{
          title: '商品价格',
          dataIndex: 'gPrice',
          width: '8%',
          render: (text, record) => this.renderColumns(text, record, 'gPrice'),
        },{
          title: '商品图片',
          dataIndex: 'gPicture',
          width: '8%',
          render: (text, record) => {
            return (
              <img src={text} className='imgstyle' />
              )
          },
        },{
          title: '是否上架',
          dataIndex: 'isPutaway',
          width: '10%',
          render: (text, record) => this.renderColumns(text, record, 'isPutaway'),
        }, {
          title: '操作',
          dataIndex: 'operation',
          render: (text, record) => {
            const { editable } = record;
            return (
              <div className="editable-row-operations">
                {
                  editable ?
                    <span>
                      <a onClick={() => this.save(record.key)}>Save</a>
                      <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                        <a>Cancel</a>
                      </Popconfirm>
                    </span>
                    : <a onClick={() => this.edit(record.key)}>Edit</a>
                }
              </div>
            );
          },
        }];
      }
      renderColumns(text, record, column) {
        return (
          <EditableCell
            editable={record.editable}
            value={text}
            onChange={value => this.handleChange(value, record.key, column)}
          />
        );
      }
      handleChange(value, key, column) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;
          this.setState({ data: newData });
        }
      }
      edit(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target.editable = true;
          this.setState({ data: newData });
        }
      }
      save(key) {
        const newData = [...this.state.data];
        console.log(key);
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          delete target.editable;
          this.setState({ data: newData });
          this.cacheData = newData.map(item => ({ ...item }));
        }
      }
      cancel(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
          delete target.editable;
          this.setState({ data: newData });
        }
      }
      render() {
        return <Table bordered dataSource={this.props.dataset} pagination={this.pagination} columns={this.columns}  />;
      }
}

const mapStateToProps = function(state){
    return {
        loading: state.datagrid.loading,
        dataset: state.datagrid.dataset || []
    }
}

export default connect(mapStateToProps, DatagridAction)(DatagridComponent)