import React, { Component } from 'react';
import NavBar from './NavBar';

class Gallery extends Component {
    render() {
        return (
            <div className="container" id="content-body">
                <NavBar/>
                <h1>Gallery</h1>
            </div>
        );
    }
}

export default Gallery;