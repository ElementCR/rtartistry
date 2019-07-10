import React, { Component } from 'react';
import NavBar from './NavBar';
import {Row, Col, Image} from 'react-bootstrap';
import Split1 from './images/split1.jpg'
import Split2 from './images/batmancity.jpg'
import Split3 from './images/greenplanettexturespace.jpg'
import Split4 from './images/covet.jpg'
import Split5 from './images/tardispurplepinkblue.jpg'
import Split6 from './images/redandgreenplanets.jpg'


class Gallery extends Component {
    render() {
        return (
            <div className="container" id="content-gallery">
                <NavBar/>
                <h1>Gallery</h1>
                <Row className="gallery-row">
                    <Col>
                        <Image className="gallery-item" src={Split1} />
                    </Col>
                    <Col>
                        <Image className="gallery-item" src={Split2} />                  
                    </Col>
                    <Col>
                        <Image className="gallery-item" src={Split3} />
                    </Col>
                </Row>
                <Row className="gallery-row">
                    <Col>
                        <Image className="gallery-item" src={Split4} />
                    </Col>
                    <Col>
                        <Image className="gallery-item" src={Split5} />                    
                    </Col>
                    <Col>
                        <Image className="gallery-item" src={Split6} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Gallery;