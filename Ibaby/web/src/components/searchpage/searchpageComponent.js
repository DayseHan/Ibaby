import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link,hashHistory} from 'react-router'
import http from '../../utils/httptool.js'

import * as actions from './searchpageAction.js'

import './searchpage.scss'

class searchpageComponent extends Component{
    _back(){
        hashHistory.go(-1);
    }
  
    selectproduct(event) {  
        console.log(event.target.value)
        if(event.target.value !==' ' && event.target.value !==''){
            this.props.searchproduct(event.target.value).then(res=>{
                console.log(res.data)
            })
        }else{
            // this.props.searchResult = [];
        }
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
                <div className="sousuokuang">
                    <div className="searchinput">
                        <i className="iconfont icon-search"></i>
                        <input type="text" placeholder="纸尿裤199减50" onChange={this.selectproduct.bind(this)}/>
                    </div>
                    <div className="sousuo">搜索</div>
                </div>
                <div className="searchcontent">
                    <ul className="searchlist">
                        {this.props.searchResult.map((item,idx)=>{
                            var path = {
                                pathname:'/details',
                                query:{id:item.id},
                            }
                            return (
                                <li key={idx} className="searchItem">
                                    <Link to={path}>{item.name}<i className="iconfont icon-xiayiye1"></i></Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.home.status,
        searchResult: state.searchpage.search_result || [],
    }
}

export default connect(mapStateToProps, actions)(searchpageComponent);
