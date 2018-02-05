import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from './detailsAction.js'
import './details.scss'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile'
class detailsComponent extends Component{
    componentWillMount(){
        this.props.getGood()
        
    }
    addCart(proItem){
        console.log(proItem.goodsName)
        this.props.addCart(proItem.goodsName);
    }
    addtoCart(){
        console.log(this.refs.details_sizeColor,this.animate(this.refs.details_sizeColor,{height:500 + 'px'}))
        this.animate(this.refs.details_sizeColor,{height:972});
        this.refs.overlay.style.display = 'block';
    }
    closethecart(){
        this.animate(this.refs.details_sizeColor,{height:0});
        this.refs.overlay.style.display = 'none';
    }
    countDown(){
            var countDown = this.refs.countDown;
         // 1）指定结束时间
            var endStr = '2018-3-24 10:21:56';
            var endTime = Date.parse(endStr);


            showTime();

            // 2）不断拿当前时间跟结束时间对比，计算差值
            var timer = setInterval(showTime,1000);

            function showTime(){
                // 获取当前时间
                var now = Date.now();

                // 2）不断拿当前时间跟结束时间对比，计算差值
                // 并转换成秒数
                var offset = Math.floor((endTime - now)/1000);


                // 3）把差值转换成《剩余时间》
                // 30s => 0时0分30秒
                // 65s => 0时1分5秒

                // 剩余秒数
                var secLeft = offset%60;

                // 剩余分钟数
                // 先把单位转成分钟，再对60求余
                var minLeft = Math.floor(offset/60)%60;

                // 获取小时数 
                var hourLeft = Math.floor(offset/60/60);

                // 补0操作
                secLeft = secLeft<10 ? '0'+secLeft : secLeft;
                minLeft = minLeft<10 ? '0'+minLeft : minLeft;
                hourLeft = hourLeft<10 ? '0'+hourLeft : hourLeft;

                // 4）拼接时间格式，写入页面
                countDown.innerHTML = hourLeft + '时' + minLeft + '分' + secLeft + '秒';
                

            }

    }
    animate(ele,opt,callback){console.log(666)
        var timerQty = 0;
        for(var attr in opt){
            // 记录动画数量
            timerQty++;

            //createTimer(attr);
            (function(attr){
                // 以属性名创建定时器名字
                var timerName = attr + 'timer';

                // 清除之前的定时器,放置多个定时器作用于同一个元素
                clearInterval(ele[timerName]);

                // 目标值
                var target = opt[attr];

                // 创建定时器
                ele[timerName] = setInterval(function(){
                    // 获取当前值
                    var current = getComputedStyle(ele)[attr];

                    // 提取单位
                    var unit = current.match(/\d([a-z]*)$/);
                    unit = unit ? unit[1] : '';

                    // 提取数字
                    current = parseFloat(current);

                    // 计算缓冲速度
                    var speed = (target - current)/10;

                    //判断属性是否为opacity
                    if(attr === 'opacity'){
                        speed = speed>0 ? 0.05 : -0.05;
                    }else{
                        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
                    }

                    // 到达目标值/清除定时器
                    if(current === target){
                        clearInterval(ele[timerName]);
                        current = target - speed;

                        // 数量减1
                        timerQty--;

                        // 执行回调函数
                        // 最后一个动画执行完成后才执行回调函数
                        if(typeof callback === 'function' && timerQty===0){
                            callback();
                        }
                    }

                    ele.style[attr] = current + speed + unit;

                },30);
            })(attr)
        }   
    }
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 0,
    }
    componentDidMount() {
        // simulate img loading
        this.countDown(),
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
    }
    render(){
        return (
            <div className="detailsbigBox">
                <header className="head">
                    <i className="iconfont icon-shangyiye1"></i>
                    <div className="headcenter">
                        <span>离特卖结束还剩</span>
                        <span ref="countDown">{this.state.nowdate}</span>
                    </div>
                    <span className="headleft">
                        <i className="iconfont icon-fenxiang"></i>
                        <i className="iconfont icon-msnui-more"></i>
                    </span>
                </header>
                <main className="main">
                     <Carousel
                      autoplay={false}
                      infinite
                      selectedIndex={1}
                      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                      afterChange={index => console.log('slide to', index)}>
                      {this.state.data.map(val => (
                        <a
                          key={val}
                          href="http://www.alipay.com"
                          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                          <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                              // fire window resize event to change height
                              window.dispatchEvent(new Event('resize'));
                              this.setState({ imgHeight: 'auto' });
                            }}
                          />
                        </a>
                      ))}
                    </Carousel>
                    <div className="maindetails">
                        <p className="maindetails_t"><span>￥141.1</span><span>￥359</span><span>包邮</span></p>
                        <div className="maindetails_c">
                            <div>
                                <p><span>品牌特卖</span>巴拉巴拉儿童轻薄羽绒服反季童装<br/>
                                男童女童秋冬季中大童宝宝</p>
                            </div>
                            <span><i className="iconfont icon-shoucang"></i><br/>收藏</span>
                        </div>
                        <p className="maindetails_b">此商品不参加多件打折&nbsp;日本可卿面料，填充90朵绒</p>
                    </div>
                    <ul className="maindetails_sale">
                        <li><div><span>券</span>可领取优惠券<span>￥10</span><span>￥30</span></div><i className="iconfont icon-xiayiye1"></i>
                        </li>
                        <li><div><span>vip</span>铂金卡首单再减57.9元</div><div>送红包<i className="iconfont icon-xiayiye1"></i></div>
                        </li>
                        <li><div><span>✔</span>返105贝壳</div><div><span>✔</span>正品保证</div><div><span>✔</span>全场包邮</div><div><i className="iconfont icon-xiayiye1"></i></div>
                        </li>
                    </ul>
                    <div className="maindetails_size">
                        <span className="button" onClick={this.addtoCart.bind(this)}>请选择&nbsp;尺码&nbsp;颜色<i className="iconfont icon-xiayiye1"></i></span>       
                    </div>
                    <div className="details_sizeColor" ref="details_sizeColor">
                        <img/>
                    </div>
                    <div className="overlay" ref="overlay" onClick={this.closethecart.bind(this)}></div>      
                    {
                        this.props.ajaxResult.map( item => {
                            console.log(this.props.ajaxResult)
                            return (
                                <ul key={item.goodsId}>
                                    <li>{item.goodsName}</li>
                                    <li><input type="button" value="加入购物车" onClick={this.addCart.bind(this, item)}/></li>
                                </ul>
                            )
                        })
                    } 
                </main>
                <footer className="foot">
                    <div><i className="iconfont icon-dianpu"></i><span>店铺</span></div>
                    <div><i className="iconfont icon-iconrx"></i><span>客服</span></div>
                    <div><i className="iconfont icon-gouwuche"></i><i className="cartnumber">0</i><span>购物车</span></div>
                    <div><span>立即购买</span></div>
                    <div><span>加入购物车</span></div>
                </footer>
            </div>
        )
    }
} 
//store.getSate() => state
let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.details.status,
        ajaxResult: state.details.result || []
    }
}

export default connect(mapStateToProps, actions)(detailsComponent);