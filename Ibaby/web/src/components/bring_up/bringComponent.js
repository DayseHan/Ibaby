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
    
    render(){return(
        <div className="bring_box">
            <HeaderComponent/>
            <main>
                 <Tabs tabs={tabs}
                  initialPage={1}
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of first tab
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of second tab
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of third tab
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of third tab
                  </div>
                </Tabs>
            </main>
            <FootComponent/>
        </div>
    )}

} 

let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.details.status,
        ajaxResult: state.details.result || []
    }
}

export default connect(mapStateToProps, actions)(bringComponent);