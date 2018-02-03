import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from './prolistAction'

class ProlistComponent extends Component{
    componentWillMount(){
        this.props.getGoods()
    }

    addCart(proItem){
        console.log(proItem.goodsName)
        this.props.addCart(proItem.goodsName);
    }

    render(){
        return (
            <div>
                {
                    this.props.ajaxResult.map( item => {
                        console.log(this.props.ajaxResult)
                        return (
                            <ul key={item.goodsId}>
                                <li>{item.goodsName}</li>
                                <li><input type="button" value="加入购物车" onClick={this.addCart.bind(this, item)}/></li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
} 
//store.getSate() => state
let mapStateToProps = (state) => {
    return {
        ajaxStatus: state.prolist.status,
        ajaxResult: state.prolist.result || []
    }
}

export default connect(mapStateToProps, actions)(ProlistComponent);