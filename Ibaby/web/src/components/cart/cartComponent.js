import React, {Component} from 'react'
import {connect} from 'react-redux'
import './cart.scss'
import { NavBar,Checkbox} from 'antd-mobile';
import * as actions from './cartAction'
import FooterComponent from '../footer/footerComponent.js'
import {hashHistory} from 'react-router'

let cartids = [];
let goodsids = [];
let counts =[];
let value =1;



const AgreeItem = Checkbox.AgreeItem;
class CartComponent extends Component {
    componentWillMount(){
        this.props.getCartList();
    }
    state={
        total:0,
        qty:0
    }
    genOrder(){
        this.props.genOrder(cartids.join(','), goodsids.join(','),counts.join(',')).then((res) => {
            this.props.getCartList();
        })
        hashHistory.push('/settlement')
    }
    edit(){
        this.refs.edit.style.display="none";
        // document.getElementById('contents').style.display='none';
        // document.getElementById('carcount').style.display='block';
        this.refs.complete.style.display="block"
    }
    complete(){
        this.refs.complete.style.display="none";
        // document.getElementById('contents').style.display='block';
        // document.getElementById('carcount').style.display='none';
        this.refs.edit.style.display="block"
    }
    alls(){

    }
 
    selectItem(indexid, goodsid, count, price, event){
        if(event.target.checked){
            if(cartids.indexOf(indexid) < 0){
                cartids.push(indexid)
            }
            if(goodsids.indexOf(goodsid) < 0){
                goodsids.push(goodsid)
            }
            if(counts.indexOf(count) < 0){
                counts.push(count)
            }
            this.setState({total:this.state.total+=count*price})
            this.setState({qty:this.state.qty+=count})
            console.log(this.state.qty)
        } else {
            if(cartids.indexOf(indexid) > -1){
                cartids.splice(cartids.indexOf(indexid), 1)
            }
            if(goodsids.indexOf(goodsid) > - 1){
                goodsids.splice(goodsids.indexOf(goodsid), 1)
            }
            if(counts.indexOf(count) > - 1){
                counts.splice(counts.indexOf(count), 1)
            }
             this.setState({total:this.state.total-=count*price})
            this.setState({qty:this.state.qty-=count})
            console.log(this.state.qty)               
        }
        console.log(cartids, goodsids,counts,);
    }
    
    render(){
        return (
            <div className="car">
                <div className="head">
                    <NavBar mode="light"
                    rightContent={[
                        <div className="edit" key="10"ref="edit"onClick={this.edit.bind(this)}>编辑</div>,
                        <div className="complete" key="11"ref="complete" onClick={this.complete.bind(this)}>完成</div>
                    ]}
                    >购物车
                    </NavBar>
                </div>
                <div className="carlist">
                    <div className="carhead">
                        <i className="iconfont icon-dianpu"></i>
                        <div className='shop'>萌贝佳婴服饰舰旗店</div>
                        <div className="redact"></div>
                    </div>
                    {
                        this.props.cartList.map((item,idx) => {
                            return (
                                <li key={idx}>
                                    <div className="toplist">
                                        <AgreeItem data-seed="logId" onClick={this.selectItem.bind(this, item.indexid, item.goodsid, item.count, item.price)}>
                                        </AgreeItem>
                                        <img src={item.imgurl} />
                                        <div className="content"id="content">
                                            <div className="goodsName">{item.name}</div>
                                            <div className="introduce">{item.branch}</div>
                                            <div className ="compute">
                                                <div className="price">¥{item.price}</div>
                                                <div className ='counts'>x<div className ='count'>{item.count}</div></div>
                                            </div>
                                        </div>
                                        <div className="carcount">
                                            <div className="input">
                                                <div className="reduct">-</div>
                                                <input type="text"/>
                                                <div className="add">+</div>
                                            </div>
                                            <div className="goodsName"id="goodsName">{item.name}</div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </div>
                <div className="foot">
                    <NavBar mode="light"
                    leftContent={[
                        <AgreeItem data-seed="logId"key="16"  onClick={this.alls.bind(this)}>
                        全选
                        </AgreeItem>
                        ]}
                    rightContent={[
                        <div className="total"key="13" >总计:¥<span className="totalprice">{this.state.total}</span></div>,
                        <div className=" closing" key="14" onClick={this.genOrder.bind(this)}>结算({this.state.qty})</div>   
                    ]}>
                    </NavBar>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        cartList:state.cart.result || []
    }
}

export default connect(mapStateToProps, actions)(CartComponent);