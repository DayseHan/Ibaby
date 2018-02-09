import { Table, Input, Popconfirm, Button,Form, Row, Col } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import * as ClientAction from './ClientAction.js';
//import './user.scss'


const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    user_id: i.toString(),
    user_id:i,
    phone: `Edrward ${i}`,
    password: 12345,
  });
}

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
      dataIndex: 'user_id',
      width: '13%',
      render: (text, record) => this.renderColumns(text, record, 'user_id'),
    }, {
      title: '用户名',
      dataIndex: 'phone',
      width: '25%',
      render: (text, record) => this.renderColumns(text, record, 'phone'),
    }, {
      title: '用户密码',
      dataIndex: 'password',
      width: '25%',
      render: (text, record) => this.renderColumns(text, record, 'password'),
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        const { editable } = record;
       return (
          <div className="editable-row-operations">
                <Popconfirm title="Sure to delete?" onConfirm={() => this.delete(record.user_id)}>
                  <a href="#">Delete</a>
                </Popconfirm>
            {
              editable ?
                <span>
                  <a onClick={() => this.cancel(record.user_id)}>/Save</a>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.save(record.user_id)}>
                    <a>/Cancel</a>
                  </Popconfirm>
                </span>
                : <a onClick={() => this.edit(record.user_id)}>/Edit</a>
            }
          </div>
        );
      },
    }];
    this.state = { data };
    console.log(this.state)
    this.cacheData = data.map(item => ({ ...item }));
  }
  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.user_id, column)}
      />
    )
  }
  handleChange(value, user_id, column) {
    const newData = [...this.state.data];
    const target = newData.filter(item => user_id === item.user_id)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }
  edit(user_id) {
    const newData = [...this.state.data];
    const target = newData.filter(item => user_id === item.user_id)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: newData });
    }
  }
  save(user_id) {
    const newData = [...this.state.data];
    const target = newData.filter(item => user_id === item.user_id)[0];
    if (target) {
      delete target.editable;
      this.setState({ data: newData });
      this.cacheData = newData.map(item => ({ ...item }));
    }
  }
	
	delete(id){
    this.props.Delete(id);
    this.props.Init();
  }
  cancel(user_id) {
    const newData = [...this.state.data];
    const target = newData.filter(item => user_id === item.user_id)[0];
    if (target) {
      Object.assign(target, this.cacheData.filter(item => user_id === item.user_id)[0]);
      delete target.editable;
      this.setState({ data: newData });
    }
  }
  
  
  
  
  render() {
    return <Table bordered dataSource={this.state.data} columns={this.columns}/>;
  }
}

const mapStateToProps = function(state){
    return {
      dataset: state.client.dataset || [],
      res: state.client.res || []
    }
}

export default connect(mapStateToProps, ClientAction)(EditableTable);