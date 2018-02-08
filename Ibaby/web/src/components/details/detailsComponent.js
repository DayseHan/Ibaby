import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from './detailsAction.js'
import './details.scss'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile'
import {Route,Link,hashHistory} from 'react-router'
import { Popover, NavBar, Icon } from 'antd-mobile';
import { Toast,ActivityIndicator, Button } from 'antd-mobile';
import LoadingComponent from '../loading/loadingComponent.js'
const Item = Popover.Item;
class detailsComponent extends Component{
    componentWillMount(){
        var data = this.props.location.query;
        this.state.username = JSON.parse(localStorage.getItem('username'))
        this.state.userid = JSON.parse(localStorage.getItem('user_id'))
        console.log(data,this.state.userid)
        this.props.getCartcount(this.state.userid).then(res =>{console.log(res)
            let cartCount = 0;
            var cartcountresult = res.data.results
            for(let i=0;i<cartcountresult.length;i++){
                cartCount += cartcountresult[i].count*1
            }
            this.setState({cartCount:cartCount})
        })
        this.props.getGood(data).then(res =>{console.log(res)
            this.state.groundImg = res.data.results[0].groundImg.split(',');
            this.state.color = res.data.results[0].color.split(',');
            this.state.size = res.data.results[0].size.split(',');
        })
        clearTimeout(this.closeTimer);
    }
    addCart(proItem){
        console.log(this.state.buyColor,this.state.buySize,this.state.count,this.state.username)
        if(this.state.username == ''){
            hashHistory.push('/login')
        }else if(this.state.buyColor=='' || this.state.buySize==''){
            this.showToast();
        }else{
            this.props.addCart(this.state.buyColor,this.state.buySize,this.state.count,this.props.location.query,this.state.userid,this.state.username).then(res =>{this.setState({buyColor:'',buySize:'',count:1,selectColor:'颜色',selectSize:'尺寸',indexC:100,indexS:100})}).then(res =>{this.props.getCartcount(this.state.userid).then(res1 =>{console.log(res1)
                        let cartCount = 0;
                        var cartcountresult = res1.data.results
                        for(let i=0;i<cartcountresult.length;i++){
                            cartCount += cartcountresult[i].count*1
                        }
                        this.setState({cartCount:cartCount})
                         })
                    });
            this.closethecart();
            this.successToast();
            var details_sizeColor_common_b1 = document.querySelector('.details_sizeColor_common_b1');
            var details_sizeColor_common_b2 = document.querySelector('.details_sizeColor_common_b2');
            var activeColors = details_sizeColor_common_b1.querySelectorAll('li');
            var activeSizes = details_sizeColor_common_b2.querySelectorAll('li');
            console.log(activeColors)
            for(let j=0;j<activeColors.length;j++){
                activeColors[j].classList.remove('changeColor');
            }
            for(let j=0;j<activeSizes.length;j++){
                activeSizes[j].classList.remove('changeColor');
            }         
        }
    }
    addtoCart(){
        this.animate(this.refs.details_sizeColor,{bottom:0});  
        this.refs.overlay.style.display = 'block';
        this.animate(this.refs.overlay,{opacity:0.4}); 
    }
    jumptoCart(){
         hashHistory.push('/cart')
     }
    closethecart(){
        this.animate(this.refs.details_sizeColor,{bottom:-971});
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
    goBack(){
        hashHistory.go(-1);
    }
    Add(){
        if(this.state.count < 10){
            this.setState({ count:this.state.count+1 });
        }
    }
    Minus(){
        if(this.state.count > 1){
            this.setState({ count:this.state.count-1 });
        }
    }
    addColor(idx,item,event){
        console.log(idx,event.target)
        if(this.state.indexC != idx || event.target.className ==''){
             this.setState({indexC:idx});
             this.setState({buyColor:item});
             this.setState({selectColor:''});
         }else if(this.state.indexC === idx && event.target.className =='changeColor'){
            event.target.classList.remove('changeColor');
            this.setState({indexC:''});
            this.setState({buyColor:''});
            this.setState({selectColor:'颜色'});
         }else{
            event.target.classList.add('changeColor');
            this.setState({buyColor:item});
            this.setState({selectColor:''});
         }
    }
    addSize(idx,item,event){   
        console.log(idx,event.target)
        if(this.state.indexS != idx || event.target.className ==''){
             this.setState({indexS:idx});
             this.setState({buySize:item});
             this.setState({selectSize:''});
         }else if(this.state.indexS === idx && event.target.className =='changeColor'){
            event.target.classList.remove('changeColor');
            this.setState({indexS:''});
            this.setState({buySize:''});
            this.setState({selectSize:'尺寸'});
         }else{
            event.target.classList.add('changeColor');
            this.setState({buySize:item});
            this.setState({selectSize:''});
         }
    }
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
    };
    successToast() {
      Toast.success('添加购物车成功☺', 1);
    }
    showToast() {
      Toast.info('请添加商品信息☺', 1);
    }
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 0,
        groundImg: [],
        color: [],
        size: [],
        buyColor:'',
        buySize:'',
        selectSize:'尺码',
        selectColor:'颜色',
        count: 1,
        indexS: 100,
        indexC: 100,
        username:'',
        userid:'',
        visible: false,
        selected: '',
        cartCount: 0,
        text: 0
    } 
    componentDidMount() {
        // simulate img loading
        this.countDown(),
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
        // Toast.loading('Loading...', 30, () => {
        //   console.log('Load complete !!!');
        // });

        setTimeout(() => {
              Toast.hide();
            }, 3000);
        }
    render(){
        return (
            <div className="detailsbigBox">
                <header className="head">
                    <i className="iconfont icon-shangyiye1" onClick={this.goBack.bind(this)}></i>
                    <div className="headcenter">
                        <span>离特卖结束还剩</span>
                        <span ref="countDown">{this.state.nowdate}</span>
                    </div>
                    <span className="headleft">
                        <i className="iconfont icon-fenxiang"></i>
                        <i>
                            <NavBar
                                mode="light"
                                rightContent={
                                  <Popover mask
                                    overlayClassName="fortest"
                                    overlayStyle={{ color: 'currentColor',background:'#222' }}
                                    visible={this.state.visible}
                                    overlay={[
                                        (<Item key="4" value="scan" style={{ whiteSpace: 'nowrap',fontSize: 30,width:200,textAlign:'center',height:60}}><span className="iconfont icon-pinglun1 commonicon" style={{fontSize:30,display:'block',height:60,lineHeight:'60px',background:'#222',width:200,color:'#fff'}}>消息</span></Item>),
                                        (<Item key="5" value="1"  style={{ whiteSpace: 'nowrap',fontSize: 30 ,width:200,textAlign:'center',height:60}}><span className="iconfont icon-shouye commonicon" style={{fontSize:30,display:'block',height:60,lineHeight:'60px',background:'#222',width:200,color:'#fff'}}>首页</span></Item>),
                                        (<Item key="6" value="button ct" style={{ whiteSpace: 'nowrap',fontSize: 30,textAlign:'center',height:60 }}><span className="iconfont icon-xiaoxi commonicon" style={{fontSize:30,display:'block',height:60,lineHeight:'60px',background:'#222',width:200,color:'#fff'}}>反馈</span>    
                                      </Item>),
                                        (<Item key="7" value="2"   style={{fontSize: 30,textAlign:'center',height:60 }}><span className="iconfont icon-zuji commonicon" style={{fontSize:30,display:'block',height:60,lineHeight:'60px',background:'#222',width:200,color:'#fff'}}>足迹</span></Item>),
                                    ]}
                                    align={{
                                      overflow: { adjustY: 0, adjustX: 0 },
                                      offset: [-30, 0],
                                    }}
                                    onVisibleChange={this.handleVisibleChange}
                                    onSelect={this.onSelect}
                                  >   
                                    <i className="iconfont icon-msnui-more" style={{
                                      height: '100%',
                                      padding: '10px 15px',
                                      marginRight: '-15px',
                                      display: 'flex',
                                      color:'#222',
                                      fontSize:45}}>
                                    </i> 
                                  </Popover>
                                }
                              >
                          </NavBar>
                        </i>
                    </span>
                </header>
                <main className="main">    
                     <Carousel
                      autoplay={false}
                      infinite
                      selectedIndex={0}
                    >
                      {
                            this.state.groundImg.map((item, idx) => {
                            return(
                            <a
                              key={idx}
                              href={item}
                              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                              <img
                                src={item}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                  // fire window resize event to change height
                                  window.dispatchEvent(new Event('resize'));
                                  this.setState({ imgHeight: 'auto' });
                                }}
                              />
                            </a>)})
                      }
                    </Carousel>
                    <div className="maindetails">
                        <p className="maindetails_t"><span>￥{(this.props.ajaxDetailsResult.oldPrice*this.props.ajaxDetailsResult.zhekou).toFixed(2)}</span><span>￥{this.props.ajaxDetailsResult.oldPrice}</span><span>包邮</span></p>
                        <div className="maindetails_c">
                            <div>
                                <p><span>品牌特卖</span>{this.props.ajaxDetailsResult.name}</p>
                            </div>
                            <span><i className="iconfont icon-shoucang"></i><br/>收藏</span>
                        </div>
                        <p className="maindetails_b">{this.props.ajaxDetailsResult.title}</p>
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
                    <div className="maindetails_comment"><p>贝妈口碑<span>（111）</span></p><span>好评率<i>96%</i></span>
                    </div>
                    <div className="maindetails_comment_t"><p>晒图<span>（14）</span></p><p>尺寸不合身<span>（27）</span></p><p>质量很好<span>（27）</span></p><p>实惠<span>（111）</span></p><p>衣服不错<span>（111）</span></p><p>保暖性好<span>（111）</span></p><p>正品<span>（111）</span></p>
                    </div>
                    <ul className="maindetails_comment_main">
                        <li>
                            <h3>
                                <span>
                                    <img src="./src/assets/images/user1.jpg" alt="" />
                                </span>
                                <i>user</i>
                            </h3>
                            
                            <p>简适的沙发让人一眼就看上，沙发腿的设计令人称赞，这样的沙发摆在眼前非常的好看，无论从正面、侧面、后面都很完美，很实用做起来很舒服，很有质感，就像一件完美的艺术品。</p>
                        </li>
                        <div>查看全部评论</div>
                    </ul>
                    <div className="maindetails_bottom">没有了~~~~</div>
                    <div className="details_sizeColor" ref="details_sizeColor">
                        <div className="details_sizeColor_top">
                            <img src={this.state.groundImg[0]}/>
                            <div className="details_sizeColor_top_r">
                                <div className="details_sizeColor_top_r_t">
                                    <span>￥{(this.props.ajaxDetailsResult.oldPrice*this.props.ajaxDetailsResult.zhekou).toFixed(2)}</span><span onClick={this.closethecart.bind(this)}>&times;</span>
                                </div>
                                <span>请选择&nbsp;{this.state.selectSize}&nbsp;{this.state.selectColor}</span>
                            </div>
                        </div>
                        <div className="details_sizeColor_center">
                            <span className="details_sizeColor_common">颜色</span>
                            <ul className="details_sizeColor_common_b details_sizeColor_common_b1">
                                {this.state.color.map((item, idx) => {
                                    return(
                                        <li key={idx} ref="activeColor" id={idx} onClick={this.addColor.bind(this,idx,item)} className={this.state.indexC===idx?'changeColor' : ''}>{item}</li>
                                    )
                                    })
                                }
                            </ul>
                            <span className="details_sizeColor_common">尺码</span>
                            <ul className="details_sizeColor_common_b details_sizeColor_common_b2">
                                {this.state.size.map((item, idx) => {
                                    return(
                                        <li key={idx} ref="activeSize" id={idx} onClick={this.addSize.bind(this,idx,item)} className={this.state.indexS===idx?'changeColor' : ''}>{item}</li>
                                    )
                                    })
                                }
                            </ul>
                            <div className="details_sizeColor_qty">    
                                <span>购买数量</span>
                                <div>
                                    <span onClick={this.Minus.bind(this)}>-</span>
                                    <span>{this.state.count}</span>
                                    <span onClick={this.Add.bind(this)}>+</span>
                                </div>
                            </div>
                        </div>
                        <div className="details_sizeColor_button" onClick={this.addCart.bind(this)}>确定</div>
                    </div>
                    <div className="overlay" ref="overlay" onClick={this.closethecart.bind(this)}>
                    </div>
                </main>
                <footer className="foot">
                    <div><i className="iconfont icon-dianpu"></i><span>店铺</span></div>
                    <div><i className="iconfont icon-iconrx"></i><span>客服</span></div>
                    <div onClick={this.jumptoCart.bind(this)}><i className="iconfont icon-gouwuche"></i><i className="cartnumber">{this.state.cartCount}</i><span>购物车</span></div>
                    <div onClick={this.addtoCart.bind(this)}><span>立即购买</span></div>
                    <div onClick={this.addtoCart.bind(this)}><span>加入购物车</span></div>
                </footer>
            </div>
        )
    }
} 
//store.getSate() => state
let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.details.status,
        ajaxDetailsResult: state.details.detailsresult || [],
        ajaxgetcartcountresult : state.details.getcartcountresult || []
    }
}

export default connect(mapStateToProps, actions)(detailsComponent);