import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import './searchpage.scss'

class searchpageComponent extends Component{
    _back(){
        hashHistory.go(-1);
    }

    render(){
        return (
            <div className="searchpage">
                <div className="searchpageheader">
                    <i className="iconfont icon-shangyiye1" onClick={this._back.bind(this)}></i>
                    <div>
                        <span>商品</span><span>育儿</span><span>亲子</span>
                    </div>
                </div>
                <div className="searchcontent">
                    <div>
                        <div className="searchinput">
                            <i className="iconfont icon-search"></i>
                            <input type="text" placeholder="纸尿裤199减50"/>
                        </div>
                        <div className="sousuo">搜索</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default searchpageComponent;
