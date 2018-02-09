import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './unpaidAction'
import BackComponent from '../back/backComponent'
import LoadingComponent from '../loading/loadingComponent'
import {Route,Link,hashHistory} from 'react-router'
import {Toast} from 'antd-mobile';


import './unpaid.scss'
var price=0;

class UnpaidComponent extends Component{
    state = {
        _change:this.props.ajaxStatus,
        text:'我的订单',
        order_id:'',
        show:'none'
    }

    successToast(message) {
        Toast.success(message, 2);
    }
    offline(message) {
        Toast.offline(message,2);
    }

    componentWillMount(){
        var phone = JSON.parse(localStorage.getItem('username'));
        var user_id = JSON.parse(localStorage.getItem('user_id'));
        if(phone&&user_id){
            this.props.get_unpaid(user_id).then(res=>{
                // console.log(res);
                if(res.data.results.length>0){
                    this.setState({order_id:res.data.results[0].orderid},()=>{
                        // console.log(this.state.order_id);
                    })
                }else{
                    this.setState({show:'block'})
                }
                
                setTimeout(()=>{
                    this.refs.loading.hide();
                }, 1500)
            })
        }
    }

    paid(){
        this.props.paid(this.state.order_id).then(res=>{
            var phone = JSON.parse(localStorage.getItem('username'));
        var user_id = JSON.parse(localStorage.getItem('user_id'));
            this.successToast('操作成功');
            this.props.get_unpaid(user_id);
            price=0;
        })
    }
    unpaid(){
        this.props.unpaid(this.state.order_id).then(res=>{
            var phone = JSON.parse(localStorage.getItem('username'));
        var user_id = JSON.parse(localStorage.getItem('user_id'));
            this.successToast('操作成功');
            this.props.get_unpaid(user_id);
            price=0;

        })
    }


    go_details(g_id){
        hashHistory.push({pathname:'/details',query:{id:g_id}});
    }

    render(){

        var arr = [];
        
        return (
            <div className="unpaid">
                
                <LoadingComponent ref="loading" change={this.props.ajaxStatus}></LoadingComponent>
                <div className="kong" style={{display:this.state.show}}>
                    亲，你没有未付款的订单！
                </div>
                <BackComponent text={this.state.text}/>
                <div className="list">
                    <ul>

                        {
                            // console.log(this.props.ajaxResult)
                            // if(!this.props.ajaxResult){
                            //     this.setState({show:'block'});
                            // }
                            this.props.ajaxResult.map((item,idx)=>{
                                arr.push(item.id);
                                price=price+item.newPrice*1;

                                return (
                                    <li key={item.id}>

                                        <span><img src={item.imgurl} onClick={this.go_details.bind(this,item.id)}/></span>
                                        <p onClick={this.go_details.bind(this,item.id)}>{item.title}</p>
                                        <span>￥{item.oldPrice*1*item.zhekou}</span><br/>
                                        <span>{item.buyNum}人已抢</span>
                                        
                                    
                                    </li>
                                )

                            })
                        }

                        <li className="save" style={{display:this.state.show3}}>
                            <span>总价：{price}</span>
                            <button value="取消订单" onClick={this.unpaid.bind(this)}>取消订单</button>
                            <button value="确认付款" onClick={this.paid.bind(this)}>确认付款</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        ajaxStatus:state.unpaid.status,
        ajaxResult:state.unpaid.unpaid_result||[],
    }
}

export default connect(mapStateToProps,actions)(UnpaidComponent)