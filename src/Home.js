import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './footer';
import {Row, Col, Image} from 'react-bootstrap';
import banner from './images/RTAicon_unedited.jpg'

class Home extends Component {
    render() {
        return (
            <div className="container" id="content-body" >
                <NavBar/>
                <h1>Round Table Artistry</h1>
                <Row>
                    <Col>
                        <Image className="banner" src={banner} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;