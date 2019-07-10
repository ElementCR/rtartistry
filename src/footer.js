import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import PinkTri from './images/pinktri.png';

export default class footer extends Component {
    render() {
        return (
            <div className='container' id="footerFlex">
                <Image id="footer-img" src={PinkTri}/>
                <a id="footer-text" href="https://position5.io">Powered By: Position5</a>
                <Image id="footer-img" src={PinkTri}/>
            </div>
        )
    }
}
