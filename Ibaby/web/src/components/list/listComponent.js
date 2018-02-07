import React,{Component} from 'react'
import {Link} from 'react-router'
import './list.scss'
import PrevBack from '../back/backComponent'
import {connect} from 'react-redux'
import * as actions from './listAction'

class List extends Component{
    state = {
        selectList:[
            { title: "综合"},
            { title: "销量"},
            { title: "价格"},
            { title: "筛选"}            
        ],
        activeIdx:'0',
        eleFixed:'list-main-select',
        gId : 0
    };
    /**
     * 
     */
    componentWillMount(){
        let gId = this.props.params.id;
        this.getlist(gId);
        this.state.gId = gId;
    }
    componentDidMount(){
        this.windowOnScroll();
    }
    getlist(id,index = 0){
        this.props.getlist(id,index).then((res) => {
            console.log(res);
        })
    }
    select(index) {
        this.setState({ activeIdx: index });
        let idxId = this.state.gId;
        this.getlist(idxId,index);
    }
    windowOnScroll(){
        let selectFixed = this.refs.selectFixed;
        window.onscroll = ()=>{
            
        }
    }
    componentWillUpdate(){

    }
    render(){
        return(
            <div className="listPage" ref="listEle">
                <div className="list-header-top">
                    <div className="list-header">
                        <PrevBack/>
                        <div className="list-header-search">
                            <span></span>   
                        </div>
                        <div className="list-header-swith">
                            <i className="iconfont icon-leimupinleifenleileibie"></i>
                        </div>    
                    </div>
                    <div className={this.state.eleFixed} ref="selectFixed">
                        <ul>
                            {
                                this.state.selectList.map((item, index) => {
                                    return (
                                        <li key={index} className={this.state.activeIdx == index ? 'list-active' : ''} onClick={this.select.bind(this, index)}>{item.title}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="list-main">
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
    console.log(state.getlist.list);
    return {
        listState: state.getlist.status,
        listResult: state.getlist.list || []
    }
}

export default connect(mapStateToProps, actions)(List) 