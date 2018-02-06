import React, {Component} from 'react'
import {Route, Link} from 'react-router'
import './header.scss'

//主页头部
class HeaderComponent extends Component{
    render(){
        return (
            <div className="header">
                <div className="header-container">
                    <Link to="message" className="message">
                        <i className="iconfont icon-pinglun1"></i>
                        <p>消息</p>
                    </Link>
                    <div>
                        <Link to="searchpage" className="search">
                            <i className="iconfont icon-search"></i>
                        </Link>
                        <Link to="/" className="saoyisao">
                            <i className="iconfont icon-saoyisao"></i>
                        </Link>
                    </div>
<<<<<<< HEAD
                    <Link to="/classify" className="classfy">
=======
                    <Link to="/classify" className="classify">
>>>>>>> d24d2326c80e26f72e5b3205b1deb20bbfb2257c
                        <i className="iconfont icon-fenlei"></i>
                        <p>分类</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;
