import React, { Component } from 'react';
import NavBar from './NavBar';
import Portrait from './images/portrait.jpg'
import {Row, Col, Image} from "react-bootstrap"

class About extends Component {
    render() {
        return (
            <div className="container" id="content-body">
                <NavBar/>
                <h1>About the Artist</h1>
                <Row>
                    <Col>
                        <Image id="portrait" src={Portrait} />
                    </Col>
<<<<<<< HEAD
                    <Col id="biotext">
=======
                    <Col id="bio-text">
>>>>>>> 2b4e7a825660624106de5cfd84aef2346bad0756
                        <h2>Riley</h2>
                        <div>
                            Meet Riley! One of the most innovative Spray-Paint and Graffiti artists in the wonderful city of Chattanooga, TN.
                            <br/> <br/>
                            Inspired by the love of Space, Gaming, and Animation. Riley infuses their work with symbolism that resonates with all geeks and nerds alike. <br/> <br/>
                            You can always expect Riley to bring a twist to nerd-core imagery with color, texture, and grit.<br/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default About;