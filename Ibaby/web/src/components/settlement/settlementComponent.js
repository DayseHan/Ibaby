import React, {Component} from 'react'
import {connect} from 'react-redux'
import './settlement.scss'
import * as actions from './settlementAction.js'
import { NavBar,Checkbox} from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;
import {hashHistory} from 'react-router'
import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';
const prompt = Modal.prompt;
const alert = Modal.alert;
var add =''


const showAlert = () => {
    if(!add){
        const alertInstance = alert('提醒', '未填写收货地址信息，请先去添加地址', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '去添加', onPress: () => hashHistory.push('/address') },
          ]);
          setTimeout(() => {
            // 可以调用close方法以在外部close
            console.log('auto close');
            alertInstance.close();
          }, 500000);
    }else{
        hashHistory.push('/payment');
    }
}
 class settlementComponent extends Component{
    state={
        total:0,
        address:localStorage.getItem('address'),
        showadd:'请添加你的收货地址'
    }
    go(){
        hashHistory.push('/address');
    }
    getBack(){
        hashHistory.go(-1);   
    }
    componentWillMount(){
        var uid=localStorage.getItem('user_id')
           this.props.getdate(uid)
           console.log(this.props)
           add=this.state.address
           if(this.state.address){
             this.setState({showadd:''})
           }

    }
    orders(orderid){
        var uid=localStorage.getItem('user_id')
       console.log(orderid);
       
    }
    render(){
        return (
            <div className="Settlement">
                <header >
                    <i className="iconfont icon-shangyiye1"onClick={this.getBack.bind(this)}>
                    </i>
                    <div className="closing">结算</div>
                </header>
                <div className='midheight'>
                    <div className="Receiving"onClick={this.go.bind(this)}>
                        <i className ="iconfont icon-dizhi"/>
                        <div className="site"id="sites">
                            {this.state.showadd}
                        </div>
                        {this.state.address}
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
                        <div className="orderid">订单详情：</div>
                       
                        </div>
                         {
                            this.props.settlement.map((item, idx) => {
                            {
                                this.state.total+=item.oldPrice*item.count,
                                
                                localStorage.setItem('total', this.state.total)

                            }
                            return (    
                                <li key={idx} >
                                    <div className="ordershow">
                                    <div className="selete">订单号：</div>
                                    <div className="ordernumber">{Date.parse(item.add_time)}</div> 
                                    </div>
                                    <div className="Orders">
                                    <div className="Img">
                                        <img src={item.imgurl}/>
                                    </div>
                                    <div className="content">
                                    <div className="name">{item.name}</div>
                                    <div className="title">{item.color}</div>
                                    <div className="price"><div className="mony">￥</div><div className="Price">{item.oldPrice}</div></div>
                                    <div className="count"> <div className="Count">{item.count}</div><div className="qty">x</div></div>
                                    </div>
                                    </div>
                                    <div className="sun">
                                        <div className="tolprice">{item.oldPrice*item.count}
                                        </div>
                                        <div className="coun">小计:</div>
                                    </div>
                                </li>
                            )
                            })
                        }
                        </div>
                    </div>
                </div> 
                <div className="orderfooter">
                    <Button className="paypal"onClick={showAlert}>
                        支付订单
                    </Button>
                    <div className="total">
                        <div className="altotal">总计:¥
                            {this.state.total}
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
        settlement:state.settlement.result || []
    }
}

export default connect(mapStateToProps, actions)(settlementComponent);