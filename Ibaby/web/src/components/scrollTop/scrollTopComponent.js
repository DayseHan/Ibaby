import React, {Component} from 'react'

import './scrollTopljt.scss'

class ScrollTopComponent extends Component{
    componentDidMount(){
        var _body = document.querySelector('.container');
        // console.log(aa.scrollTop);
        _body.addEventListener('scroll', function () {
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

    render(){
        return (
            <div className="scrolltop" onClick={this.scrollTop.bind(this)}><i className="iconfont icon-fanhuidingbu"></i></div>
        )
    }
}

export default ScrollTopComponent;