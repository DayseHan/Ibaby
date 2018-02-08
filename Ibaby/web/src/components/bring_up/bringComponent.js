import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './bringAction.js'
import HeaderComponent from '../header/headerComponent.js'
import FootComponent from '../footer/footerComponent.js'
import './bring.scss'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
      { title: <Badge text={'3'}>精华</Badge> },
      { title: <Badge text={'今日(20)'}>问答</Badge> },
      { title: <Badge dot>同龄</Badge> },
      { title: <Badge dot>情感</Badge> },
    ];
class bringComponent extends Component{
    componentWillMount(){
        this.props.getComments()
    }
    render(){return(
        <div className="bring_box">
            <HeaderComponent/>
            <main>
                 <Tabs tabs={tabs}
                  initialPage={0}
                  tabBarActiveTextColor="#FF405D"
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                    <ul className="mainbring_comment_main">
                      {this.props.ajaxResult.map((item,idx) =>{
                          return(<li key={idx}>
                              <h3>
                                  <span>
                                      <img src={item.imgurl} alt="" />
                                  </span>
                                  <i>{item.userid}</i>
                              </h3>
                              <h4>{item.title}</h4>   
                              <p><span>经验</span>{item.comment}</p>
                              <div className="mainbring_comment_bottom"><div><span>67</span>人分享经验</div><div><span>来自：</span>育儿百科</div></div>
                          </li>)
                        })
                      }
                    </ul>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                    <ul className="mainbring_comment_main mainbring_comment_main_second">
                      {this.props.ajaxResult.map((item,idx) =>{
                          return(<li key={idx}>
                              <h3>
                                  <span>
                                      <img src={item.imgurl} alt="" />
                                  </span>
                                  <i>{item.userid}</i>
                              </h3>
                              <h4>{item.comment}</h4>  
                              <div className="mainbring_comment_bottom"><div><span>67</span>人回答</div><div><span>来自：</span>超级育儿经</div></div>
                          </li>)
                            })
                        }
                    </ul>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                      <div className="mainbring_comment_third">
                        <div className="mainbring_comment_third_t">完善宝宝信息，享专属特权</div>
                        <div className="mainbring_comment_third_b">立即完善</div>
                      </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
                    <ul className="mainbring_comment_main mainbring_comment_four">
                      {this.props.ajaxResult.map((item,idx) =>{
                        return(<li key={idx}>
                            <h3>
                                <span>
                                    <img src={item.imgurl} alt="" />
                                </span>
                                <i>{item.userid}</i>
                            </h3>
                            <h4>{item.title}</h4> 
                            <p>{item.comment}</p>  
                            <div className="mainbring_comment_bottom"><div><i className="iconfont icon-yanjing"></i><span>67</span><i className="iconfont icon-pinglun"></i><span>88</span></div><div><span>来自：</span>婆媳麻辣烫</div></div>
                        </li>)
                          })
                        }
                    </ul>
                  </div>
                </Tabs>
            </main>
            <FootComponent/>
        </div>
    )}

} 

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.bring.status,
        ajaxResult: state.bring.result || []
    }
}

export default connect(mapStateToProps, actions)(bringComponent);