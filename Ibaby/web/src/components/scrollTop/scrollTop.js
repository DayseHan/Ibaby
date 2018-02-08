import React,{Component} from 'react'
import './scrollTop.scss'

export default class ScrollTop extends Component{
    componentDidMount(){
        window.addEventListener('scroll',this.scrollIndex.bind(this));
    }
    scrollIndex(){
        if(window.scrollY >= 500){
            this.refs.scrollRef.style.display = 'block';
        }else{
            this.refs.scrollRef.style.display = 'none';            
            // console.log(777);
        }
    }
    scrollTop(){
        let timer = setInterval(()=>{
            let scrollTop = window.scrollY;
            let speed = Math.ceil(scrollTop/10);
            scrollTop -= speed;
            // console.log(speed);
            if(scrollTop <= 0){
                clearInterval(timer);
            }
            window.scrollTo(0, scrollTop);
        },30);
    }
    render(){
        return (
            <div className="scrollTop" onClick={this.scrollTop.bind(this)} ref="scrollRef">
                <span className="iconfont icon-fanhuidingbu"></span>
            </div >
        )
    }
}