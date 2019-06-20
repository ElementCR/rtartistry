import React, { Component } from 'react';
import NavBar from './NavBar';
import {Row, Col, Image} from 'react-bootstrap';
import Split1 from './images/split1.jpg'

class Gallery extends Component {
    render() {
        return (
            <div className="container" id="content-body">
                <NavBar/>
                <h1>Gallery</h1>
                <Row className="gallery-row">
                    <Col>
                        <Image className="gallery-item" src={Split1} />
                    </Col>
                    <Col>
                        <Image className="gallery-item" src={Split1} />                  
                    </Col>
                    <Col>
                        <Image className="gallery-item" src={Split1} />
                    </Col>
                </Row>
                <Row className="gallery-row">
                    <Col>
                        <Image className="gallery-item" src={Split1} />
                    </Col>
                    <Col>
                        <Image className="gallery-item" src={Split1} />                    
                    </Col>
                    <Col>
                        <Image className="gallery-item" src={Split1} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Gallery;