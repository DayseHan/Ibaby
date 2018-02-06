import React,{Component} from 'react'
import {Link} from 'react-router'
import * as actions from './classifyAction'
import { connect } from 'react-redux'
import { Tabs, WhiteSpace } from 'antd-mobile';
import './classify.scss'
import PrevBack from '../back/backComponent'


const tabs = [
    { title: '分类' },
    { title: '品牌' }
];

const componentHeight = {
    "height": window.innerHeight - (window.innerWidth / 20 )
}

class Classify extends Component{
    state = {
        activeIndex:0
    }
    componentDidMount() {
        this.props.getMenu().then((res) => {
            // console.log(res);
        });
    }
    componentWillReceiveProps(){
        this.rightLeftClass()
    }
    chooseMenuScroll(index){
        let scrollMove = (ele,target)=>{
            let vector = Math.round((target - ele.scrollTop) / 10);
            let scrollTimer = setInterval(()=>{
                ele.scrollTop += vector;
                if (((ele.scrollTop >= target) && vector > 0) || ((ele.scrollTop <= target) && vector < 0) || ((ele.scrollTop + ele.clientHeight + 1) >= ele.scrollHeight)) {
                    ele.scrollTop = target + 1;
                    clearInterval(scrollTimer);
                }
            },10);
        }
        let rightUlTemp = this.refs.menuRight;
        // console.log(rightUl);
        let rightTo = rightUlTemp.querySelectorAll('.menuRightTitle')[index].offsetTop;
        scrollMove(rightUlTemp, rightTo);
    }
    rightLeftClass(){
        // console.log(666);
        // 左
        let leftUl = this.refs.menuLeftLi;
        let leftLiEle = leftUl.getElementsByTagName('li');
        
        // 右
        let rightUl = this.refs.menuRight;
        let rightLiEle = rightUl.getElementsByTagName('dd');
        // console.log(rightLiEle);
        let scrollIndex = 0;
        rightUl.addEventListener('scroll',()=>{
            // console.log(666);
            let thisScrollTop = rightUl.scrollTop;

            for (var i = 0; i < rightLiEle.length;i++){
                if(thisScrollTop >= rightLiEle[i].offsetTop) scrollIndex = i;
                // console.log(rightLiEle[i])
            }
            // 去除所有高亮
            for (var i = 0; i < leftLiEle.length;i++){
                leftLiEle[i].classList.remove('menu-active');
            }
            leftLiEle[scrollIndex].classList.add('menu-active');
        },false)
    }
    arrFilter(arrObj){
        let arr = [];
        arrObj.forEach((item,i)=>{
            let index = -1;
            let alreact = arr.some((Item,j)=>{
                if(item.cateIndex === Item.cateIndex){
                    index = j;
                    return true;
                }
            });
            if(!alreact){
                arr.push({
                    cateIndex:item.cateIndex,
                    goodsArr:[{ listId: item.cateId, listName: item.cateName, listImg:item.cateImg }]
                })
            }else{
                arr[index].goodsArr.push({ listId: item.cateId, listName: item.cateName, listImg:item.cateImg })                
            }
        })
        return arr;
    }
    brandFiler(arrObj){
        let arr = [];
        arrObj.forEach((item,i)=>{
            let index = -1;
            let alreact = arr.some((Item,j)=>{
                if(item.words === Item.words){
                    index = j;
                    return true;
                }
            });
            if(!alreact){
                arr.push({
                    words:item.words,
                    goodsArr:[{ idxId: item.idxId, brandName: item.brand, brandImg:item.brandImg }]
                })
            }else{
                arr[index].goodsArr.push({ idxId: item.idxId, brandName: item.brand, brandImg:item.brandImg })                
            }
        })
        return arr;
    }
    wordSort(arrObj){
        arrObj.sort((a,b)=>{
            if(a.words < b.words) return -1;  
            if(a.words > b.words) return 1;  
        })
        return arrObj;
    }
    render(){
        let listNav = this.props.ajaxResult[1];
        let arrRes = this.arrFilter(listNav);
        // console.log(arrRes);
        let brandNav = this.props.ajaxResult[2];
        let brandRes = this.brandFiler(brandNav);
        // 字母排序
        let sortRes = this.wordSort(brandRes);
        // console.log("hha",sortRes);
        
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
                        <div className="menu-main" style={componentHeight}>
                            <div className="menu-main-left" ref="menuLeft">
                                <ul ref="menuLeftLi">
                                    { 
                                        this.props.ajaxResult[0].map((item,index)=>{
                                            return (
                                                <li className={this.state.activeIndex == index ? "menu-active" : ''} key={index} onClick={this.chooseMenuScroll.bind(this,index)}>
                                                    <span>{item.category}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="menu-main-right" ref="menuRight">
                                <dl ref="menuRightDl">
                                    {
                                        arrRes.map((item,index)=>{
                                            const navRes = item.goodsArr.map((items,indexs)=>{
                                                return (<li key={indexs}>
                                                        <Link to={"/list/"+items.listId}>
                                                            <img src={items.listImg}/>
                                                            <p>{items.listName}</p>
                                                        </Link>
                                                    </li>)
                                            })
                                            return (
                                                <dd key={index}>
                                                    <h4 className="menuRightTitle">{item.cateIndex}</h4>
                                                    <ul>{navRes}</ul>
                                                </dd>
                                            )
                                        })
                                    }
                                </dl>
                            </div>
                        </div>
                        <div className="menu-brand" style={componentHeight}>
                            <dl>
                                {
                                    sortRes.map((item,index)=>{
                                        const titName = item.goodsArr.map((value,idx)=>{
                                            return (
                                                <li key={idx}>
                                                    <Link to={"/list/"+value.idxId}>
                                                        <img src={value.brandImg}/>
                                                        <p>{value.brandName}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                        return (
                                            <dd key={index}>
                                                <p>{item.words}</p>
                                                <ul>{titName}</ul>
                                            </dd>
                                        )
                                    })
                                }
                            </dl>
                        </div>
                    </Tabs>
                </div> 
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log("res", state);
    return {
        ajaxStatus:state.menulist.status,
        ajaxResult:state.menulist.menulist || [[],[],[]]
    }
}

export default connect(mapStateToProps, actions)(Classify);