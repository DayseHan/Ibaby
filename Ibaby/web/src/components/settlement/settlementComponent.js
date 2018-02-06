import React, {Component} from 'react'
import {connect} from 'react-redux'
// import './settlement.scss'
import * as actions from './settlementAction.js'
import { NavBar,Checkbox} from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;
let settlement =[]
let getdate=[]
 class settlementComponent extends Component{
    getBack(){
            
    }
    componentWillMount(){
        this.props.getpay();
        this.props.getdate();
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
                            <img src="./src/assets/images/cart/timg.jpg" alt="" />
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
                        <div className="alipay">
                            <img src="./src/assets/images/cart/wechat.jpg" alt="" />
                            <div className="paystyle">
                                <div className="zfb">微信支付</div>
                                <div className="bank">快捷安全,可支持银行卡支付
                                </div>
                            </div>
                            <div className="payright">
                                <AgreeItem data-seed="logId">
                                </AgreeItem>
                            </div>
                        </div>
                        <div className="alipay">
                            <img src="./src/assets/images/cart/tokio.jpg" alt="" />
                            <div className="paystyle">
                                <div className="zfb">蚂蚁花呗</div>
                                <div className="bank">这个月买，下个月还,0费用
                                </div>
                            </div>
                            <div className="payright">
                                <AgreeItem data-seed="logId">
                                </AgreeItem>
                            </div>
                        </div>
                    </div>
                    <div className='orderlist'>
                        <div className="orderhead">
                            订单信息
                        </div>
                        <div className="order">
                         {
                        this.props.settlement.map((item) => {
                            return (
                                <li key={item.orderid}>

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
        settlement:state.cart.result || [],
        getdate:state.cart.result || []
    }
}

export default connect(mapStateToProps, actions)(settlementComponent);