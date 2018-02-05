import React,{Component} from 'react'
import {Link} from 'react-router'
import * as actions from './classifyAction'
import { connect } from 'react-redux'
import { Tabs, WhiteSpace } from 'antd-mobile';
import './classify.scss'
import PrevBack from '../prevBack/prevBack'




const tabs = [
    { title: '分类' },
    { title: '品牌' }
];

class Classify extends Component{
    state = {
        activeIndex:0
    }
    componentDidMount(){
        this.props.getMenu()
    }
    chooseMenu(index){
        this.setState({ activeIndex : index})
    }
    render(){
        // console.log(this.props.ajaxResult);
        let arr = [];
        let listNav = this.props.ajaxResult[1];
        listNav.forEach((item, i)=>{
            let index = -1;
            let alreact = arr.some((Item, j)=>{
                if (item.cateIndex === Item.cateIndex) {
                    index = j;
                    return true;
                }
            });
            if (!alreact) {
                arr.push({
                    cateIndex: item.cateIndex,
                    goodsArr: [{ listId: item.cateId, listName: item.cateName, listImg:item.cateImg }]
                });
            } else {
                arr[index].goodsArr.push({ listId: item.cateId, listName: item.cateName, listImg: item.cateImg })
            }
        });
        return (
            <div className="classifylist">
                <div className="classify-header-top">
                    <PrevBack/>
                    <div className="classify-seach">
                        <i className="iconfont icon-search"></i>
                        <span>dadasd</span>
                    </div>
                    <div className="classify-scan">
                        <Link to="#" className="iconfont icon-saoyisao"></Link>
                    </div>
                </div>
                <div className="classify-main">
                    <Tabs tabs={tabs} initalPage={'t2'}>
                        <div className="menu-main">
                            <div className="menu-main-left">
                                <ul>
                                    { 
                                        this.props.ajaxResult[0].map((item,index)=>{
                                            return (
                                                <li className={this.state.activeIndex==index ? "menu-active" : ''} key={index}  onClick={this.chooseMenu.bind(this,index)}>
                                                    <span>{item.category}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="menu-main-right">
                                <dl>
                                    {
                                        arr.map((item,index)=>{
                                            const navRes = item.goodsArr.map((items,indexs)=>{
                                                return (<li key={indexs}>
                                                        <Link to={"/list/"+items.listId}>
                                                            <img src={items.listImg}/>
                                                            <p>{items.listName}</p>
                                                        </Link>
                                                    </li>)
                                            })
                                            return (
                                                <dd key={index}>
                                                    <h4>{item.cateIndex}</h4>
                                                    <ul>{navRes}</ul>
                                                </dd>
                                            )
                                        })
                                    }
                                </dl>
                            </div>
                        </div>
                        <div style={{ display: 'flex',backgroundColor: '#fff' }}>
                            Content of second tab
                        </div>
                    </Tabs>
                </div> 
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        ajaxStatus:state.menulist.status,
        ajaxResult: state.menulist.menulist ? state.menulist.menulist : [[],[]]
    }
}

export default connect(mapStateToProps, actions)(Classify);