import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './footer';

class Home extends Component {
    render() {
        return (
            <div className="container" id="content-body" >
                <NavBar/>
                <h1>Round Table Artistry</h1>
            </div>
        );
    }
}

export default Home;