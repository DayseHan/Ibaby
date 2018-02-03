import HeaderComponent from '../header/headerComponent.js'
import FooterComponent from '../footer/footerComponent.js'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Carousel} from 'antd-mobile';

// import * as actions from './homeAction.js'

import './home.scss'

export default class HomeComponent extends Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 0,
    }
    
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render(){
        return(
            <div id="home">
                <HeaderComponent/>
                <div className="container">
                    <Carousel
                        autoplay={false}
                        infinite
                        selectedIndex={1}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                      ))}
                    </Carousel>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}