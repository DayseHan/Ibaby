import React,{Component} from 'react'
import './prevBack.scss'

export default class PrevBack extends Component{
    getBack(){
        
    }
    render(){
        return (
            <div className="prevBack" >
                <i className="iconfont icon-shangyiye1" onClick={this.getBack.bind(this)}></i>
            </div>
        )
    }
}


