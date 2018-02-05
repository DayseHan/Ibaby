import React,{Component} from 'react'
import {Link} from 'react-router'
import './classify.scss'
import PrevBack from '../prevBack/prevBack'
import { Tabs, WhiteSpace } from 'antd-mobile';
import BetterScroll from 'better-scroll'

const tabs = [
    { title: '分类' },
    { title: '品牌' }
];
export default class Classify extends Component{
    static defaultProps = {
        val: '',
        menuIndexChange: true
    }
    chooseMenu(){
        // this.menuIndex = index;
        this.props.menuIndexChange = false;

    }
    render(){
        return (
            <div className="classifylist">
                <div className="classify-header-top">
                    <PrevBack/>
                    <div className="classify-seach">
                        <i className="iconfont icon-search"></i>
                        <span>dadasd</span>
                    </div>
                    <div className="classify-scan">
                        <Link to="#" className="iconfont icon-saoyisao"></Link>
                    </div>
                </div>
                <div className="classify-main">
                    <Tabs tabs={tabs} initalPage={'t2'}>
                        <div className="menu-main">
                            <div className="menu-main-left">
                                <ul>
                                    <li className="menu_li" onClick={this.chooseMenu.bind(this)}>
                                        <span>热销分类</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-main-right">
                                <dl>
                                    <dd>
                                        dd
                                    </dd>
                                </dl>
                            </div>                            
                        </div>
                        <div style={{ display: 'flex',backgroundColor: '#fff' }}>
                            Content of second tab
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}