import React, {Component} from 'react'
import {connect} from 'react-redux'
import './settlement.scss'
import * as actions from './settlementAction.js'
import { NavBar,Checkbox} from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;
import {hashHistory} from 'react-router'


 class settlementComponent extends Component{
    getBack(){
        hashHistory.go(-1);   
    }
    componentWillMount(){
           this.props.getdate()
    }
    orders(orderid){
       console.log(orderid);
       this.props.getpay(orderid).then((res) => {
            this.props.getdate();
        }) 
    }
    render(){
        return (
            <div className="Settlement">
                <header>
                    <i className="iconfont icon-shangyiye1"onClick={this.getBack.bind(this)}>
                    </i>
                    <div className="closing">结算</div>
                </header>
                <div className='midheight'>
                    <div className="Receiving">
                        <div className="site">
                            请添加你的收货地址
                        </div>
                        <i className="iconfont icon-xiayiye1"/> 
                    </div>  
                    <div className="pay">
                        <div className="paytype">
                            选择支付方式
                        </div>
                        <div className="alipay">
                            <div className="clear">
                                <div className="img">
                                    <img src="./src/assets/images/cart/timg.jpg" alt="" />
                                </div>
                                <div className="paystyle">
                                    <div className="zfb">支付宝</div><div className="recommend">推荐</div>
                                    <div className="bank">推荐已在支付宝中绑定银行的用户使用
                                    </div>
                                </div>
                                <div className="payright">
                                    <AgreeItem data-seed="logId">
                                    </AgreeItem>
                                </div>
                            </div>
                        </div>
                        <div className="alipay">
                            <div className="clear">
                                <div className="img">
                                    <img src="./src/assets/images/cart/wechat.jpg" alt="" />
                                </div>
                                <div className="paystyle">
                                    <div className="zfb">微信</div>
                                    <div className="bank">快捷安全，可支持银行卡支付
                                    </div>
                                </div>
                                <div className="payright">
                                    <AgreeItem data-seed="logId">
                                    </AgreeItem>
                                </div>
                            </div>
                        </div> 
                       <div className="alipay">
                            <div className="clear">
                                <div className="img">
                                    <img src="./src/assets/images/cart/tokio.jpg" alt="" />
                                </div>
                                <div className="paystyle">
                                    <div className="zfb">蚂蚁花呗</div>
                                    <div className="bank">这月买，下月还，0费用
                                    </div>
                                </div>
                                <div className="payright">
                                    <AgreeItem data-seed="logId">
                                    </AgreeItem>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='orderlist'>
                        <div className="orderhead">
                            订单信息
                        </div>
                        <div className="order">
                        <div className="ordertop">
                        <div className="ran"></div>
                        <div className="orderid">订单号：</div>
                         {
                            this.props.settlement.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <div className="ordernumber">{Date.parse(item.add_time)}</div> 
                                    <div className="orders"onClick={this.orders.bind(this,item.orderid)}>查看订单
                                    </div>
                                </div>
                                )
                            })
                        }
                        </div>
                         {
                            this.props.Order.map((item, idx) => {
                            return (
                                <li key={idx} className="Orders">
                                    <div className="Img">
                                        <img src={item.imgurl}/>
                                    </div>
                                    <div className="content">
                                    <div className="name">{item.name}</div>
                                    <div className="title">{item.color}</div>
                                    <div className="price"><div className="mony">￥</div><div className="Price">{item.oldPrice}</div></div>
                                    <div className="count"> <div className="Count">{item.count}</div><div className="qty">x</div></div>
                                    </div>
                                </li>
                            )
                            })
                        }
                        </div>
                    </div>
                </div> 
                <div className="orderfooter">
                    <div className="paypal">
                        支付订单
                    </div>
                    <div className="total">
                        <div className="altotal">总计:¥
                            <div className="price"></div>
                        </div>    
                        <div className='free'>(免运费)</div>
                    </div>
                </div>        
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    console.log(state)
    return {
        settlement:state.settlement.result || [],
        Order:state.settlement.order_result || []
    }
}

export default connect(mapStateToProps, actions)(settlementComponent);