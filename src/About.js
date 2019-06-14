import React, { Component } from 'react';
import NavBar from './NavBar';

class About extends Component {
    render() {
        return (
            <div className="container" id="content-body">
                <NavBar/>
                <h1>About the Artist</h1>
            </div>
        );
    }
}
export default About;