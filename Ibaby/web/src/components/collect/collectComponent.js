import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './collectAction'
import BackComponent from '../back/backComponent'
import LoadingComponent from '../loading/loadingComponent'
import {Route,Link,hashHistory} from 'react-router'

import './collect.scss'

class CollectComponent extends Component{
    state = {
        text:'我的收藏',
        change:'',
        show:'none',
        show2:'none',
        show3:'block',
    }

    componentWillMount(){
        console.log('refs:',this.refs)
        var phone = JSON.parse(localStorage.getItem('username'));
        var user_id = JSON.parse(localStorage.getItem('user_id'));
        if(!user_id){
            
            this.setState({
                show2:'block',
                show3:'none',
            })
            return;
        }
        this.props.collect(user_id).then((res)=>{
            setTimeout(()=>{
                this.refs.loading.hide();
            }, 1300)
            
            if(res.data.results.length<1){
                this.setState({show:'block',show3:'none'});
                
            }
        })
    }

    go_details(g_id){
        hashHistory.push({pathname:'/details',query:{id:g_id}});
    }

    un_collect(arr,id,_ref){
        // console.log(arr,id,_ref);
        var idx = arr.indexOf(id)
        if(idx == -1){
            arr.push(id);
            this.refs[_ref].className="iconfont icon-xin";
        }else{
            this.refs[_ref].className="iconfont icon-xin act";
            arr.splice(idx,1);
        }
        // console.log(arr);
    }
    _save(arr){
        // console.log(arr.join(','));
        console.log('refs:',this.refs);
        var _ref = this.refs;
        var phone = JSON.parse(localStorage.getItem('username'));
        var user_id = JSON.parse(localStorage.getItem('user_id'));
        this.props._save(arr.join(','),user_id).then(res=>{
            this.props.collect(user_id).then((res)=>{
                // console.log(res);
                console.log('refs:',this.refs);
                this.refs = _ref;
            })
        })
    }


                        // <li>
                        //     <Link to="">
                        //         <span><img src="./src/assets/images/user1.jpg"/></span>
                        //         <p>日本原装进口，本土版花王，柔软呵护新体验</p>
                        //         <span>￥998</span><br/><br/>
                        //         <span>900人已抢</span>
                        //         <i className="iconfont icon-shoucang"></i>
                        //     </Link>
                        // </li>


    render(){

        const arr = [];
        {
            console.log(this.props.ajaxStatus)
        }
        return (

            <div className="collect">
                <LoadingComponent ref="loading" change={this.props.ajaxStatus}></LoadingComponent>
                <BackComponent text={this.state.text}/>
                <div className="kong" style={{display:this.state.show}}>
                    亲，你的收藏列表空空如也！
                </div>
                <div className="kong" style={{display:this.state.show2}}>
                    亲，你还没有登录哦！
                </div>

                <div className="list">
                    <ul>

                        {
                            // console.log(this.props.ajaxResult)
                            // if(!this.props.ajaxResult){
                            //     this.setState({show:'block'});
                            // }
                            this.props.ajaxResult.map((item,idx)=>{
                                arr.push(item.id);
                                // console.log(arr);

                                return (
                                    <li key={item.id}>
                                        <span><img src={item.imgurl} onClick={this.go_details.bind(this,item.id)}/></span>
                                        <p onClick={this.go_details.bind(this,item.id)}>{item.title}</p>
                                        <span>￥{item.oldPrice*1*item.zhekou}</span><br/>
                                        <span>{item.buyNum}人已抢</span>
                                        
                                        <i ref={'xing'+item.id} className="iconfont icon-xin" onClick={this.un_collect.bind(this,arr,item.id,'xing'+item.id)}></i>
                                    </li>
                                )

                            })
                        }

                        <li className="save" style={{display:this.state.show3}}>
                            <button value="保存修改" onClick={this._save.bind(this,arr)}>保存修改</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        ajaxStatus:state.collect.collect_status,
        ajaxResult:state.collect.collect_result||[],
    }
}

export default connect(mapStateToProps,actions)(CollectComponent)