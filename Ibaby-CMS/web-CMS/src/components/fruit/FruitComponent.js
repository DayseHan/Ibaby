import { Table, Input, Popconfirm, Button } from 'antd';
import * as FruitAction from './FruitAction.js';
import React from 'react';
import { connect } from 'react-redux';
import './Fruit.scss';
import SpinnerComponent from '../spinner/spinner';

const data = [];
const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);

class EditableTable extends React.Component {
  componentDidMount(){
    this.props.Init();
  }
  componentWillReceiveProps(nextProps){
      this.setState({data:nextProps.dataset.data});
  }
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'ID',
      dataIndex: 'id',
      width: '6%',
      render: (text, record) => this.renderColumns(text, record, 'id'),
    }, {
      title: '商品名称',
      dataIndex: 'name',
      width: '24%',
      render: (text, record) => this.renderColumns(text, record, 'name'),
    }, {
      title: '商品标题',
      dataIndex: 'title',
      width: '24%',
      render: (text, record) => this.renderColumns(text, record, 'title'),
    }, {
      title: '价格',
      dataIndex: 'oldPrice',
      width: '6%',
      render: (text, record) => this.renderColumns(text, record, 'oldPrice'),
    }, {
      title: '折扣',
      dataIndex: 'zhekou',
      width: '6%',
      render: (text, record) => this.renderColumns(text, record, 'zhekou'),
    }, {
      title: '购买的人数',
      dataIndex: 'buyNum',
      width: '8%',
      render: (text, record) => this.renderColumns(text, record, 'buyNum'),
    }, {
      title: '尺寸',
      dataIndex: 'size',
      width: '6%',
      render: (text, record) => this.renderColumns(text, record, 'size'),
    }, {
      title: '颜色',
      dataIndex: 'color',
      width: '6%',
      render: (text, record) => this.renderColumns(text, record, 'color'),
    },{
      title: '操作',
      width: '10%',
      dataIndex: 'operation',
      render: (text, record) => {
        const { editable } = record;
        return (
          <div className="editable-row-operations">
                <Popconfirm title="Sure to delete?" onConfirm={() => this.delete(record.id)}>
                  <a href="#">Delete</a>
                </Popconfirm>
            {
              editable ?
                <span>
                  <a onClick={() => this.cancel(record.id)}>/Save</a>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.save(record.id)}>
                    <a>/Cancel</a>
                  </Popconfirm>
                </span>
                : <a onClick={() => this.edit(record.id)}>/Edit</a>
            }
          </div>
        );
      },
    }];
    this.state = { data };
    this.cacheData = data.map(item => ({ ...item }));
  }
  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.id, column)}
      />
    )
  }
  handleChange(value, id, column) {
    const newData = [...this.state.data];
    const target = newData.filter(item => id === item.id)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }
  edit(id) {
    const newData = [...this.state.data];
    const target = newData.filter(item => id === item.id)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: newData });
    }
  }
  save(id) {
    const newData = [...this.state.data];
    const target = newData.filter(item => id === item.id)[0];
    if (target) {
      delete target.editable;
      this.setState({ data: newData });
      this.cacheData = newData.map(item => ({ ...item }));
    }
    // this.props.Edit(newData);
    for(let i=0; i<newData.length; i++){
      if(newData[i].id == id){
        this.props.Edit(newData[i]);
      }
    }
    this.props.Init();
  }
  delete(id){
    this.props.Delete(id);
    this.props.Init();
  }
  cancel(id) {
    const newData = [...this.state.data];
    const target = newData.filter(item => id === item.id)[0];
    if (target) {
      Object.assign(target, this.cacheData.filter(item => id === item.id)[0]);
      delete target.editable;
      this.setState({ data: newData });
    }
  }
  render() {
    return (
      <div>
        <SpinnerComponent show={this.props.loading}/>
        <Table bordered dataSource={this.state.data} columns={this.columns} expandedRowRender={record => <p>{record.listsId}</p>}/>
      </div>
    )
  }
}

const mapStateToProps = function(state){
    return {
        loading: state.fruit.loading,
        dataset: state.fruit.dataset || [],
        res: state.fruit.res || []
    }
}

export default connect(mapStateToProps, FruitAction)(EditableTable);