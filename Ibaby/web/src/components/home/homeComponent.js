import HeaderComponent from '../header/headerComponent.js'
import FooterComponent from '../footer/footerComponent.js'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import { Carousel, Tabs} from 'antd-mobile'
import ReactPullLoad,{ STATS } from 'react-pullload'

import * as actions from './homeAction.js'

import './home.scss'
class HomeComponent extends Component{
    state = {
        slideIndex: 0,
    }

    constructor(){
        super();
        this.state ={
            action: STATS.init,
        }
    }

    handleAction = (action) => {
        // console.info(action, this.state.action,action === this.state.action);
        if(action !== STATS.loading){
            return false;
        }

        //DO NOT modify below code
        this.setState({
            action: action
        })
    }

    getScrollTop = ()=>{
        if(this.refs.reactpullload){
            // console.info(this.refs.reactpullload.getScrollTop());
        }
    }
    setScrollTop = ()=>{
        if(this.refs.reactpullload){
            // console.info(this.refs.reactpullload.setScrollTop(100));
        }
    }

    componentWillMount() {
        this.props.banner().then(res=>{
            // console.log(this.props.bannerResult);
        })

        this.props.tabs().then(res=>{
            // console.log(this.props.tabsResult)
        })

    }

    componentDidMount() {
        //  
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);

        var _body = document.querySelector('.container');
        // console.log(aa.scrollTop);
        _body.addEventListener('scroll', function () {
            var obj = document.querySelector('.am-tabs-tab-bar-wrap');
            // console.log(_body.scrollTop)
            // obj.classList.add('fixed');
            if (_body.scrollTop >= 375) {
                obj.style.position = 'fixed';
                obj.style.zIndex = 9999;
                obj.style.top = '90px';
                // obj.style.width = '750px'
            }else if (_body.scrollTop < 375) {
                obj.style.position = '';
            }

            var _top = document.querySelector('.scrolltop');
            if (_body.scrollTop >= 1000) {
                _top.style.display = 'block';
            }else{
                _top.style.display = 'none';
            }

        })
    }

    scrollTop(){
        var _body = document.querySelector('.container');
        let timer = setInterval(()=>{
            var scrollTop = _body.scrollTop;
            // console.log(scrollTop)
            var speed = Math.ceil(scrollTop/10);
            scrollTop -= speed;
            if(speed <=0 || scrollTop === 0){
                clearInterval(timer);
            }
            _body.scrollTo(0,scrollTop);
        },30)
    }

    tabschange(item){
        // console.log(item)
        this.props.onchangetabs(item.title).then(res=>{

        })
    }

    render(){
        const tabs = [
            { title: '今日热卖'},
            { title: '童鞋' },
            { title: '孕婴' },
            { title: '玩具' },
            { title: '进口' },
            { title: '女装' },
            { title: '居家' },
            { title: '美食' },
        ];
        
        return(
            <div id="home">
                <HeaderComponent/>
                <div className="scrolltop" onClick={this.scrollTop.bind(this)}><i className="iconfont icon-fanhuidingbu"></i></div>
                <ReactPullLoad className="container"
                    downEnough={150}
                    ref="reactpullload"
                    isBlockContainer={true}
                    action={this.state.action}
                    handleAction={this.handleAction}
                >
                    <div className="banner">
                        <Carousel
                            autoplay={true}
                            infinite
                            selectedIndex={0}
                        >
                        {
                            this.props.bannerResult.map((item, idx) => {
                            var path = {
                                pathname:'/details',
                                query:{id:item.id},
                            }
                            return (
                                <Link
                                    to={path}
                                    key={idx}
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={item.imgurl}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </Link>
                            )
                          })
                          }
                        </Carousel>
                    </div>
                    <div className="tabs">
                        <Tabs tabs={tabs} tabBarActiveTextColor="#FFA3B1" tabBarTextStyle={{fontSize:'30px'}} onChange={this.tabschange.bind(this)}>
                            <div className="itemBox">
                                {this.props.tabsResult.map((item, idx)=>{
                                    var path = {
                                        pathname:'/details',
                                        query:{id:item.id},
                                    }
                                    return (
                                        <Link to={path} key={idx} className="tabItems">
                                            <div>
                                                <img src={item.imgurl}/>
                                                <p>{item.title}</p>
                                                <p>
                                                    <span>￥</span><span>{(item.oldPrice*item.zhekou).toFixed(2)}</span>
                                                    <span className="count">{item.buyNum}人已抢</span>
                                                </p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </Tabs>
                    </div>
                    <div className="nomore">~~爱贝多~~</div>
                </ReactPullLoad>
                <FooterComponent/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.home.status,
        bannerResult: state.home.banner_result || [],
        tabsResult: state.home.tabs_result || [],
    }
}

export default connect(mapStateToProps, actions)(HomeComponent);