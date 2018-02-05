import HeaderComponent from '../header/headerComponent.js'
import FooterComponent from '../footer/footerComponent.js'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Carousel, Tabs} from 'antd-mobile';

import * as actions from './homeAction.js'

import './home.scss'

class HomeComponent extends Component{
    state = {
        slideIndex: 0,
    }
    
    componentWillMount() {
        this.props.banner().then(res=>{
            // console.log(this.props.ajaxResult);
        })

        this.props.tabs().then(res=>{
            console.log(this.props.tabsResult)
        })
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render(){
        const tabs = [
            { title: '今日特卖'},
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
                <div className="container">
                    <div className="banner">
                        <Carousel
                            autoplay={true}
                            infinite
                            selectedIndex={0}
                        >
                        {this.props.ajaxResult.map((item, idx) => {
                            return (
                                <a
                                    href="/details"
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
                                </a>
                            )
                          })}
                        </Carousel>
                    </div>
                    <div className="tabs">
                        <Tabs tabs={tabs} tabBarActiveTextColor="#FFA3B1" tabBarTextStyle={{fontSize:'30px'}}>
                            <div className="itemBox">
                                {this.props.tabsResult.map((item, idx)=>{
                                    return (
                                        <a href="/details" key={idx} className="tabItems">
                                            <div>
                                                <img/>
                                                <p>{item.title}</p>
                                                <p>
                                                    <span>￥</span><span>{item.price}</span>
                                                    <span className="count">{item.count}人已抢</span>
                                                </p>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </Tabs>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.home.status,
        ajaxResult: state.home.banner_result || [],
        tabsResult: state.home.tabs_result || [],
    }
}

export default connect(mapStateToProps, actions)(HomeComponent);