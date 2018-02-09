import React,{Component} from 'react'
import {Link} from 'react-router'
import { Carousel, Tabs } from 'antd-mobile'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'
import * as actions from './zhibuyAction'
import FooterComponent from '../footer/footerComponent.js'
import './zhibuy.scss'

const masonryOptions = {
    transitionDuration: 0
};

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
    dealWaterRes(){
        
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
                            <Masonry
                                className={'my-gallery-class'} elementType={'ul'} options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={false}
                            >
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
                            </Masonry>
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