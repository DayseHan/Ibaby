import React,{Component} from 'react'
import {Link} from 'react-router'
import { Carousel, Tabs } from 'antd-mobile'
import { connect } from 'react-redux'
import * as actions from './zhibuyAction'
import FooterComponent from '../footer/footerComponent.js'
import './zhibuy.scss'

class Zhibuy extends Component{
    componentWillMount(){
        this.getZhibuy()
    }
    tabBarChange(name){
        this.getZhibuy(name.title)
        // console.log(name)
    }
    getZhibuy(title = "推荐"){
        this.props.zhibuy(title).then((res)=>{
            if(res.state) this.dealWaterRes()
        })
    }
    componentWillReceiveProps(){
        
    }
    dealWaterRes(){
        // console.log(document);
        // console.log()
        // this.refs.waterfallMain.addEventListener('DOMContentLoaded', function () {
            let mainWidth = this.refs.waterfall;
            // console.log(mainWidth);
            // Get child elements all Width
            let childWidth = mainWidth.children;
            let imgWidth = childWidth[0].offsetWidth;
            // 列容纳个数
            let colNum = Math.floor((window.innerWidth-4) / imgWidth);
            // console.log(colNum)
            let gap = Math.floor((window.innerWidth - 4) % imgWidth / (colNum + 1));
            
            let pos = [];
            for (let i = 0; i < colNum; i++) {
                pos.push({
                    left: (i + 1) * gap + i * imgWidth,
                    top: gap
                });
            }
            
            // 获取所有子元素
            for (var i = 0; i < childWidth.length; i++) {
                // console.log(childWidth[i]);
                (function(i){
                    var img = childWidth[i].querySelector('img');
                    
                    img.onload = function () {
                        let minIdx = 0;
                        let min = pos[minIdx].top;
                        
                        for (var j = 1; j < pos.length; j++) {
                            if (pos[j].top < min) {
                                min = pos[j].top;
                                minIdx = j;
                            }
                        }
                        // console.log(childWidth[i])
                        // childWidth[i].style.left = pos[minIdx].left + 'px';
                        // childWidth[i].style.top = pos[minIdx].top + 'px';
                        // pos[minIdx].top += childWidth[i].offsetHeight + gap;
                        // console.log(childWidth[i], childWidth[j])
                    }
                })(i)
            }
        // }.bind(this));
    }
    render(){
        const titleTab = [
            { title: "推荐" },
            { title: "童装" },
            { title: "女装" },
            { title: "玩具" },
            { title: "孕婴" },
            { title: "美妆" }
        ]
        return (
            <div className="zhibuy" ref="waterfallMain">
                <div className="headerTop">
                    <Link to="message" className="zhibuy-message">
                        <i className="iconfont icon-pinglun1"></i>
                    </Link>
                    <Link to="searchpage" className="zhibuy-seach">
                        <i className="iconfont icon-search"></i>
                        <span>值得买、买啥、清单、用户</span>
                    </Link>
                    <Link to="user" className="zhibuy-user">
                        <i className="iconfont icon-ziyuan"></i>
                    </Link>
                </div> 
                <div className="zhibuy-main">
                    <Tabs tabs={titleTab} tabBarActiveTextColor="#FFA3B1" tabBarTextStyle={{ fontSize: '25px' }} onChange={this.tabBarChange.bind(this)}>
                        <div className="zhibuy-waterfall">
                            <ul ref="waterfall">
                                {   
                                    // console.log("da",this.props.zhiBuyResult)
                                    this.props.zhiBuyResult.map((item, index) => {
                                        let zhibuyParams = {
                                            pathname: '/details',
                                            query: { id: item.id },
                                        }
                                        return (
                                            <li key={index}>
                                                <Link to={zhibuyParams}>
                                                    <div className="water-img">
                                                        <img src={item.imgurl}/>
                                                    </div>
                                                    <p className="water-pinglun">{item.pinglun}</p>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Tabs>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state.zhibuy.zhibuy);
    return {
        zhiBuyState: state.zhibuy.status,
        zhiBuyResult: state.zhibuy.zhibuy || []
    }
}

export default connect(mapStateToProps, actions)(Zhibuy) 