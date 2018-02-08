import React, {Component} from 'react'
import {connect} from 'react-redux'
import './payment.scss'
import * as actions from './paymentAction.js'
import {hashHistory} from 'react-router'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

var address=''
 class paymentComponent extends Component {
     state={
        address:localStorage.getItem('address')
    }
    getBack(){
        Toast.offline('支付失败');
        hashHistory.go(-1);
    }
    paynow(){
        Toast.loading('支付中...',1, () => {
             Toast.success('支付成功')
            hashHistory.push('/user')
        });    
    }
    componentWillMount(){
        address=this.state.address
        this.props.statechange(address)
        console.log(this.state.address)
    }
    render(){
        return(
            <div className="payment">
                <div className="payhead">
                    <i className="iconfont icon-shangyiye1"onClick={this.getBack.bind(this)}>
                    </i>
                    <div className="pay">确认交易</div>
                </div>
                <div className="minheight">
                    <div className="pays">
                        <div className="payorder">
                            <div className="orderid">贝贝网订单号</div>
                            <div className="mony"></div>
                        </div>
                        <div className="receipt">
                            <div className="receipt_l">收款方</div>
                            <div className="wz">贝贝网</div>
                        </div>
                    </div>
                    <div className="paying"onClick={this.paynow.bind(this)}>立即支付</div>
                </div>
                <div className="payfoot">支付安全由中国人民财产保险股份有限公司承保
                </div>
            </div> 
        )
    }

}
let mapStateToProps = (state) => {
    console.log(state)
    return {
        payment:state.payment.result || []
    }
}

export default connect(mapStateToProps, actions)(paymentComponent);