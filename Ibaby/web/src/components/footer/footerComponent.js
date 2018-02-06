import React, {Component} from 'react'
import {Route, Link} from 'react-router'

import './footer.scss'

class FooterComponent extends Component{

    render(){
        return (
            <div className="footer-bottom">
                <div className="footer-container">
                    <Link to="/" activeClassName="active">
                        <i className="iconfont icon-shouye"></i>
                        <p>首页</p>
                    </Link>
                    <Link to="/buy" activeClassName="active">
                        <i className="iconfont icon-56"></i>
                        <p>值得买</p>
                    </Link>
                    <Link to="/bring" activeClassName="active">
                        <i className="iconfont icon-shumiao"></i>
                        <p>育儿</p>
                    </Link>
                    <Link to="/cart" activeClassName="active">
                        <i className="iconfont icon-gouwuche"></i>
                        <p>购物车</p>
                    </Link>
                    <Link to="/user" activeClassName="active">
                        <i className="iconfont icon-wode1"></i>
                        <p>我的</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default FooterComponent;
