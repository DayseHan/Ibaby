import React,{Component} from 'react'
import {Link} from 'react-router'
import './list.scss'
import PrevBack from '../back/backComponent'
import {connect} from 'react-redux'
import * as actions from './listAction'

class List extends Component{
    state = {
        selectList:[
            { title: "综合排序"},
            { title: "新品优先"},
            { title: "销量"},
            { title: "价格"},
            { title: "筛选"}            
        ],
        activeIdx:'0'
    }
    componentWillMount(){
        let gId = this.props.params.id;
        this.props.getlist(gId).then((res)=>{
            // console.log(res);
        })
    }
    select(index){
        this.setState({activeIdx:index})
    }
    render(){
        return(
            <div className="listPage">
                <div className="list-header-top">
                    <PrevBack/>
                    <div className="list-header-search">
                        <span></span>   
                    </div>
                    <div className="list-header-swith">
                        <i className="iconfont icon-leimupinleifenleileibie"></i>
                    </div>    
                </div>
                <div className="list-main">
                    <div className="list-main-select">
                        <ul>
                            {
                                this.state.selectList.map((item,index)=>{
                                    return (
                                        <li key={index} className={this.state.activeIdx == index ?'list-active':''} onClick={this.select.bind(this,index)}>{item.title}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="list-main-results">
                        {
                            this.props.listResult.map((item,index)=>{
                                let paramId = {
                                    pathname:'/details',
                                    query:{
                                        id: item.id
                                    }
                                }
                                return (
                                    <Link className="list-item" to={paramId} key={index}>
                                        <div className="list-img">
                                            <img src={item.imgurl}/>
                                        </div>
                                        <div className="list-info">
                                            <div className="list-title">
                                                <span>{item.name}</span>
                                            </div>
                                            <div className="list-price">
                                                <span className="list-totalPrice">{(item.oldPrice*item.zhekou).toFixed(2)}</span>
                                                <span className="list-buyNum">{item.buyNum}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        listState: state.getlist.status,
        listResult: state.getlist.list || []
    }
}

export default connect(mapStateToProps, actions)(List)