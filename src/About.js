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
                    <Col>
                        <h2>Riley</h2>
                        <div>
                            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
                            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
                            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
                            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph <br/> <br/>
                            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph <br/>
                            Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph <br/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default About;