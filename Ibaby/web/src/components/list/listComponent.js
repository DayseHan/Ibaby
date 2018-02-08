import React,{Component} from 'react'
import {Link} from 'react-router'
import './list.scss'
import PrevBack from '../back/backComponent'
import {connect} from 'react-redux'
import * as actions from './listAction'
import ScrollBtn from '../scrollTop/scrollTop'

class List extends Component{
    state = {
        selectList:[
            { title: "综合"},
            { title: "销量"},
            { title: "价格↑"},
            { title: "价格↓"},            
            { title: "筛选"}            
        ],
        activeIdx:'0',
        eleFixed:'list-main-select',
        gId : 0
    };
    componentWillMount(){
        let gId = this.props.params.id;
        this.getlist(gId);
        this.state.gId = gId;
    }
    componentDidMount(){
        window.addEventListener('scroll',this.selectFix.bind(this));
    }
    selectFix(){
        let selectFix = this.refs.selectFixed;
        let selectY = window.scrollY;
        if(selectY >= 300){
            selectFix.classList.add('list-main-select-fixed');
        }else{
            selectFix.classList.remove('list-main-select-fixed');
        }
    }
    getlist(id,index = 0){
        this.props.getlist(id,index)
    }
    
    select(index) {
        this.setState({ activeIdx: index });
        let idxId = this.state.gId;
        if(index==4){
            return;
        }else{
            this.getlist(idxId, index);
        }
    }
    render(){
        return(
            <div className="listPage">
                <div className="list-header-top">
                    <div className="list-header">
                        <PrevBack/>
                        <div className="list-header-title">
                            商品列表   
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
                                                <span className="list-totalPrice">{item.newPrice.toFixed(2)}</span>
                                                <span className="list-buyNum">{item.buyNum}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <ScrollBtn/>
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