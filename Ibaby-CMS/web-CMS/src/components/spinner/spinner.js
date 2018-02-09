import React from 'react';
import { Spin, Alert } from 'antd';
import './spinner.scss';

export default class SpinnerComponent extends React.Component{
    render(){
        // console.log(this.props.show)
        if(this.props.show){
            return <Spin tip="Loading..." size="large"></Spin>
        } else {
            return null;
        }
    }
}