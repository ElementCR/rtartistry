import React, { Component } from 'react';
import NavBar from './NavBar';

import Booth1 from './images/booth1.jpg'
import {Row, Col, Image} from "react-bootstrap"
import FBImg from "./images/fbimg.png"
import IGImg from "./images/igimg.png"

class Contact extends Component {
    render() {
        return (
            <div className="container" id="content-body">
                <NavBar/>
                <h1>Commission Work & Contact Me</h1>
                <Row className="gallery-row">
                    <Col>
                        <Image id="ContactImg" src={Booth1} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h2>Riley</h2>
                        <div>
                           Phone Number: ###-###-####
                           <br/>
                           <br/>
                           Email: <a href="mailto:emailhere@gmail.com">Click Here</a>
                           <br/>
                           <br/>
                           <Row>
                               <Col>
                                <a href="https://www.facebook.com/roundtableartistry/">
                                    <Image className="sm-icon" src={FBImg}/>
                                </a>
                                   
                               </Col>
                               <Col>
                                <a href="https://www.instagram.com/roundtableartistry/?hl=en">
                                <Image className="sm-icon" src={IGImg}/>
                                </a>
                               </Col>
                           </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;