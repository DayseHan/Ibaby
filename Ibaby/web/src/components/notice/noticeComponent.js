import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link,hashHistory} from 'react-router'
import {Tabs} from 'antd-mobile'
import http from '../../utils/httptool.js'

import './notice.scss'

class noticeComponent extends Component{
    _back(){
        hashHistory.go(-1);
    }

    render(){
        const tabs = [
            { title: '交易物流'},
            { title: '互动' },
            { title: '优惠' },
        ];
        return (
            <div className="notice">
                <div className="noticeheader">
                    <i className="iconfont icon-shangyiye1" onClick={this._back.bind(this)}></i>
                    <h1>通知</h1>
                </div>
                <div className="tabs">
                    <Tabs tabs={tabs} tabBarActiveTextColor="#FFA3B1" tabBarTextStyle={{fontSize:'30px'}}>
                        <div>再忙也不能亏待自己和孩子</div>
                        <div>养娃路上，有人陪伴就不孤单</div>
                        <div>放心，若有优惠肯定会通知你的</div>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default noticeComponent;